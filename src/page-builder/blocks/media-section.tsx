import { SectionDescription } from "@/features/layout/section-description";
import { SectionHeader } from "@/features/layout/section-header";
import { SectionHeading } from "@/features/layout/section-heading";
import Container from "../../features/layout/Container";
import { mediaSectionProps } from "./page-builder-types";

export function MediaSection({
  heading,
  text,
  backgroundColor,
  media,
}: mediaSectionProps) {
  return (
    <Container>
      <SectionHeader backgroundColor={backgroundColor} textAlign={"left"}>
        <SectionHeading>{heading}</SectionHeading>
        <SectionDescription>{text}</SectionDescription>
      </SectionHeader>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3"></div>
    </Container>
  );
}
