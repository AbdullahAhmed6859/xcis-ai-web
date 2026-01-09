import Container from "../../layout/Container";
import { ServicesSectionProps } from "./page-builder-types";
import PageSection from "../../layout/page-section";

export function ServicesSection({ heading, text }: ServicesSectionProps) {
  return (
    <PageSection>
      <Container>
        <div className="flex flex-col gap-4 items-center">
          <div className="text-dark-blue flex flex-col gap-2 items-center">
            <h2 className="text-4xl font-semibold">{heading}</h2>
            <p className="text-lg text-center max-w-3xl">{text}</p>
          </div>
          <div className="text-lg text-center max-w-3xl">
            <div>Carousel here</div>
          </div>
        </div>
      </Container>
    </PageSection>
  );
}
