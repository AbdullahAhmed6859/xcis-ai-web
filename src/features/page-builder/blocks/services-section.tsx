import { SectionDescription } from "@/features/layout/section-description";
import { SectionHeader } from "@/features/layout/section-header";
import { SectionHeading } from "@/features/layout/section-heading";
import Container from "../../layout/Container";
import { ServicesSectionProps } from "./page-builder-types";

export function ServicesSection({
  heading,
  text,
  backgroundColor,
}: ServicesSectionProps) {
  return (
    <Container>
      <div className="flex flex-col gap-4 items-center">
        <SectionHeader backgroundColor={backgroundColor}>
          <SectionHeading>{heading}</SectionHeading>
          <SectionDescription>{text}</SectionDescription>
        </SectionHeader>
        <div className="text-lg text-center max-w-3xl">
          <div>Carousel here</div>
        </div>
      </div>
    </Container>
  );
}
