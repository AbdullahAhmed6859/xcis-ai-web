import { PageBuilder } from "@/page-builder";
import { sanityFetch } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { PAGE_QUERY, PAGE_SLUGS_QUERY } from "@/sanity/lib/queries";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type RouteProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return sanityFetch({ query: PAGE_SLUGS_QUERY, revalidate: false });
}

async function getPage(slug: string) {
  return sanityFetch({
    query: PAGE_QUERY,
    params: { slug },
    tags: [
      `page:${slug}`,
      "service",
      "location",
      "review",
      "media",
      "caseStudy",
      "trustedCompany",
      "teamMember",
    ],
  });
}

export async function generateMetadata({
  params,
}: RouteProps): Promise<Metadata> {
  const { slug } = await params;
  const page = await getPage(slug);

  if (!page) {
    return {};
  }

  const metadata: Metadata = {
    title: page.seo.title,
    description: page.seo.description,
    openGraph: {
      url: `/${slug}`,
      title: page.seo.title,
      description: page.seo.description,
      type: "website",
    },
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
  const { slug } = await params;
  const page = await getPage(slug);
  if (!page) {
    notFound();
  }

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
        name: page.seo.title,
        item: `https://xcis.ai/${slug}`,
      },
    ],
  };

  // 2. WebPage Schema
  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.seo.title,
    description: page.seo.description,
    url: `https://xcis.ai/${slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />

      {page.content ? <PageBuilder content={page.content} /> : null}
    </>
  );
}
