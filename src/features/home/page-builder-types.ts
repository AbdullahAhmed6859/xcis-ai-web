import { PAGE_QUERYResult } from "@/sanity/types";

export type ContentType = NonNullable<
  NonNullable<PAGE_QUERYResult>["content"]
>[number];

export type HeroProps = Extract<ContentType, { _type: "hero" }>;

export type CompanyLogoType = HeroProps["companies"];
