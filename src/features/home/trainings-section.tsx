import Container from "../layout/Container";
import PageSection from "./page-section";

function TrainingsSection() {
  return (
    <PageSection>
      <Container>
        <div className="flex flex-col gap-4 items-center">
          <div className="text-dark-blue flex flex-col gap-2 items-center">
            <h2 className="text-4xl font-semibold">XCIS Training Academy</h2>
            <p className="text-lg text-center max-w-3xl">
              Role based training and workforce placement for nuclear, energy,
              and regulated industries.
            </p>
          </div>
          <div className="text-lg text-center max-w-3xl">
            <div>Trainings here</div>
          </div>
        </div>
      </Container>
    </PageSection>
  );
}

export default TrainingsSection;
