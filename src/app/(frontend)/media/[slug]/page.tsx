import { notFound } from "next/navigation";

import { MEDIA_SLUGS_QUERY, MEDIUM_QUERY } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/client";
import { Metadata } from "next";
import { urlFor } from "@/sanity/lib/image";
import { Media } from "@/features/media";

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }) {
  const slug = (await params).slug;
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
  const slug = (await params).slug;
  const media = await getMedia(slug);

  if (!media) {
    notFound();
  }

  return <Media {...media} />;
}
