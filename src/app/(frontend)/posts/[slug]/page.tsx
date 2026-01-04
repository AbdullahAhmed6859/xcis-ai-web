import { sanityFetch } from "@/sanity/lib/client";
import { POST_QUERY, POSTS_SLUGS_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import { Post } from "@/features/posts/post";

type PostParams = {
  slug: string;
};

type PageProps = {
  params: Promise<PostParams>;
};

export async function generateStaticParams() {
  return sanityFetch({ query: POSTS_SLUGS_QUERY });
}

export default async function Page({ params }: PageProps) {
  const slug = (await params).slug;
  const post = await sanityFetch({
    query: POST_QUERY,
    params: { slug },
    tags: [`post:${slug}`, "author", "category"],
    revalidate: 3600 * 24, // revalidate once a day
  });
  if (!post) {
    notFound();
  }

  return (
    <main className="container mx-auto grid grid-cols-1 gap-6 p-12">
      <Post {...post} />
    </main>
  );
}
