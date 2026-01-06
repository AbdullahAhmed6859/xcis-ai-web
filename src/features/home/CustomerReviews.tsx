import Container from "../layout/Container";
import PageSection from "./PageSection";

function CustomerReviews() {
  return (
    <PageSection>
      <Container>
        <div className="flex flex-col gap-4 items-center">
          <div className="text-dark-blue flex flex-col gap-2 items-center">
            <h2 className="text-4xl font-semibold">Our Customers Review</h2>
            <p className="text-lg text-center max-w-3xl">
              XCIS is trusted by fastest growth companies the focus on financial
              management Here`s what they have to say about us.
            </p>
          </div>
          <div className="text-lg text-center max-w-3xl">
            <div>Customer Reviews Here</div>
          </div>
        </div>
      </Container>
    </PageSection>
  );
}

export default CustomerReviews;
