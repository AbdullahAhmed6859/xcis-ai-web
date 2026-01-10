import Container from "../../layout/Container";
import { CaseStudiesSectionProps } from "./page-builder-types";
import PageSection from "../../layout/page-section";
import { CaseStudiesCarousel } from "@/components/case-studies-carousel";

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
            <h2 className="font-semibold text-2xl">{heading}</h2>
            <p className="text-sm max-w-3xl">{text}</p>
          </div>
          <CaseStudiesCarousel caseStudies={caseStudies} />
        </div>
      </Container>
    </PageSection>
  );
}
