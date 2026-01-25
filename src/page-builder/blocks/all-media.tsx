import Container from "@/features/layout/container";
import { AllMediaSectionProps } from "./page-builder-types";
import { SectionHeader } from "@/features/layout/section-header";
import { SectionHeading } from "@/features/layout/section-heading";
import { SectionDescription } from "@/features/layout/section-description";
import { MediaFilterGrid } from "@/features/media/media-filter-grid"; // Import the new component

function AllMedia({
  backgroundColor,
  heading,
  text,
  media,
}: AllMediaSectionProps) {
  // 1. Extract Unique Categories (Server-side Logic)
  // Ensure we handle null/undefined safely
  const uniqueCategories = Array.from(
    new Set(media.flatMap((m) => m.categories || [])),
  ).sort();

  return (
    <Container>
      <div className="flex flex-col gap-6">
        <SectionHeader backgroundColor={backgroundColor} textAlign={"left"}>
          <SectionHeading>{heading}</SectionHeading>
          <SectionDescription>{text}</SectionDescription>
        </SectionHeader>

        {/* 2. Pass data to the Client Component */}
        <MediaFilterGrid
          mediaItems={media}
          uniqueCategories={uniqueCategories}
        />
      </div>
    </Container>
  );
}

export default AllMedia;
