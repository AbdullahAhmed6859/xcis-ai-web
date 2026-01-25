import { PAGE_QUERYResult } from "@/sanity/types";

export type ContentType = NonNullable<
  NonNullable<PAGE_QUERYResult>["content"]
>[number];

export type HeroProps = Extract<ContentType, { _type: "heroSection" }>;

export type ServicesSectionProps = Extract<
  ContentType,
  { _type: "servicesSection" }
>;

export type CaseStudiesSectionProps = Extract<
  ContentType,
  { _type: "caseStudiesSection" }
>;

export type ImpactSectionProps = Extract<
  ContentType,
  { _type: "impactSection" }
>;

export type StructuredStepsSectionProps = Extract<
  ContentType,
  { _type: "structuredStepsSection" }
>;

export type LocationsSectionProps = Extract<
  ContentType,
  { _type: "locationsSection" }
>;

export type CarouselSectionProps = Extract<
  ContentType,
  { _type: "carouselSection" }
>;

export type TrainingsSectionProps = Extract<
  ContentType,
  { _type: "trainingsSection" }
>;

export type ReviewsSectionProps = Extract<
  ContentType,
  { _type: "reviewsSection" }
>;

export type mediaSectionProps = Extract<ContentType, { _type: "mediaSection" }>;

export type CompanyLogoType = HeroProps["companies"];

export type AllCaseStudiesSectionProps = Extract<
  ContentType,
  { _type: "allCaseStudiesSection" }
>;

export type AllMediaSectionProps = Extract<
  ContentType,
  { _type: "allMediaSection" }
>;
