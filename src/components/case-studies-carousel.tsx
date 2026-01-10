"use client";

import CaseStudyCardCarousel from "@/features/case-studies/case-study-card-carousel";
import { CaseStudiesSectionProps } from "@/page-builder/blocks/page-builder-types";
import { GenericCarousel } from "./generic-carousel";

type CaseStudies = CaseStudiesSectionProps["caseStudies"];

type Props = {
  caseStudies: CaseStudies;
};

export function CaseStudiesCarousel({ caseStudies }: Props) {
  return (
    <GenericCarousel
      items={caseStudies}
      renderItem={(study, i) => (
        <CaseStudyCardCarousel
          caseStudy={study}
          color={i % 2 ? "blue" : "white"}
          key={i}
        />
      )}
    />
  );
}
