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

  const metadata: Metadata = {
    title: caseStudy.title,
    description: caseStudy.title,
    openGraph: {
      title: caseStudy.title,
      // description: caseStudy.excerpt,
      images: caseStudy.mainImage
        ? [{ url: urlFor(caseStudy.mainImage).url() }]
        : [],
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

  return <CaseStudy {...caseStudy} />;
}
