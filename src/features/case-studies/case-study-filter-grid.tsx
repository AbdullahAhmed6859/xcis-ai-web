"use client";

import { useState } from "react";
import CaseStudyCardCarousel from "@/features/case-studies/case-study-card-carousel";
import { cn } from "@/lib/utils"; // Assuming you have a cn utility, otherwise use template literals
import { AllCaseStudiesSectionProps } from "@/page-builder/blocks/page-builder-types";

type Props = {
  studies: AllCaseStudiesSectionProps["caseStudies"]; // Replace 'any' with your actual CaseStudy type
  uniqueServices: string[];
};

export function CaseStudyFilterGrid({ studies, uniqueServices }: Props) {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredStudies =
    activeFilter === "All"
      ? studies
      : studies.filter((study) => study.services.includes(activeFilter));

  return (
    <div className="flex flex-col gap-8">
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3">
        <FilterButton
          label="All"
          isActive={activeFilter === "All"}
          onClick={() => setActiveFilter("All")}
        />
        {uniqueServices.map((service) => (
          <FilterButton
            key={service}
            label={service}
            isActive={activeFilter === service}
            onClick={() => setActiveFilter(service)}
          />
        ))}
      </div>

      {/* Grid */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredStudies.map((study, i) => (
          <div key={i}>
            <CaseStudyCardCarousel caseStudy={study} />
          </div>
        ))}
      </div>
    </div>
  );
}

// Small helper sub-component for consistent button styling
function FilterButton({
  label,
  isActive,
  onClick,
}: {
  label: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 border",
        isActive
          ? "bg-black text-white border-black" // Adjust colors to your theme
          : "bg-transparent text-gray-600 border-gray-200 hover:border-gray-400",
      )}
    >
      {label}
    </button>
  );
}
