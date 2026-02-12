import { CompanySlideshowSectionProps } from "./page-builder-types";
import { CompaniesSlideshow2 } from "@/features/companies/companies-slideshow-2";

export function CompaniesSlideshow({
  companies,
  backgroundColor,
}: CompanySlideshowSectionProps) {
  return (
    <CompaniesSlideshow2
      companies={companies}
      backgroundColor={backgroundColor}
    />
  );
}
