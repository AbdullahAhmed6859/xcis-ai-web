import Container from "@/features/layout/Container";
import { AllCaseStudiesSectionProps } from "./page-builder-types";
import { SectionHeader } from "@/features/layout/section-header";
import { SectionHeading } from "@/features/layout/section-heading";
import { SectionDescription } from "@/features/layout/section-description";
import { CaseStudyGridCard } from "@/features/case-studies/case-study-grid-card";

function AllCaseStudies({
  backgroundColor,
  heading,
  text,
  caseStudies,
}: AllCaseStudiesSectionProps) {
  return (
    <Container>
      <div className="flex flex-col gap-6">
        <SectionHeader backgroundColor={backgroundColor} textAlign={"left"}>
          <SectionHeading>{heading}</SectionHeading>
          <SectionDescription>{text}</SectionDescription>
        </SectionHeader>
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6">
          {caseStudies.map((study, i) => (
            <div key={i}>
              <CaseStudyGridCard caseStudy={study} />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default AllCaseStudies;
