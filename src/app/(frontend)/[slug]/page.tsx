import { PageBuilder } from "@/features/posts/page-builder";
import { sanityFetch } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { PAGE_QUERY, PAGE_SLUGS_QUERY } from "@/sanity/lib/queries";
import type { Metadata } from "next";

type RouteProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return sanityFetch({ query: PAGE_SLUGS_QUERY, revalidate: false });
}

async function getPage(params: RouteProps["params"]) {
  const slug = (await params).slug;
  return sanityFetch({
    query: PAGE_QUERY,
    params: { slug },
    tags: [`page:${slug}`],
  });
}

export async function generateMetadata({
  params,
}: RouteProps): Promise<Metadata> {
  const page = await getPage(params);

  if (!page) {
    return {};
  }

  const metadata: Metadata = {
    title: page.seo.title,
    description: page.seo.description,
  };

  if (page.seo.image) {
    metadata.openGraph = {
      images: {
        url: urlFor(page.seo.image).width(1200).height(630).url(),
        width: 1200,
        height: 630,
      },
    };
  }

  if (page.seo.noIndex) {
    metadata.robots = "noindex";
  }

  return metadata;
}

export default async function Page({ params }: RouteProps) {
  const page = await getPage(params);

  return page?.content ? <PageBuilder content={page.content} /> : null;
}
