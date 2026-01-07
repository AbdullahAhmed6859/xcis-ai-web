import Link from "next/link";
import { MEDIUM_QUERYResult } from "@/sanity/types";

export function RelatedCaseStudies({
  relatedMedia,
}: {
  relatedMedia: NonNullable<MEDIUM_QUERYResult>["relatedMedia"];
}) {
  if (!relatedMedia?.length) return null;

  return (
    <aside className="border-t">
      <h2>Related Media</h2>

      <div className="not-prose text-balance">
        <ul className="flex flex-col sm:flex-row gap-0.5">
          {relatedMedia.map((medium) => (
            <li
              key={medium._key}
              className="p-4 bg-blue-50 sm:w-1/3 flex-shrink-0"
            >
              <Link href={`/mediums/${medium.slug?.current}`}>
                {medium.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
