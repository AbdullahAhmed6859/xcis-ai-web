import { PageBuilder } from "@/page-builder";
import { sanityFetch } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { HOME_PAGE_QUERY } from "@/sanity/lib/queries";
import { Metadata } from "next";

async function getPage() {
  return sanityFetch({
    query: HOME_PAGE_QUERY,
    tags: [
      `page:`,
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

export async function generateMetadata(): Promise<Metadata> {
  const data = await getPage();

  if (!data?.homePage) {
    return {};
  }

  const metadata: Metadata = {
    title: data.homePage.seo.title,
    description: data.homePage.seo.description,
  };

  if (data.homePage.seo.image) {
    metadata.openGraph = {
      images: {
        url: urlFor(data.homePage.seo.image).width(1200).height(630).url(),
        width: 1200,
        height: 630,
      },
    };
  }

  if (data.homePage.seo.noIndex) {
    metadata.robots = "noindex";
  }

  return metadata;
}

export default async function Page() {
  const data = await getPage();
  return (
    <>
      {data?.homePage?.content ? (
        <PageBuilder content={data?.homePage.content} />
      ) : null}
    </>
  );
}
