import Container from "../layout/Container";
import PageSection from "./page-section";

function NewsAndInsights() {
  return (
    <PageSection>
      <Container>
        <div className="flex flex-col gap-4 items-center">
          <div className="text-dark-blue flex flex-col gap-2 items-center">
            <h2 className="text-4xl font-semibold">
              News & Insights from XCIS AI
            </h2>
            <p className="text-lg text-center max-w-3xl">
              Announcements, partnerships, and perspectives on AI in nuclear and
              energy.
            </p>
          </div>
          <div className="text-lg text-center max-w-3xl">
            <div>News and Insights here</div>
          </div>
        </div>
      </Container>
    </PageSection>
  );
}
export default NewsAndInsights;
