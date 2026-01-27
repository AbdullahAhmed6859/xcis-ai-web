import Container from "@/features/layout/container";
import { AllCaseStudiesSectionProps } from "./page-builder-types";
import { SectionHeader } from "@/features/layout/section-header";
import { SectionHeading } from "@/features/layout/section-heading";
import { SectionDescription } from "@/features/layout/section-description";
import { AllTeamMembersSection } from "@/sanity/types";

export function AllTeams({
  backgroundColor,
  heading,
  text,
  //   caseStudies,
  //   services,
}: AllTeamMembersSection) {
  return (
    <Container>
      <div className="flex flex-col gap-6">
        <SectionHeader backgroundColor={backgroundColor} textAlign={"left"}>
          <SectionHeading>{heading}</SectionHeading>
          <SectionDescription>{text}</SectionDescription>
        </SectionHeader>
        {/* <CaseStudyFilterGrid studies={caseStudies} uniqueServices={services} /> */}
      </div>
    </Container>
  );
}
