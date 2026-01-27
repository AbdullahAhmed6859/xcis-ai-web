"use client";

import { useState, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface GenericFilterGridProps<T> {
  items: T[];
  categories: string[];
  /** A function that returns the categories associated with a single item */
  getItemCategories: (item: T) => string[];
  /** The component/element to render for each item */
  renderItem: (item: T, index: number) => ReactNode;
  itemsPerPage?: number;
  gridClassName?: string;
  emptyMessage?: string;
  defaultFilter?: string;
  showAllButton?: boolean;
}

export function GenericFilterGrid<T>({
  items,
  categories,
  getItemCategories,
  renderItem,
  itemsPerPage = 6,
  gridClassName = "grid-cols-1 lg:grid-cols-2 xl:grid-cols-3",
  emptyMessage = "No items found for this category.",
  defaultFilter = "All",
  showAllButton = true,
}: GenericFilterGridProps<T>) {
  const [activeFilter, setActiveFilter] = useState(defaultFilter);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredItems =
    activeFilter === "All"
      ? items
      : items.filter((item) => getItemCategories(item).includes(activeFilter));

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentVisibleItems = filteredItems.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

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
    <div className="flex flex-col gap-8">
      {/* --- Filter Section --- */}
      <div className="w-full">
        {/* MOBILE VIEW */}
        <div className="md:hidden">
          <Select value={activeFilter} onValueChange={handleFilterChange}>
            <SelectTrigger className="w-full h-12 text-base border-dark-blue/20 rounded-lg">
              <SelectValue placeholder="Filter by category" />
            </SelectTrigger>
            <SelectContent>
              {showAllButton && <SelectItem value="All">All</SelectItem>}
              {categories.map((cat) => (
                <SelectItem key={cat} value={cat}>
                  {cat}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* DESKTOP VIEW */}
        <div className="hidden md:flex flex-wrap gap-3 justify-evenly">
          {showAllButton && (
            <FilterButton
              label="All"
              isActive={activeFilter === "All"}
              onClick={() => handleFilterChange("All")}
            />
          )}
          {categories.map((cat) => (
            <FilterButton
              key={cat}
              label={cat}
              isActive={activeFilter === cat}
              onClick={() => handleFilterChange(cat)}
            />
          ))}
        </div>
      </div>

      {/* --- Grid Content --- */}
      <div className="w-full min-h-[400px]">
        {currentVisibleItems.length > 0 ? (
          <div
            className={cn(
              "grid gap-6 animate-in fade-in duration-500",
              gridClassName,
            )}
          >
            {currentVisibleItems.map((item, i) => (
              <div key={i}>{renderItem(item, i)}</div>
            ))}
          </div>
        ) : (
          <div className="flex h-64 items-center justify-center text-muted-foreground bg-gray-50 rounded-lg border border-dashed">
            <p>{emptyMessage}</p>
          </div>
        )}
      </div>

      {/* --- Pagination --- */}
      {
        <div className="flex items-center justify-center gap-6 pt-8 border-t mt-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 text-dark-blue disabled:opacity-30 hover:bg-gray-100 rounded-full transition-colors"
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
          >
            <ChevronRight className="w-6 h-6 stroke-[3px]" />
          </button>
        </div>
      }
    </div>
  );
}

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
        "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border",
        isActive
          ? "bg-dark-blue text-white border-dark-blue hover:bg-dark-blue/90 hover:text-white"
          : "bg-transparent text-gray-600 border-gray-200 hover:border-dark-blue hover:text-dark-blue",
      )}
    >
      {label}
    </Button>
  );
}
