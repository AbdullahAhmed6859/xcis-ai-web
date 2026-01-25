"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { AllMediaSectionProps } from "@/page-builder/blocks/page-builder-types"; // Update path if needed
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MediaCardSmall } from "./media-card-small"; // Update path to where you saved the card

type Props = {
  mediaItems: AllMediaSectionProps["media"];
  uniqueCategories: string[];
};

const ITEMS_PER_PAGE = 6;

export function MediaFilterGrid({ mediaItems, uniqueCategories }: Props) {
  const [activeFilter, setActiveFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  // 1. Filter Logic
  // We check if the media item's categories array includes the active filter
  const filteredMedia =
    activeFilter === "All"
      ? mediaItems
      : mediaItems.filter((item) => item.categories?.includes(activeFilter));

  // 2. Pagination Logic
  const totalPages = Math.ceil(filteredMedia.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentVisibleMedia = filteredMedia.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    setCurrentPage(1); // Reset to page 1 on filter change
  };

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      // Optional: scroll to top of grid
      // document.getElementById("media-grid")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex flex-col gap-8" id="media-grid">
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
              {uniqueCategories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
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
          {uniqueCategories.map((category) => (
            <FilterButton
              key={category}
              label={category}
              isActive={activeFilter === category}
              onClick={() => handleFilterChange(category)}
            />
          ))}
        </div>
      </div>

      {/* --- Grid Content --- */}
      <div className="w-full min-h-[500px]">
        {currentVisibleMedia.length > 0 ? (
          // Using 2 columns (lg:grid-cols-2) because MediaCardSmall is wide/horizontal
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-in fade-in duration-500">
            {currentVisibleMedia.map((item, i) => (
              <div key={i}>
                <MediaCardSmall media={item} />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex h-64 items-center justify-center text-muted-foreground bg-gray-50 rounded-lg border border-dashed">
            <p>No media found for this category.</p>
          </div>
        )}
      </div>

      {/* --- Pagination --- */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-6 pt-8 border-t mt-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 text-dark-blue disabled:opacity-30 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Previous page"
          >
            <ChevronLeft className="w-6 h-6 stroke-[3px]" />
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
            <ChevronRight className="w-6 h-6 stroke-[3px]" />
          </button>
        </div>
      )}
    </div>
  );
}

// --- Helper Button ---
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
