import { HeroProps } from "./page-builder-types";
import { HeroWithCompanies } from "@/features/layout/hero-with-companies";
import { HeroWithImage } from "@/features/layout/hero-with-image";
import { HeroWithoutImage } from "@/features/layout/hero-without-image";

export function HeroSection(props: HeroProps) {
  const { companies, mainImage } = props;

  const showCompanies = companies && companies.length > 0;
  const hasImage = !!mainImage;

  if (showCompanies && hasImage) return <HeroWithCompanies {...props} />;

  if (hasImage) return <HeroWithImage {...props} />;

  return <HeroWithoutImage {...props} />;
}
