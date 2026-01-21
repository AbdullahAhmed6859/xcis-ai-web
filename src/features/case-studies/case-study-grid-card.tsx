import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react"; // Using ArrowRight to match the image precisely
import { cn } from "@/lib/utils";
import { urlFor } from "@/sanity/lib/image";
import { CaseStudiesSectionProps } from "@/page-builder/blocks/page-builder-types";

type CaseStudy = CaseStudiesSectionProps["caseStudies"][number];

interface NewsCardProps {
  caseStudy: CaseStudy;
  className?: string;
}

export function CaseStudyGridCard({ caseStudy, className }: NewsCardProps) {
  const { title, mainImage, slug, services } = caseStudy;

  // Default tag text if no service is provided, matches your screenshot's "PRESS RELEASE"
  const label = services[0];

  return (
    <Link
      href={slug ? `/case-studies/${slug}` : "#"}
      className={cn("group block h-full", className)}
    >
      <article className="flex h-full flex-col">
        {/* 1. IMAGE: Standalone, rounded corners, no border */}
        <div className="relative aspect-3/2 w-full overflow-hidden rounded-2xl bg-slate-100">
          {/* Main Image */}
          <Image
            src={urlFor(mainImage).width(624).height(416).url()}
            alt={mainImage.alt || title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          {/* Centered Overlay */}
          <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
            <Image
              src="/Asset 6.svg"
              alt="Overlay"
              width={200}
              height={200}
              className="w-40 object-contain"
            />
          </div>
        </div>

        {/* 2. CONTENT: Sits below image with top padding */}
        <div className="flex flex-1 flex-col pt-6">
          {/* Tag Pill */}
          <div className="mb-4">
            <span className="inline-block rounded-full bg-dark-blue px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white">
              {label}
            </span>
          </div>

          {/* Title */}
          <h3 className="mb-4 text-xl font-medium leading-snug text-slate-900 md:text-2xl">
            {title}
          </h3>

          {/* Read More Link - Pushed to bottom */}
          <div className="mt-auto flex items-center text-sm font-bold text-slate-900">
            Read More
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </article>
    </Link>
  );
}
