import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/client";
import { MEDIA_QUERY } from "@/sanity/lib/queries";
import { Metadata } from "next";
import { MediaCard } from "@/features/media";

export const metadata: Metadata = {
  title: "XCIS AI | Media - News and Announcements",
  description: "News and Announcements",
};

export default async function Page() {
  const media = await sanityFetch({
    query: MEDIA_QUERY,
    tags: ["media"],
  });

  return (
    <main className="container mx-auto grid grid-cols-1 gap-6 p-12">
      <h1 className="text-4xl font-bold">Media Index</h1>
      <ul className="grid grid-cols-1 divide-y divide-blue-100">
        {media.map((medium) => (
          <li key={medium._id}>
            <MediaCard {...medium} />
          </li>
        ))}
      </ul>
      <hr />
      <Link href="/">&larr; Return home</Link>
    </main>
  );
}
