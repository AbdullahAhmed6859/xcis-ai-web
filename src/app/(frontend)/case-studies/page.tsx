import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/client";
import { CASE_STUDIES_QUERY } from "@/sanity/lib/queries";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "XCIS AI | Case Studies",
  description: "Case Studies",
};

export default async function Page() {
  const caseStudies = await sanityFetch({
    query: CASE_STUDIES_QUERY,
    tags: ["caseStudy"],
  });

  return (
    <main className="container mx-auto grid grid-cols-1 gap-6 p-12">
      <h1 className="text-4xl font-bold">Case Studies index</h1>
      <ul className="grid grid-cols-1 divide-y divide-blue-100">
        {caseStudies.map((caseStudy) => (
          <li key={caseStudy._id}>
            <Link
              className="block p-4 hover:text-blue-500"
              href={`/case-studies/${caseStudy.slug.current}`}
            >
              {caseStudy.title}
            </Link>
          </li>
        ))}
      </ul>
      <hr />
      <Link href="/">&larr; Return home</Link>
    </main>
  );
}
