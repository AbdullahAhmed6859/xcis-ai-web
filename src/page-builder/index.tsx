import { PAGE_QUERYResult } from "@/sanity/types";
import {
  CaseStudiesSection,
  HeroSection,
  ImpactSection,
  ServicesSection,
  StructuredSteps,
  ReviewsSection,
  MediaSection,
  LocationsSection,
  TrainingsSection,
  CarouselSection,
} from "./blocks";
import PageSection from "../features/layout/page-section";

type PageBuilderProps = {
  content: NonNullable<PAGE_QUERYResult>["content"];
};

export function PageBuilder({ content }: PageBuilderProps) {
  if (!Array.isArray(content)) {
    return null;
  }

  return (
    <main>
      {content.map((block) => {
        // Render the correct section based on type
        let SectionComponent = null;

        switch (block._type) {
          case "heroSection":
            SectionComponent = <HeroSection key={block._key} {...block} />;
            break;
          case "servicesSection":
            SectionComponent = <ServicesSection key={block._key} {...block} />;
            break;
          case "caseStudiesSection":
            SectionComponent = (
              <CaseStudiesSection key={block._key} {...block} />
            );
            break;
          case "reviewsSection":
            SectionComponent = <ReviewsSection key={block._key} {...block} />;
            break;
          case "impactSection":
            SectionComponent = <ImpactSection key={block._key} {...block} />;
            break;
          case "structuredStepsSection":
            SectionComponent = <StructuredSteps key={block._key} {...block} />;
            break;
          case "carouselSection":
            SectionComponent = <CarouselSection key={block._key} {...block} />;
            break;
          case "locationsSection":
            SectionComponent = <LocationsSection key={block._key} {...block} />;
            break;
          case "trainingsSection":
            SectionComponent = <TrainingsSection key={block._key} {...block} />;
            break;
          case "mediaSection":
            SectionComponent = <MediaSection key={block._key} {...block} />;
            break;
          default:
            SectionComponent = <></>;
        }

        return (
          <PageSection
            key={block._key}
            height={block.height}
            paddingTop={block.paddingTop}
            paddingBottom={block.paddingBottom}
            color={block.backgroundColor}
          >
            {SectionComponent}
          </PageSection>
        );
      })}
    </main>
  );
}
