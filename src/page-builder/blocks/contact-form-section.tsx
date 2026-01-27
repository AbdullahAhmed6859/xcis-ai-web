import { SectionDescription } from "@/features/layout/section-description";
import { SectionHeader } from "@/features/layout/section-header";
import { SectionHeading } from "@/features/layout/section-heading";
import Container from "../../features/layout/container";
import { ContactFormSectionProps } from "./page-builder-types";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { HubspotForm } from "@/features/contact/hubspot-form";

function ContactFormSection({
  heading,
  text,
  backgroundColor,
  mainImage,
}: ContactFormSectionProps) {
  return (
    <Container>
      <div className="flex flex-col lg:grid lg:grid-cols-2 items-stretch lg:gap-x-12 xl:gap-x-32">
        {/* LEFT SIDE: Content + Image */}
        <div className="flex flex-col w-full h-125 lg:h-175">
          <SectionHeader
            backgroundColor={backgroundColor}
            textAlign="left"
            className="flex flex-col gap-y-4 mb-8"
          >
            <SectionHeading>{heading}</SectionHeading>
            <SectionDescription className="lg:leading-8">
              {text}
            </SectionDescription>
          </SectionHeader>

          {/* 'flex-grow' tells this div to take up all remaining vertical space. 
              'relative' is required for the Next.js fill image.
          */}
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

        <div className="w-full bg-white flex items-center h-125 lg:h-175">
          <HubspotForm />
        </div>
      </div>
    </Container>
  );
}

export default ContactFormSection;
