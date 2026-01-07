import Link from "next/link";
import { CASE_STUDY_QUERYResult } from "@/sanity/types";

export function RelatedCaseStudies({
  relatedCaseStudies,
}: {
  relatedCaseStudies: NonNullable<CASE_STUDY_QUERYResult>["relatedCaseStudies"];
}) {
  if (!relatedCaseStudies?.length) return null;

  return (
    <aside className="border-t">
      <h2>Related Case Studies</h2>

      <div className="not-prose text-balance">
        <ul className="flex flex-col sm:flex-row gap-0.5">
          {relatedCaseStudies.map((caseStudy) => (
            <li
              key={caseStudy._key}
              className="p-4 bg-blue-50 sm:w-1/3 flex-shrink-0"
            >
              <Link href={`/case-studies/${caseStudy.slug.current}`}>
                {caseStudy.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
