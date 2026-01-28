import { Container } from "@/features/layout/container";
import { CompaniesSectionProps } from "./page-builder-types";
import { SectionDescription } from "@/features/layout/section-description";
import { SectionHeader } from "@/features/layout/section-header";
import { SectionHeading } from "@/features/layout/section-heading";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

export function CompaniesSection({
  backgroundColor,
  heading,
  text,
  companies,
}: CompaniesSectionProps) {
  return (
    <Container>
      <SectionHeader
        backgroundColor={backgroundColor}
        textAlign="left"
        className="flex flex-col gap-y-4 mb-8"
      >
        {heading && <SectionHeading>{heading}</SectionHeading>}
        {text && <SectionDescription>{text}</SectionDescription>}
      </SectionHeader>
      <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-18 lg:gap-20 xl:gap-32 items-start">
        {companies.map((company, i) => (
          <div
            className="w-full h-20 relative flex items-center justify-center"
            key={i}
          >
            <Image
              src={urlFor(company.logo).url()}
              alt={company.name}
              fill
              className="object-contain h-full w-full"
            />
          </div>
        ))}
      </div>
    </Container>
  );
}
