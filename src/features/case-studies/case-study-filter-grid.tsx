"use client";

import { CaseStudyCard } from "@/features/case-studies";
import { AllCaseStudiesSectionProps } from "@/page-builder/blocks/page-builder-types";

import { GenericFilterGrid } from "@/components/generic-filter-grid";

type Props = {
  studies: AllCaseStudiesSectionProps["caseStudies"];
  uniqueServices: string[];
};

export function CaseStudyFilterGrid({ studies, uniqueServices }: Props) {
  return (
    <GenericFilterGrid
      items={studies}
      categories={uniqueServices}
      getItemCategories={(study) => study.services}
      renderItem={(study) => <CaseStudyCard caseStudy={study} />}
    />
  );
}
