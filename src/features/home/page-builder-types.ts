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

export type CompanyLogoType = HeroProps["companies"];
