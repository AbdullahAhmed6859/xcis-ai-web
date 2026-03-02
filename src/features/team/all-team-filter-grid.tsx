// features/team/team-members-filter-grid.tsx
"use client";

import { useState, useMemo } from "react";
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
import { TeamMemberCard } from "./team-member-card";
import { AllTeamSectionProps } from "@/page-builder/blocks/page-builder-types";

type Props = {
  teamGroups: AllTeamSectionProps["teamGroups"];
};

export function AllTeamFilterGrid({ teamGroups }: Props) {
  // Default to the first team in the list
  const [activeTeamName, setActiveTeamName] = useState(
    teamGroups[0]?.teamName || "",
  );
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Find the active group's data
  const activeGroup = useMemo(
    () => teamGroups.find((g) => g.teamName === activeTeamName),
    [teamGroups, activeTeamName],
  );

  const members = activeGroup?.members || [];

  // Pagination Logic
  const totalPages = Math.ceil(members.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentVisibleMembers = members.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  // Handlers
  const handleTabChange = (name: string) => {
    setActiveTeamName(name);
    setCurrentPage(1); // Reset to page 1 when switching teams
  };

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  if (!teamGroups || teamGroups.length === 0) return null;

  return (
    <div className="flex flex-col gap-8">
      {/* --- Tab Selection (Replaces Filter) --- */}
      <div className="w-full">
        {/* MOBILE VIEW */}
        <div className="md:hidden">
          <Select value={activeTeamName} onValueChange={handleTabChange}>
            <SelectTrigger className="w-full h-12 text-base border-dark-blue/20 rounded-lg">
              <SelectValue placeholder="Select Team" />
            </SelectTrigger>
            <SelectContent>
              {teamGroups.map((group) => (
                <SelectItem key={group.teamName} value={group.teamName}>
                  {group.teamName}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* DESKTOP VIEW */}
        <div className="hidden md:flex flex-wrap gap-3 justify-start">
          {teamGroups.map((group) => (
            <FilterButton
              key={group.teamName}
              label={group.teamName}
              isActive={activeTeamName === group.teamName}
              onClick={() => handleTabChange(group.teamName)}
            />
          ))}
        </div>
      </div>

      {/* --- Grid Content --- */}
      <div className="w-full min-h-100">
        {currentVisibleMembers.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-8 gap-y-12 animate-in fade-in duration-500">
            {currentVisibleMembers.map((member, i) => (
              <TeamMemberCard key={i} member={member} />
            ))}
          </div>
        ) : (
          <div className="flex h-64 items-center justify-center text-muted-foreground bg-gray-50 rounded-lg border border-dashed">
            <p>No members found in this team.</p>
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
      )}
    </div>
  );
}

// Reused styled button from your original code
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
