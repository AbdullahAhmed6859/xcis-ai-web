import Container from "../layout/Container";
import PageSection from "./page-section";

function LocationsWeServe() {
  return (
    <PageSection>
      <Container>
        <div className="flex flex-col gap-4 items-center">
          <div className="text-dark-blue flex flex-col gap-2 items-center">
            <h2 className="text-4xl font-semibold">
              Locations & Markets We Serve
            </h2>
            <p className="text-lg text-center max-w-3xl">
              Supporting nuclear, energy, and critical infrastructure clients
              across North America.
            </p>
          </div>
          <div className="text-lg text-center max-w-3xl">
            <div>Locations and Markets Info here</div>
          </div>
        </div>
      </Container>
    </PageSection>
  );
}

export default LocationsWeServe;
