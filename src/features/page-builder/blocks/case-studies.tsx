import Container from "../../layout/Container";
import { CaseStudiesSectionProps } from "./page-builder-types";
import PageSection from "../../layout/page-section";
import { CaseStudiesCarousel } from "@/components/case-studies-carousel";
import { SectionHeading } from "@/features/layout/section-heading";
import { SectionDescription } from "@/features/layout/section-description";

export function CaseStudiesSection({
  heading,
  text,
  caseStudies,
}: CaseStudiesSectionProps) {
  if (!caseStudies) return null;
  return (
    <PageSection>
      <Container>
        <div className="flex flex-col gap-4 items-center">
          <div className="text-center">
            <SectionHeading>{heading}</SectionHeading>
            <SectionDescription>{text}</SectionDescription>
          </div>
          <CaseStudiesCarousel caseStudies={caseStudies} />
        </div>
      </Container>
    </PageSection>
  );
}
