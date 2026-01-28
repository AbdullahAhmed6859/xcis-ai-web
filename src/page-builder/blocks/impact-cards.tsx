import { Container } from "@/features/layout/container";
import { ImpactCardsSectionProps } from "./page-builder-types";
import { SectionHeader } from "@/features/layout/section-header";
import { SectionHeading } from "@/features/layout/section-heading";
import { SectionDescription } from "@/features/layout/section-description";
import { ImpactCard } from "@/components/impact-card";

export function ImpactCards({
  heading,
  text,
  backgroundColor,
  statistics,
}: ImpactCardsSectionProps) {
  return (
    <Container>
      <div className="flex flex-col gap-8 items-center">
        <SectionHeader backgroundColor={backgroundColor}>
          {heading && <SectionHeading>{heading}</SectionHeading>}
          {text && <SectionDescription>{text}</SectionDescription>}
        </SectionHeader>

        <div className="w-full grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 items-start">
          {statistics.map((stat, i) => (
            <ImpactCard
              cardContent={stat}
              color={i % 2 ? "blue" : "white"}
              key={i}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}
