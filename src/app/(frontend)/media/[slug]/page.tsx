import { notFound } from "next/navigation";

import { MEDIA_SLUGS_QUERY, MEDIUM_QUERY } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/client";
import { Metadata } from "next";
import { urlFor } from "@/sanity/lib/image";
import { Media } from "@/features/media";

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;
  const media = await getMedia(slug);
  if (!media) {
    return {};
  }

  const { title, excerpt, author, publishedAt, mainImage } = media;

  const ogImage = urlFor(mainImage)
    .width(1200)
    .height(630)
    .fit("crop")
    .auto("format")
    .url();

  const metadata: Metadata = {
    title: `${title} | XCIS AI Media`,
    description: excerpt,
    authors: [{ name: author.name }],
    openGraph: {
      title: `${title} | XCIS AI Media`,
      description: excerpt ?? "",
      url: `/media/${slug}`,
      type: "article",
      publishedTime: publishedAt,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: mainImage.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: excerpt ?? "",
      images: [ogImage],
    },
  };
  return metadata;
}

async function getMedia(slug: string) {
  return sanityFetch({
    query: MEDIUM_QUERY,
    params: { slug },

    tags: [`media:${slug}`, "teamMember", "category"],
  });
}

export async function generateStaticParams() {
  return await sanityFetch({ query: MEDIA_SLUGS_QUERY });
}

export default async function Page({ params }: { params: Params }) {
  const { slug } = await params;
  const media = await getMedia(slug);

  if (!media) {
    notFound();
  }

  const { title, excerpt, publishedAt, mainImage, author } = media;
  const imageUrl = urlFor(mainImage).url();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: title,
    description: excerpt,
    image: [imageUrl],
    datePublished: publishedAt,
    dateModified: publishedAt, // Ideally, add a 'modifiedAt' field in Sanity for this
    author: {
      "@type": "Person",
      name: author.name,
      // url: `https://xcis.ai/team/${author?.slug || ''}` // Optional: link to author bio
    },
    publisher: {
      "@type": "Organization",
      name: "XCIS AI",
      logo: {
        "@type": "ImageObject",
        url: "https://xcis.ai/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://xcis.ai/media/${slug}`,
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://xcis.ai",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Media",
        item: "https://xcis.ai/media",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: title,
        item: `https://xcis.ai/media/${slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <Media {...media} />
    </>
  );
}
