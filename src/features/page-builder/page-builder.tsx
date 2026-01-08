import { PAGE_QUERYResult } from "@/sanity/types";
import {
  CaseStudiesSection,
  HeroSection,
  ImpactSection,
  ServicesSection,
} from "../home";

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
          default:
            return null;
        }
      })}
    </main>
  );
}
