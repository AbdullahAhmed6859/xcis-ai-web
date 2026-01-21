"use client";

import { CaseStudyCard } from "@/features/case-studies";
import { CaseStudiesSectionProps } from "@/page-builder/blocks/page-builder-types";
import { GenericCarousel } from "./generic-carousel";
// import { CaseStudyCard } from "@/features/case-studies";

type CaseStudies = CaseStudiesSectionProps["caseStudies"];

type Props = {
  caseStudies: CaseStudies;
};

export function CaseStudiesCarousel({ caseStudies }: Props) {
  return (
    <GenericCarousel
      items={caseStudies}
      basisMobile="basis-full"
      basisMd="lg:basis-1/2"
      basisLg="2xl:basis-1/2"
      renderItem={(study, i) => (
        <CaseStudyCard caseStudy={study} color="blue" key={i} />
      )}
    />
  );
}
