import React from "react";
import { Container } from "../layout/container";
import { SectionHeader } from "../layout/section-header";
import { LogoSlideshow2 } from "@/components/logo-slideshow-2";
import {
  internalGroqTypeReferenceTo,
  SanityImageHotspot,
  SanityImageCrop,
} from "@/sanity/types";

type Props = {
  backgroundColor: "blue" | "gradient" | "white";
  companies: Array<{
    name: string;
    logo: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      media?: unknown;
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      alt: string;
      _type: "image";
    };
  }>;
};

export function CompaniesSlideshow2({ backgroundColor, companies }: Props) {
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
