import { Container } from "@/features/layout/container";
import { AllTrainingsSectionProps } from "./page-builder-types";
import { SectionHeader } from "@/features/layout/section-header";
import { SectionHeading } from "@/features/layout/section-heading";
import { SectionDescription } from "@/features/layout/section-description";

export function AllTrainings({
  backgroundColor,
  heading,
  text,
  trainings,
}: AllTrainingsSectionProps) {
  return (
    <Container>
      <div className="flex flex-col gap-6">
        <SectionHeader backgroundColor={backgroundColor} textAlign={"left"}>
          {heading && <SectionHeading>{heading}</SectionHeading>}
          {text && <SectionDescription>{text}</SectionDescription>}
        </SectionHeader>
      </div>
    </Container>
  );
}
