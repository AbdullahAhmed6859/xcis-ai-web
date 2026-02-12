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
  AllTeams,
  ContactFormSection,
  AllCaseStudies,
  AllMedia,
  SplitImage,
  CompaniesSection,
} from "./blocks";
import { PageSection } from "../features/layout/page-section";
import { ImpactCards } from "./blocks/impact-cards";
import { CompaniesSlideshow } from "./blocks/companies-slideshow";
import { CtaSection } from "./blocks/cta-section";
import { AllJobs } from "./blocks/all-jobs";

type PageBuilderProps = {
  content: NonNullable<PAGE_QUERYResult>["content"];
};

export function PageBuilder({ content }: PageBuilderProps) {
  if (!Array.isArray(content)) {
    return null;
  }

  return (
    <>
      {content.map((block) => {
        let Comp = null;

        switch (block._type) {
          case "heroSection":
            Comp = <HeroSection key={block._key} {...block} />;
            break;
          case "servicesSection":
            Comp = <ServicesSection key={block._key} {...block} />;
            break;
          case "caseStudiesSection":
            Comp = <CaseStudiesSection key={block._key} {...block} />;
            break;
          case "reviewsSection":
            Comp = <ReviewsSection key={block._key} {...block} />;
            break;
          case "impactSection":
            Comp = <ImpactSection key={block._key} {...block} />;
            break;
          case "structuredStepsSection":
            Comp = <StructuredSteps key={block._key} {...block} />;
            break;
          case "carouselSection":
            Comp = <CarouselSection key={block._key} {...block} />;
            break;
          case "locationsSection":
            Comp = <LocationsSection key={block._key} {...block} />;
            break;
          case "trainingsSection":
            Comp = <TrainingsSection key={block._key} {...block} />;
            break;
          case "mediaSection":
            Comp = <MediaSection key={block._key} {...block} />;
            break;
          case "allCaseStudiesSection":
            Comp = <AllCaseStudies key={block._key} {...block} />;
            break;
          case "allMediaSection":
            Comp = <AllMedia key={block._key} {...block} />;
            break;
          case "allTeamMembersSection":
            Comp = <AllTeams key={block._key} {...block} />;
            break;
          case "contactFormSection":
            Comp = <ContactFormSection key={block._key} {...block} />;
            break;
          case "splitImageSection":
            Comp = <SplitImage key={block._key} {...block} />;
            break;
          case "companiesSection":
            Comp = <CompaniesSection key={block._key} {...block} />;
            break;

          case "impactCardsSection":
            Comp = <ImpactCards key={block._key} {...block} />;
            break;

          case "companySlideshowSection":
            Comp = <CompaniesSlideshow key={block._key} {...block} />;
            break;
          case "ctaSection":
            Comp = <CtaSection key={block._key} {...block} />;
            break;
          case "allJobsSection":
            Comp = <AllJobs key={block._key} {...block} />;
          default:
            Comp = <></>;
        }

        return (
          <PageSection
            key={block._key}
            height={block.height}
            paddingTop={block.paddingTop}
            paddingBottom={block.paddingBottom}
            color={block.backgroundColor}
          >
            {Comp}
          </PageSection>
        );
      })}
    </>
  );
}
