import { PAGE_QUERYResult } from "@/sanity/types";
import {
  CaseStudiesSection,
  HeroSection,
  ImpactSection,
  ServicesSection,
  StructuredSteps,
  CustomerReviews,
  MediaSection,
  LocationsSection,
  TrainingsSection,
  CarouselSection,
} from "./blocks";

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
        switch (block._type) {
          case "heroSection":
            return <HeroSection key={block._key} {...block} />;
          case "servicesSection":
            return <ServicesSection key={block._key} {...block} />;
          case "caseStudiesSection":
            return <CaseStudiesSection key={block._key} {...block} />;
          case "impactSection":
            return <ImpactSection key={block._key} {...block} />;
          case "structuredStepsSection":
            return <StructuredSteps key={block._key} {...block} />;
          case "carouselSection":
            return <CarouselSection key={block._key} {...block} />;
          case "locationsSection":
            return <LocationsSection key={block._key} {...block} />;
          case "reviewsSection":
            return <CustomerReviews key={block._key} {...block} />;
          case "trainingsSection":
            return <TrainingsSection key={block._key} {...block} />;
          case "mediaSection":
            return <MediaSection key={block._key} {...block} />;

          default:
            return null;
        }
      })}
    </main>
  );
}
