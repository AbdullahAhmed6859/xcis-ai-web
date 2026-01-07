import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/client";
import { SERVICES_QUERY } from "@/sanity/lib/queries";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "XCIS AI | Services",
  description: "Services",
};

export default async function Page() {
  const services = await sanityFetch({
    query: SERVICES_QUERY,
    tags: ["service"],
  });

  return (
    <main className="container mx-auto grid grid-cols-1 gap-6 p-12">
      <h1 className="text-4xl font-bold">Services Index</h1>
      <ul className="grid grid-cols-1 divide-y divide-blue-100">
        {services.map((service) => (
          <li key={service._id}>
            <Link
              className="block p-4 hover:text-blue-500"
              href={`/services/${service.slug?.current}`}
            >
              {service.title}
            </Link>
          </li>
        ))}
      </ul>
      <hr />
      <Link href="/">&larr; Return home</Link>
    </main>
  );
}
