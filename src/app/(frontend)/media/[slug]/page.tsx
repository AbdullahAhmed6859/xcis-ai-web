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

  const metadata: Metadata = {
    title: media.title,
    description: media.title,
    openGraph: {
      title: media.title,
      // description: media.excerpt,
      images: media.mainImage ? [{ url: urlFor(media.mainImage).url() }] : [],
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
