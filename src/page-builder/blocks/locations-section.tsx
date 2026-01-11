import { SectionDescription } from "@/features/layout/section-description";
import {
  SectionHeader,
  textColourVariants,
} from "@/features/layout/section-header";
import { SectionHeading } from "@/features/layout/section-heading";
import Container from "../../features/layout/Container"; // Consider updating to @/ alias
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
      <div className="flex flex-col gap-4 items-center">
        <SectionHeader backgroundColor={backgroundColor}>
          <SectionHeading>{heading}</SectionHeading>
          <SectionDescription>{text}</SectionDescription>
        </SectionHeader>

        <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-8">
          {locations?.map((loc, i) => (
            <div className="flex flex-col items-center gap-4" key={i}>
              {/* Image Container: Added relative, aspect ratio, and overflow hidden */}
              <div className="relative w-full aspect-square max-w-50 overflow-hidden">
                {loc.image && (
                  <Image
                    src={urlFor(loc.image).width(400).height(400).url()}
                    alt={loc.name || "Location image"}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-contain"
                    priority={i < 4} // Optimization for first row
                  />
                )}
              </div>

              <h3
                className={cn(
                  "text-lg font-semibold text-center",
                  textColourVariants({ backgroundColor })
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
