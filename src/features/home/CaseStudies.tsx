import Container from "../layout/Container";
import PageSection from "./PageSection";

function CaseStudies() {
  return (
    <PageSection>
      <Container>
        <div className="flex flex-col gap-4 items-center">
          <div className="flex flex-col gap-2 items-center">
            <h2 className="text-4xl font-semibold">
              Proven Results with Nuclear and Energy Leaders
            </h2>
            <p className="text-lg text-center max-w-3xl">
              We have supported nuclear operators, utilities, and critical
              infrastructure organisations across North America with
              production-grade AI and data solutions.
            </p>
          </div>
          <div className="text-lg text-center max-w-7xl">
            <div>Case Studies here</div>
          </div>
        </div>
      </Container>
    </PageSection>
  );
}

export default CaseStudies;
