import { notFound } from "next/navigation";

import { POST_QUERY, POSTS_SLUGS_QUERY } from "@/sanity/lib/queries";
import { Post } from "@/features/posts/post";
import { sanityFetch } from "@/sanity/lib/client";
import { Metadata } from "next";
import { urlFor } from "@/sanity/lib/image";

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }) {
  const slug = (await params).slug;
  const post = await getPost(slug);
  if (!post) {
    return {};
  }

  const metadata: Metadata = {
    title: post.title,
    description: post.title,
    openGraph: {
      title: post.title,
      // description: post.excerpt,
      images: post.mainImage ? [{ url: urlFor(post.mainImage).url() }] : [],
    },
  };
  return metadata;
}

async function getPost(slug: string) {
  return sanityFetch({
    query: POST_QUERY,
    params: { slug },
    revalidate: 24 * 3600,
  });
}

export async function generateStaticParams() {
  return await sanityFetch({ query: POSTS_SLUGS_QUERY });
}

export default async function Page({ params }: { params: Params }) {
  const slug = (await params).slug;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="container mx-auto grid grid-cols-1 gap-6 p-12">
      <Post {...post} />
    </main>
  );
}
