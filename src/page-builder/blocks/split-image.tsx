import Image from "next/image";
import { SplitImageSectionProps } from "./page-builder-types";
import { urlFor } from "@/sanity/lib/image";
import { SectionHeading } from "@/features/layout/section-heading";
import { SectionDescription } from "@/features/layout/section-description";
import { SectionHeader } from "@/features/layout/section-header";
import Container from "@/features/layout/container";

export function SplitImage({
  heading,
  text,
  backgroundColor,
  image,
}: SplitImageSectionProps) {
  return (
    <Container>
      <div className="flex flex-col lg:grid lg:grid-cols-2 items-stretch lg:gap-x-12 xl:gap-x-32">
        <div className="flex flex-col w-full">
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
        </div>

        <div className="flex flex-col w-full">
          <div className="relative min-h-80 grow w-full h-full">
            <Image
              src={urlFor(image).url()}
              alt="Contact form image"
              fill
              className="object-cover rounded-3xl"
              priority
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
