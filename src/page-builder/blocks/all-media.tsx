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
  categories,
}: AllMediaSectionProps) {
  return (
    <Container>
      <div className="flex flex-col gap-6">
        <SectionHeader backgroundColor={backgroundColor} textAlign={"left"}>
          <SectionHeading>{heading}</SectionHeading>
          <SectionDescription>{text}</SectionDescription>
        </SectionHeader>
        <MediaFilterGrid mediaItems={media} uniqueCategories={categories} />
      </div>
    </Container>
  );
}

export default AllMedia;
