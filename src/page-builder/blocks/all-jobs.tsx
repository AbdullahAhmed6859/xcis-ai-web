import { Container } from "@/features/layout/container";
import { AllJobsSectionProps } from "./page-builder-types";
import { SectionHeader } from "@/features/layout/section-header";
import { SectionHeading } from "@/features/layout/section-heading";
import { SectionDescription } from "@/features/layout/section-description";

export function AllJobs({
  backgroundColor,
  heading,
  text,
  jobs,
}: AllJobsSectionProps) {
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
