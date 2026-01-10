"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

import CaseStudyCardCarousel from "@/features/case-studies/case-study-card-carousel";
import { CaseStudiesSectionProps } from "@/features/page-builder/blocks/page-builder-types";
import { cn } from "@/lib/utils"; // Ensure you have the cn utility

type CaseStudies = CaseStudiesSectionProps["caseStudies"];

type Props = {
  caseStudies: CaseStudies;
};

export function CaseStudiesCarousel({ caseStudies }: Props) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    // Embla indices are 0-based, matching the array map
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  // Helper to jump to a specific slide
  const onDotButtonClick = (index: number) => {
    if (!api) return;
    api.scrollTo(index);
  };

  return (
    <div className="mx-auto w-full px-12 md:px-12 xl:px-14">
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {caseStudies.map((caseStudy, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <CaseStudyCardCarousel {...caseStudy} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="text-dark-blue border-dark-blue" />
        <CarouselNext className="text-dark-blue border-dark-blue" />
      </Carousel>

      {/* Pagination Dots */}
      <div className="mt-8 flex justify-center gap-2">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={cn(
              "h-2 transition-all duration-300 rounded-full bg-slate-300",
              // Active state: wider and darker
              current === index ? "w-8 bg-[#1B2B44]" : "w-2 hover:bg-slate-400"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
