"use client";
import { Container } from "@/features/layout/container";
import { SectionHeader } from "@/features/layout/section-header";
import { SectionHeading } from "@/features/layout/section-heading";
import { SectionDescription } from "@/features/layout/section-description";
import { AllTeamMembersSectionProps } from "./page-builder-types";
import { GenericFilterGrid } from "@/components/generic-filter-grid"; // Adjust path to where you saved the generic grid
import { TeamMemberCard } from "@/features/team/team-member-card";

export function AllTeams({
  backgroundColor,
  heading,
  text,
  teams, // This is the list of unique categories (e.g. ["AI Engineer", "Data Engineer"])
  teamMembers,
}: AllTeamMembersSectionProps) {
  return (
    <Container className="">
      <div className="flex flex-col gap-12">
        {/* Header Section */}
        <SectionHeader backgroundColor={backgroundColor} textAlign="center">
          <SectionHeading>{heading}</SectionHeading>
          <SectionDescription className="max-w-2xl mx-auto">
            {text}
          </SectionDescription>
        </SectionHeader>

        {/* Filter Grid Section */}
        <GenericFilterGrid
          items={teamMembers}
          categories={teams}
          itemsPerPage={8} // 4 columns x 2 rows = 8 items per page looks good
          gridClassName="grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-8 gap-y-12"
          getItemCategories={(member) => member.teams || []}
          renderItem={(member) => <TeamMemberCard member={member} />}
          showAllButton={false}
          defaultFilter={teams[0]}
        />
      </div>
    </Container>
  );
}
