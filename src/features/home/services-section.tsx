import Container from "../layout/Container";
import PageSection from "./page-section";

function ServicesSection() {
  return (
    <PageSection>
      <Container>
        <div className="flex flex-col gap-4 items-center">
          <div className="text-dark-blue flex flex-col gap-2 items-center">
            <h2 className="text-4xl font-semibold">
              Enterprise AI and Data Services for Regulated Industries
            </h2>
            <p className="text-lg text-center max-w-3xl">
              We help organisations move from AI ambition to real world,
              production grade systems designed for safety, scale, and long term
              operation.
            </p>
          </div>
          <div className="text-lg text-center max-w-3xl">
            <div>Carousel here</div>
          </div>
        </div>
      </Container>
    </PageSection>
  );
}

export default ServicesSection;
