"use client";
import { GenericFilterGrid } from "@/components/generic-filter-grid";
import { TeamMemberCard } from "./team-member-card";
import { AllTeamMembersSectionProps } from "@/page-builder/blocks/page-builder-types";

type Props = {
  teamMembers: AllTeamMembersSectionProps["teamMembers"];
  teams: string[];
};

export function TeamMembersFilterGrid({ teamMembers, teams }: Props) {
  return (
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
  );
}
