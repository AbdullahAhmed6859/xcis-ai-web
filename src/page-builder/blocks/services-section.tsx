import { SectionDescription } from "@/features/layout/section-description";
import { SectionHeader } from "@/features/layout/section-header";
import { SectionHeading } from "@/features/layout/section-heading";
import Container from "../../features/layout/container";
import { ServicesSectionProps } from "./page-builder-types";
import { ServiceCard } from "@/features/services/service-card";

export function ServicesSection({
  heading,
  text,
  backgroundColor,
  services,
}: ServicesSectionProps) {
  return (
    <Container>
      <div className="flex flex-col gap-4 items-center">
        <SectionHeader
          backgroundColor={backgroundColor}
          className="flex flex-col items-center"
        >
          <SectionHeading>{heading}</SectionHeading>
          <SectionDescription>{text}</SectionDescription>
        </SectionHeader>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {services.map((s, i) => {
            const cycleIndex = i % 4;

            // Determine the span based on your specific rules
            let colSpan = "lg:col-span-2"; // Default
            if (cycleIndex === 1 || cycleIndex === 2) {
              colSpan = "lg:col-span-3";
            }
            if (i === services.length - 1 && i % 2 === 0) {
              colSpan = "lg:col-span-5";
            }
            return (
              <ServiceCard
                className={colSpan}
                key={i}
                cardContent={s}
                color="blue"
              />
            );
          })}
        </div>
      </div>
    </Container>
  );
}
