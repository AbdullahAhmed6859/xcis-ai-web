import Container from "../../layout/Container";
import { CaseStudiesSectionProps } from "./page-builder-types";
import { CaseStudiesCarousel } from "@/components/case-studies-carousel";
import { SectionHeading } from "@/features/layout/section-heading";
import { SectionDescription } from "@/features/layout/section-description";
import { SectionHeader } from "@/features/layout/section-header";

export function CaseStudiesSection({
  heading,
  text,
  caseStudies,
  backgroundColor,
}: CaseStudiesSectionProps) {
  if (!caseStudies) return null;
  return (
    <Container>
      <div className="flex flex-col gap-4 items-center">
        <SectionHeader backgroundColor={backgroundColor}>
          <SectionHeading>{heading}</SectionHeading>
          <SectionDescription>{text}</SectionDescription>
        </SectionHeader>
        <CaseStudiesCarousel caseStudies={caseStudies} />
      </div>
    </Container>
  );
}
