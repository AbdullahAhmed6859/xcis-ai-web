import {
  HeroSection,
  TrustedBySection,
  ServicesSection,
  CaseStudies,
  TrainingsSection,
  TeamSection,
  AdvantageSection,
  CustomerReviews,
  NewsAndInsights,
  LocationsWeServe,
} from "@/features/home";

export default async function Page() {
  return (
    <>
      <HeroSection />
      <TrustedBySection />
      <ServicesSection />
      <TrainingsSection />
      <CaseStudies />
      <TeamSection />
      <AdvantageSection />
      <CustomerReviews />
      <NewsAndInsights />
      <LocationsWeServe />
    </>
  );
}
