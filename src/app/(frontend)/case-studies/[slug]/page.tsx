import { notFound } from "next/navigation";

import {
  CASE_STUDIES_SLUGS_QUERY,
  CASE_STUDY_QUERY,
} from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/client";
import { Metadata } from "next";
import { urlFor } from "@/sanity/lib/image";
import { CaseStudy } from "@/features/case-studies";

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }) {
  const slug = (await params).slug;
  const caseStudy = await getCaseStudy(slug);
  if (!caseStudy) {
    return {};
  }

  const { title, excerpt, publishedAt, mainImage } = caseStudy;

  const ogImage = urlFor(mainImage)
    .width(1200)
    .height(630)
    .fit("crop")
    .auto("format")
    .url();

  const metadata: Metadata = {
    title: `${title} | XCIS AI Case Studies`,
    description: excerpt,
    openGraph: {
      title: `${title} | XCIS AI Case Studies`,
      description: excerpt,
      url: `/case-studies/${slug}`,
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

async function getCaseStudy(slug: string) {
  return sanityFetch({
    query: CASE_STUDY_QUERY,
    params: { slug },
    tags: [`caseStudy:${slug}`, "teamMember", "category"],
  });
}

export async function generateStaticParams() {
  return await sanityFetch({
    query: CASE_STUDIES_SLUGS_QUERY,
    revalidate: false,
  });
}

export default async function Page({ params }: { params: Params }) {
  const slug = (await params).slug;
  const caseStudy = await getCaseStudy(slug);

  if (!caseStudy) {
    notFound();
  }

  const { title, excerpt, publishedAt, mainImage, author } = caseStudy;
  const imageUrl = urlFor(mainImage).url();

  // Article Schema
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: excerpt,
    image: [imageUrl],
    datePublished: publishedAt,
    dateModified: publishedAt,
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
        url: "https://xcis.ai/logo.png", // Ensure this path exists
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://xcis.ai/case-studies/${slug}`,
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
        name: "Case Studies",
        item: "https://xcis.ai/case-studies",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: title,
        item: `https://xcis.ai/case-studies/${slug}`,
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
      <CaseStudy {...caseStudy} />
    </>
  );
}
