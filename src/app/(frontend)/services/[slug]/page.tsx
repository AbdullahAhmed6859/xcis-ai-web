import { notFound } from "next/navigation";

import { SERVICE_QUERY, SERVICES_SLUGS_QUERY } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/client";
import { Metadata } from "next";
import { Service } from "@/features/services";

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }) {
  const slug = (await params).slug;
  const service = await getService(slug);
  if (!service) {
    return {};
  }

  const metadata: Metadata = {
    title: service.title,
    description: service.description,
    openGraph: {
      title: service.title,
      description: service.description,
    },
  };
  return metadata;
}

async function getService(slug: string) {
  return sanityFetch({
    query: SERVICE_QUERY,
    params: { slug },
    tags: [`service:${slug}`],
  });
}

export async function generateStaticParams() {
  return await sanityFetch({ query: SERVICES_SLUGS_QUERY });
}

export default async function Page({ params }: { params: Params }) {
  const slug = (await params).slug;
  const service = await getService(slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="container mx-auto grid grid-cols-1 gap-6 p-12">
      <Service {...service} />
    </main>
  );
}
