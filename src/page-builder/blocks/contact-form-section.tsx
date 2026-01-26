"use client";
import Script from "next/script";
import { SectionDescription } from "@/features/layout/section-description";
import { SectionHeader } from "@/features/layout/section-header";
import { SectionHeading } from "@/features/layout/section-heading";
import Container from "../../features/layout/container";
import { ContactFormSectionProps } from "./page-builder-types";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

function ContactFormSection({
  heading,
  text,
  backgroundColor,
  mainImage,
}: ContactFormSectionProps) {
  return (
    <Container>
      <div className="flex flex-col lg:flex-row items-stretch gap-y-8 lg:gap-x-12 xl:gap-x-32">
        {/* LEFT SIDE: Content + Image */}
        <div className="flex flex-col w-full lg:w-1/2">
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
          <div className="relative flex-grow min-h-[400px] w-full">
            <Image
              src={urlFor(mainImage).url()}
              alt="Contact form image"
              fill
              className="object-cover rounded-3xl"
              priority
            />
          </div>
        </div>

        {/* RIGHT SIDE: HubSpot Form */}
        <div className="w-full lg:w-1/2 bg-white">
          <Script
            src="https://js-na2.hsforms.net/forms/embed/244688559.js"
            defer
          ></Script>
          <div
            className="hs-form-frame w-full"
            data-region="na2"
            data-form-id="903a754a-f08b-4027-a78f-c86bb9910eb4"
            data-portal-id="244688559"
          ></div>
        </div>
      </div>
    </Container>
  );
}

export default ContactFormSection;
