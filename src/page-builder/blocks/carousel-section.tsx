"use client";
import Container from "@/features/layout/container";
import { CarouselSectionProps } from "./page-builder-types";
import { SectionDescription } from "@/features/layout/section-description";
import { SectionHeading } from "@/features/layout/section-heading";
import { GenericCarousel } from "@/components/generic-carousel";
import { GenericCard } from "@/components/generic-carousel-card";
import { SectionHeader } from "@/features/layout/section-header";

export function CarouselSection({
  heading,
  text,
  cards,
  backgroundColor,
}: CarouselSectionProps) {
  return (
    <Container>
      <div className="flex flex-col gap-4 items-center">
        <SectionHeader backgroundColor={backgroundColor}>
          <SectionHeading>{heading}</SectionHeading>
          <SectionDescription>{text}</SectionDescription>
        </SectionHeader>
        <GenericCarousel
          items={cards}
          backgroundColor={backgroundColor}
          renderItem={(item, i) => (
            <GenericCard cardContent={item} color={i % 2 ? "blue" : "white"} />
          )}
        />
      </div>
    </Container>
  );
}
