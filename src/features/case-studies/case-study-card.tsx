import { Card } from "@/components/ui/card";
import { CaseStudiesSectionProps } from "../../page-builder/blocks/page-builder-types";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type CaseStudy = CaseStudiesSectionProps["caseStudies"][number];

type Props = {
  caseStudy: CaseStudy;
  color?: "blue" | "white";
  carousel?: boolean;
};

export function CaseStudyCard({
  caseStudy: { mainImage, title, excerpt, slug, services },
  carousel = false,
}: Props) {
  return (
    <Link href={`case-studies/${slug}`} className="block h-full">
      <Card
        className={`group relative w-full ${carousel ? "aspect-4/5 sm:aspect-3/2" : "aspect-5/4 sm:aspect-5/3 lg:aspect-5/4 xl:aspect-7/8 2xl:aspect-6/5"} overflow-hidden border-0 rounded-xl p-0`}
      >
        {/* Background Image */}
        <div className="absolute inset-0 h-full w-full">
          <Image
            src={urlFor(mainImage).width(624).height(416).url()}
            alt={mainImage.alt}
            className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            width={624}
            height={416}
          />
        </div>

        <div className="absolute inset-0 bg-linear-to-t from-dark-blue via-dark-blue/60 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Text Content */}
        <div className="absolute bottom-0 left-0 flex flex-col justify-end p-6 md:p-8 w-full z-20">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-light-blue">
            {services.join(" . ")}
          </p>

          <h3 className="mb-2 text-2xl font-bold text-white md:text-3xl line-clamp-3 lg:line-clamp-2">
            {title}
          </h3>

          <p className="mb-6 text-sm text-pearl-white/80 line-clamp-3 md:text-base">
            {excerpt}
          </p>

          <div
            className={cn(
              "flex w-fit items-center gap-x-2 rounded-full",
              "bg-light-blue px-5 py-2.5",
              "text-xs font-bold text-dark-blue",
              "transition-all duration-300 group-hover:bg-white",
            )}
          >
            VIEW CASE STUDY
            <MoveRight className="h-4 w-4" />
          </div>
        </div>
      </Card>
    </Link>
  );
}
