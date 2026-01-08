import Container from "../layout/Container";
import { CaseStudiesSectionProps } from "./page-builder-types";
import PageSection from "./page-section";

function CaseStudiesSection({ heading, text }: CaseStudiesSectionProps) {
  return (
    <PageSection>
      <Container>
        <div className="flex flex-col gap-4 items-center">
          <div className="flex flex-col gap-2 items-center">
            <h2 className="text-4xl font-semibold">{heading}</h2>
            <p className="text-lg text-center max-w-3xl">{text}</p>
          </div>
          <div className="text-lg text-center max-w-7xl">
            <div>Case Studies here</div>
          </div>
        </div>
      </Container>
    </PageSection>
  );
}

export default CaseStudiesSection;
