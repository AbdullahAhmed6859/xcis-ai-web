/* eslint-disable @next/next/no-img-element */
"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { CompanyLogoType } from "@/page-builder/blocks/page-builder-types";
import { urlFor } from "@/sanity/lib/image";
import Container from "@/features/layout/container";

interface LogosProps {
  logos: CompanyLogoType;
}

function ensureSize<T>(logos: Array<T>): T[] {
  const newLogos = [...logos];
  while (newLogos.length < 7) {
    newLogos.push(...logos);
  }
  return newLogos;
}

function LogoSlideshow({ logos }: LogosProps) {
  const logosArr = ensureSize(logos);

  return (
    <Container className="mx-auto w-full">
      {/* 1. Added a relative wrapper to constrain the absolute gradients */}
      <div className="relative w-full flex items-center justify-center">
        <Carousel
          opts={{ loop: true }}
          plugins={[AutoScroll({ playOnInit: true, speed: 0.8 })]}
          className="w-full"
        >
          <CarouselContent className="ml-0">
            {logosArr.map((logo, i) => (
              <CarouselItem
                key={i}
                className="flex basis-1/3 justify-center pl-0 md:basis-1/4 lg:basis-1/5 xl:basis-1/6 2xl:basis-1/7"
              >
                <div className="h-10 w-24 sm:h-12 sm:w-32 relative flex items-center justify-center">
                  <img
                    src={urlFor(logo.logo).url()}
                    alt={logo.logo.alt || "Company logo"}
                    className="brightness-0 invert-100 object-contain h-full w-full"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* 2. Gradients are now relative to this inner wrapper, not the viewport edges */}
        <div className="absolute inset-y-0 left-0 w-12 sm:w-24 lg:w-48 bg-linear-to-r from-[#0c182b] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-12 sm:w-24 lg:w-48 bg-linear-to-l from-[#0c182b] to-transparent z-10 pointer-events-none" />
      </div>
    </Container>
  );
}

export { LogoSlideshow };
