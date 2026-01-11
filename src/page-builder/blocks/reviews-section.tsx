"use client";
import Container from "@/features/layout/Container";
import { ReviewsSectionProps } from "./page-builder-types";
import { SectionDescription } from "@/features/layout/section-description";
import { SectionHeading } from "@/features/layout/section-heading";
import { GenericCarousel } from "@/components/generic-carousel";
import { SectionHeader } from "@/features/layout/section-header";
import { ReviewCard } from "@/features/reviews/review-card";

export function ReviewsSection({
  heading,
  text,
  reviews,
  backgroundColor,
}: ReviewsSectionProps) {
  return (
    <Container>
      <div className="flex flex-col gap-4 items-center">
        <SectionHeader backgroundColor={backgroundColor}>
          <SectionHeading>{heading}</SectionHeading>
          <SectionDescription>{text}</SectionDescription>
        </SectionHeader>
        <GenericCarousel
          backgroundColor={backgroundColor}
          items={reviews}
          renderItem={(item) => <ReviewCard review={item} color="white" />}
          basisLg="lg:basis-1/2"
        />
      </div>
    </Container>
  );
}
