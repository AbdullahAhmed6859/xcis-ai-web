import Container from "@/features/layout/container";
import { AllCaseStudiesSectionProps } from "./page-builder-types";
import { SectionHeader } from "@/features/layout/section-header";
import { SectionHeading } from "@/features/layout/section-heading";
import { SectionDescription } from "@/features/layout/section-description";
import { CaseStudyFilterGrid } from "@/features/case-studies/case-study-filter-grid"; // Import the new client component

function AllCaseStudies({
  backgroundColor,
  heading,
  text,
  caseStudies,
}: AllCaseStudiesSectionProps) {
  // 1. Extract Unique Services (Server-side Logic)
  // This runs once on the server when the page builds/requests
  const uniqueServices = Array.from(
    new Set(caseStudies.flatMap((study) => study.services || [])),
  ).sort();

  return (
    <Container>
      <div className="flex flex-col gap-6">
        <SectionHeader backgroundColor={backgroundColor} textAlign={"left"}>
          <SectionHeading>{heading}</SectionHeading>
          <SectionDescription>{text}</SectionDescription>
        </SectionHeader>

        {/* 2. Pass data to the Client Component for interactivity */}
        <CaseStudyFilterGrid
          studies={caseStudies}
          uniqueServices={uniqueServices}
        />
      </div>
    </Container>
  );
}

export default AllCaseStudies;
