import Container from "../../layout/Container";
import PageSection from "../../layout/page-section";
import { ReviewsSectionProps } from "./page-builder-types";

export function CustomerReviews({ heading, text }: ReviewsSectionProps) {
  return (
    <PageSection>
      <Container>
        <div className="flex flex-col gap-4 items-center">
          <div className="text-dark-blue flex flex-col gap-2 items-center">
            <h2 className="text-4xl font-semibold">{heading}</h2>
            <p className="text-lg text-center max-w-3xl">{text}</p>
          </div>
          <div className="text-lg text-center max-w-3xl">
            <div>Customer Reviews Here</div>
          </div>
        </div>
      </Container>
    </PageSection>
  );
}
