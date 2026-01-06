import Container from "../layout/Container";
import PageSection from "./PageSection";

function TeamSection() {
  return (
    <PageSection>
      <Container>
        <div className="flex flex-col gap-4 items-center">
          <div className="text-dark-blue flex flex-col gap-2 items-center">
            <h2 className="text-4xl font-semibold">Our Team & Impact</h2>
            <p className="text-lg text-center max-w-3xl">
              XCIS AI is a team of experienced AI consultants, data engineers,
              and domain specialists with deep expertise in nuclear, energy, and
              critical infrastructure. We combine advanced data and AI
              engineering capabilities with a practical understanding of
              regulated, safety-critical environments to deliver solutions that
              operate reliably in production.
            </p>
          </div>
          <div className="text-lg text-center max-w-3xl">
            <div>Team Info and Impact here</div>
          </div>
        </div>
      </Container>
    </PageSection>
  );
}

export default TeamSection;
