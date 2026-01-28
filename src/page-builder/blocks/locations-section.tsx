import { SectionDescription } from "@/features/layout/section-description";
import {
  SectionHeader,
  textColourVariants,
} from "@/features/layout/section-header";
import { SectionHeading } from "@/features/layout/section-heading";
import { Container } from "../../features/layout/container";
import { LocationsSectionProps } from "./page-builder-types";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { cn } from "@/lib/utils";

export function LocationsSection({
  heading,
  text,
  backgroundColor,
  locations,
}: LocationsSectionProps) {
  return (
    <Container>
      <div className="flex flex-col gap-8 items-center">
        <SectionHeader backgroundColor={backgroundColor}>
          {heading && <SectionHeading>{heading}</SectionHeading>}
          {text && <SectionDescription>{text}</SectionDescription>}
        </SectionHeader>

        <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-8 items-start">
          {locations.map((loc, i) => (
            <div className="flex flex-col items-center gap-4" key={i}>
              <div className="w-full max-w-50">
                <Image
                  src={urlFor(loc.image).width(600).url()} // Fetch width only to maintain aspect ratio
                  alt={loc.name || "Location image"}
                  width={400} // Base width for layout calculation
                  height={300} // Base height (acts as placeholder ratio, overridden by CSS)
                  className="w-full h-auto object-contain" // CSS ensures it fits width and scales height
                  sizes="(max-width: 768px) 50vw, 25vw"
                  priority={i < 4}
                />
              </div>

              <h3
                className={cn(
                  "text-lg font-semibold text-center",
                  textColourVariants({ backgroundColor }),
                )}
              >
                {loc.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
