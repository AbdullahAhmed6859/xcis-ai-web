import { CompanySlideshowSectionProps } from "./page-builder-types";
import { Container } from "@/features/layout/container";
import { LogoSlideshow2 } from "@/components/logo-slideshow-2";
import { SectionHeader } from "@/features/layout/section-header";
import { SectionHeading } from "@/features/layout/section-heading";

export function CompaniesSlideshow({
  companies,
  backgroundColor,
}: CompanySlideshowSectionProps) {
  return (
    <>
      <Container className="text-center mb-4">
        <SectionHeader backgroundColor={backgroundColor}>
          <h2 className="text-dark-blue text-xs sm:text-sm lg:text-base font-semibold">
            TRUSTED BY LEADING OPERATORS. ALIGNED WITH LEADING PLATFORMS AND
            NUCLEAR INDUSTRY PARTNERS
          </h2>
        </SectionHeader>
      </Container>

      {companies && <LogoSlideshow2 logos={companies} />}
    </>
  );
}
