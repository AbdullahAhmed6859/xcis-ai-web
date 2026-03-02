// features/team/all-teams.tsx
import { Container } from "@/features/layout/container";
import { SectionHeader } from "@/features/layout/section-header";
import { SectionHeading } from "@/features/layout/section-heading";
import { SectionDescription } from "@/features/layout/section-description";
import { AllTeamSectionProps } from "@/page-builder/blocks/page-builder-types"; // Check path
import { AllTeamFilterGrid } from "@/features/team";

export function AllTeams({
  backgroundColor,
  heading,
  text,
  teamGroups,
}: AllTeamSectionProps) {
  return (
    <Container>
      <div className="flex flex-col gap-6">
        <SectionHeader backgroundColor={backgroundColor} textAlign={"center"}>
          {heading && <SectionHeading>{heading}</SectionHeading>}
          {text && <SectionDescription>{text}</SectionDescription>}
        </SectionHeader>

        <AllTeamFilterGrid teamGroups={teamGroups} />
      </div>
    </Container>
  );
}
