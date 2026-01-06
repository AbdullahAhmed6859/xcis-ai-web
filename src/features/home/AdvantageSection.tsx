import Container from "../layout/Container";
import PageSection from "./PageSection";

function AdvantageSection() {
  return (
    <PageSection>
      <Container>
        <div className="flex flex-col gap-4 items-center">
          <div className="text-dark-blue flex flex-col gap-2 items-center">
            <h2 className="text-4xl font-semibold">The XCIS AI Advantage</h2>
            <p className="text-lg text-center max-w-3xl">
              Built specifically for nuclear, energy, and other highly regulated
              environments.
            </p>
          </div>
          <div className="text-lg text-center max-w-3xl">
            <div>Advantages here</div>
          </div>
        </div>
      </Container>
    </PageSection>
  );
}

export default AdvantageSection;
