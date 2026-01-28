import { SectionDescription } from "@/features/layout/section-description";
import { SectionHeader } from "@/features/layout/section-header";
import { SectionHeading } from "@/features/layout/section-heading";
import { Container } from "../../features/layout/container";
import { ContactFormSectionProps } from "./page-builder-types";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { HubspotForm } from "@/features/contact/hubspot-form";

export function ContactFormSection({
  heading,
  text,
  backgroundColor,
  mainImage,
}: ContactFormSectionProps) {
  return (
    <Container>
      <div className="flex flex-col lg:grid lg:grid-cols-2 items-stretch lg:gap-x-12 xl:gap-x-32">
        {/* LEFT SIDE: Content + Image */}
        <div className="flex flex-col w-full h-125 lg:h-190">
          <SectionHeader
            backgroundColor={backgroundColor}
            textAlign="left"
            className="flex flex-col gap-y-4 mb-8"
          >
            {heading && <SectionHeading>{heading}</SectionHeading>}
            {text && (
              <SectionDescription className="lg:leading-8">
                {text}
              </SectionDescription>
            )}
          </SectionHeader>

          <div className="relative grow w-full">
            <Image
              src={urlFor(mainImage).url()}
              alt="Contact form image"
              fill
              className="object-cover rounded-3xl"
              priority
            />
          </div>
        </div>

        <div className="w-full bg-white flex items-center h-full">
          <HubspotForm />
        </div>
      </div>
    </Container>
  );
}
