"use client";

import { CaseStudyCard } from "@/features/case-studies";
import { cn } from "@/lib/utils";
import { AllCaseStudiesSectionProps } from "@/page-builder/blocks/page-builder-types";
import { Button } from "@/components/ui/button";

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
