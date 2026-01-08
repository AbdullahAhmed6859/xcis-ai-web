import Container from "../layout/Container";
import PageSection from "./page-section";

function TrustedBySection() {
  return (
    <PageSection>
      <Container>
        <div className="flex flex-col gap-4 items-center">
          <div className="text-dark-blue flex flex-col gap-4 items-center">
            <h2 className="text-4xl font-semibold">
              Trusted by partners and platforms including
            </h2>
            <p className="text-lg text-center max-w-3xl">Companies over here</p>
          </div>
        </div>
      </Container>
    </PageSection>
  );
}

export default TrustedBySection;
