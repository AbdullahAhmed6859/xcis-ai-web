"use client";

import { useState } from "react";
import { CaseStudyCard } from "@/features/case-studies";
import { cn } from "@/lib/utils";
import { AllCaseStudiesSectionProps } from "@/page-builder/blocks/page-builder-types";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {
  studies: AllCaseStudiesSectionProps["caseStudies"];
  uniqueServices: string[];
};

const ITEMS_PER_PAGE = 6;

export function CaseStudyFilterGrid({ studies, uniqueServices }: Props) {
  const [activeFilter, setActiveFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  // 1. Filter Logic
  const filteredStudies =
    activeFilter === "All"
      ? studies
      : studies.filter((study) => study.services.includes(activeFilter));

  // 2. Pagination Logic
  const totalPages = Math.ceil(filteredStudies.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentVisibleStudies = filteredStudies.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );

  // Reset page when filter changes
  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    setCurrentPage(1);
  };

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex flex-col gap-8" id="case-study-grid">
      {/* --- Filter Section --- */}
      <div className="w-full">
        {/* MOBILE VIEW: Dropdown (< md) */}
        <div className="md:hidden">
          <Select
            value={activeFilter}
            onValueChange={(value) => handleFilterChange(value)}
          >
            <SelectTrigger className="w-full h-12 text-base border-dark-blue/20 rounded-lg">
              <SelectValue placeholder="Filter by category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All Categories</SelectItem>
              {uniqueServices.map((service) => (
                <SelectItem key={service} value={service}>
                  {service}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* DESKTOP VIEW: Buttons (>= md) */}
        <div className="hidden md:flex flex-wrap gap-3 justify-start">
          <FilterButton
            label="All"
            isActive={activeFilter === "All"}
            onClick={() => handleFilterChange("All")}
          />
          {uniqueServices.map((service) => (
            <FilterButton
              key={service}
              label={service}
              isActive={activeFilter === service}
              onClick={() => handleFilterChange(service)}
            />
          ))}
        </div>
      </div>

      {/* --- Grid Content --- */}
      <div className="w-full min-h-180">
        {currentVisibleStudies.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 animate-in fade-in duration-500">
            {currentVisibleStudies.map((study, i) => (
              <div key={i}>
                <CaseStudyCard caseStudy={study} />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex h-64 items-center justify-center text-muted-foreground">
            <p>No case studies found for this category.</p>
          </div>
        )}
      </div>

      {/* --- Numbered Pagination --- */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-6 pt-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 text-dark-blue disabled:opacity-30 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Previous page"
          >
            <ChevronLeft className="w-6 h-6 stroke-3" />
          </button>

          <div className="flex items-center gap-4">
            {pageNumbers.map((number) => (
              <button
                key={number}
                onClick={() => handlePageChange(number)}
                className={cn(
                  "text-lg font-medium transition-colors w-8 h-8 flex items-center justify-center rounded-full",
                  currentPage === number
                    ? "text-white bg-dark-blue font-bold shadow-md"
                    : "text-dark-blue hover:bg-gray-100",
                )}
              >
                {number}
              </button>
            ))}
          </div>

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-2 text-dark-blue disabled:opacity-30 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Next page"
          >
            <ChevronRight className="w-6 h-6 stroke-3" />
          </button>
        </div>
      )}
    </div>
  );
}

// --- Helper Components ---

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
    <Button
      onClick={onClick}
      variant="ghost"
      className={cn(
        "px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 border",
        isActive
          ? "bg-dark-blue text-white border-dark-blue hover:bg-dark-blue/90 hover:text-white"
          : "bg-transparent text-gray-600 border-gray-200 hover:border-dark-blue hover:text-dark-blue",
      )}
    >
      {label}
    </Button>
  );
}
