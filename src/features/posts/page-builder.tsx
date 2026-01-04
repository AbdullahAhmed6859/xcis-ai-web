import { Hero } from "./blocks/hero";
import { Features } from "./blocks/features";
import { SplitImage } from "./blocks/split-image";
import { FAQs } from "./blocks/faqs";
import { PAGE_QUERYResult } from "@/sanity/types";

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
          case "hero":
            return <Hero key={block._key} {...block} />;
          case "features":
            return <Features key={block._key} {...block} />;
          case "splitImage":
            return <SplitImage key={block._key} {...block} />;
          case "faqs":
            return <FAQs key={block._key} {...block} />;
          default:
            // This is a fallback for when we don't have a block type
            return null;
        }
      })}
    </main>
  );
}
