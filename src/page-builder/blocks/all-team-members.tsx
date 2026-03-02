import { Container } from "@/features/layout/container";
import { SectionHeader } from "@/features/layout/section-header";
import { SectionHeading } from "@/features/layout/section-heading";
import { SectionDescription } from "@/features/layout/section-description";
import { AllTeamMembersSectionProps } from "./page-builder-types";
import { TeamMembersFilterGrid } from "@/features/team";

export function AllTeamMembers({
  backgroundColor,
  heading,
  text,
  teams,
  teamMembers,
}: AllTeamMembersSectionProps) {
  return (
    <Container>
      <div className="flex flex-col gap-6">
        <SectionHeader backgroundColor={backgroundColor} textAlign={"center"}>
          {heading && <SectionHeading>{heading}</SectionHeading>}
          {text && <SectionDescription>{text}</SectionDescription>}
        </SectionHeader>
        <TeamMembersFilterGrid teamMembers={teamMembers} teams={teams} />
      </div>
    </Container>
  );
}
