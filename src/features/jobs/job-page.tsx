import Link from "next/link";
import { PortableText } from "next-sanity";
import { components } from "@/sanity/portableTextComponents";
import { Container } from "@/features/layout/container";
import { MapPin } from "lucide-react";
import { JOB_QUERYResult } from "@/sanity/types";

function JobPage(props: NonNullable<JOB_QUERYResult>) {
  const {
    title,
    location,
    department,
    postedAt,
    description,
    schedule,
    applicationLink,
    slug,
  } = props;

  // Format Date
  const formatDate = (dateStr: string) => {
    if (!dateStr) return "";
    return new Date(dateStr).toLocaleString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <Container className="py-16 md:py-24">
      {/* Header Section (Centered) */}
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12">
        <h1 className="text-3xl md:text-5xl font-bold text-dark-blue mb-4">
          {title}
        </h1>
        <p className="text-lg text-dark-blue opacity-80 mb-8">{location}</p>

        {applicationLink && (
          <Link
            href={applicationLink}
            target="_blank"
            className="inline-flex items-center gap-3 text-xs font-bold tracking-[0.2em] text-dark-blue uppercase hover:opacity-70 transition-opacity"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-dark-blue"></span>
            Be the first to apply
          </Link>
        )}

        {/* JOB INFO Label */}
        <h2 className="text-xs font-bold tracking-[0.15em] text-dark-blue uppercase opacity-50 my-8">
          Job Info
        </h2>

        {/* Info Grid - Changed to w-fit to ensure perfect optical centering */}
        <div className="w-fit mx-auto grid grid-cols-[max-content_1fr] gap-x-12 gap-y-5 text-left text-dark-blue text-sm md:text-base">
          <span className="opacity-60 whitespace-nowrap">
            Job Identification
          </span>
          <span className="font-medium">{slug || "N/A"}</span>

          <span className="opacity-60 whitespace-nowrap">Job Category</span>
          <span className="font-medium">{department}</span>

          <span className="opacity-60 whitespace-nowrap">Posting Date</span>
          <span className="font-medium">{formatDate(postedAt)}</span>

          <span className="opacity-60 whitespace-nowrap">Job Schedule</span>
          <span className="font-medium">{schedule}</span>

          <span className="opacity-60 whitespace-nowrap">Location</span>
          <div className="font-medium flex items-start gap-1.5 max-w-xs">
            <MapPin className="w-4 h-4 mt-0.5 shrink-0 opacity-70" />
            <span>{location}</span>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="max-w-3xl mx-auto mt-16 md:mt-20">
        {description && (
          <div
            className="prose prose-lg prose-slate max-w-none 
            prose-headings:font-bold prose-headings:text-dark-blue 
            prose-p:text-dark-blue prose-p:leading-relaxed
            prose-li:text-dark-blue prose-li:marker:text-dark-blue 
            prose-strong:text-dark-blue
            prose-a:text-dark-blue prose-a:font-semibold"
          >
            <PortableText value={description} components={components} />
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-16 flex justify-center">
          <Link
            href={applicationLink || "#"}
            className="bg-dark-blue text-white px-10 py-4 rounded-lg font-medium hover:opacity-90 transition-opacity shadow-sm"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </Container>
  );
}

export default JobPage;
