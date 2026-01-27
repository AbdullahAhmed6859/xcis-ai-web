"use client";
import { AllMediaSectionProps } from "@/page-builder/blocks/page-builder-types";
import { MediaCardSmall } from "./media-card-small";
import { GenericFilterGrid } from "@/components/generic-filter-grid";

type Props = {
  mediaItems: AllMediaSectionProps["media"];
  uniqueCategories: string[];
};

export function MediaFilterGrid({ mediaItems, uniqueCategories }: Props) {
  return (
    <GenericFilterGrid
      items={mediaItems}
      categories={uniqueCategories}
      gridClassName="grid-cols-1 lg:grid-cols-2"
      getItemCategories={(item) => item.categories}
      renderItem={(item) => <MediaCardSmall media={item} />}
    />
  );
}
