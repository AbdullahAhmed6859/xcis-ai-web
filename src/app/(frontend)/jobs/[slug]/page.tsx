import { notFound } from "next/navigation";
import { CASE_STUDIES_SLUGS_QUERY, JOB_QUERY } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/client";
import { Metadata } from "next";
import JobPage from "@/features/jobs/job-page";

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }) {
  const slug = (await params).slug;
  const job = await getJob(slug);
  if (!job) {
    return {};
  }

  const { title, postedAt } = job;

  const excerpt =
    "Join our team as a " +
    title +
    " and help shape the future of AI at XCIS AI. Posted on " +
    new Date(postedAt).toLocaleDateString() +
    ".";

  const ogImage = "xcis.ai/logo.png"; // Default OG image, replace with dynamic image if available

  const metadata: Metadata = {
    title: `${title} | XCIS AI Careers`,
    description: excerpt,
    openGraph: {
      title: `${title} | XCIS AI Careers`,
      description: excerpt,
      url: `/careers/${slug}`,
      type: "article",
      publishedTime: postedAt,
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

async function getJob(slug: string) {
  return sanityFetch({
    query: JOB_QUERY,
    params: { slug },
    tags: [`job:${slug}`],
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
  const job = await getJob(slug);

  if (!job) {
    notFound();
  }

  const { title, postedAt } = job;
  const excerpt =
    "Join our team as a " +
    title +
    " and help shape the future of AI at XCIS AI. Posted on " +
    new Date(postedAt).toLocaleDateString() +
    ".";

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: excerpt,
    datePublished: postedAt,
    dateModified: postedAt,
    author: {
      "@type": "Organization",
      name: "XCIS AI",
      logo: {
        "@type": "ImageObject",
        url: "https://xcis.ai/logo.png", // Ensure this path exists
      },
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
      "@id": `https://xcis.ai/careers/${slug}`,
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
        item: "https://xcis.ai/careers",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: title,
        item: `https://xcis.ai/careers/${slug}`,
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
      <JobPage {...job} />
    </>
  );
}
