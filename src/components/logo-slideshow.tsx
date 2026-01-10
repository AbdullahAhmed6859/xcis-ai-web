/* eslint-disable @next/next/no-img-element */
// This template requires the Embla Auto Scroll plugin to be installed:
//
// npm install embla-carousel-auto-scroll

"use client";

import AutoScroll from "embla-carousel-auto-scroll";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { CompanyLogoType } from "@/features/page-builder/blocks/page-builder-types";
import { urlFor } from "@/sanity/lib/image";

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
  console.log(logosArr[0].logo);
  return (
    <div className="relative mx-auto flex items-center justify-center w-full max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-5xl">
      <Carousel
        opts={{ loop: true }}
        plugins={[AutoScroll({ playOnInit: true, speed: 0.8 })]}
        className="w-full"
      >
        <CarouselContent className="ml-0">
          {logosArr.map((logo, i) => (
            <CarouselItem
              key={i}
              className="flex basis-1/3 justify-center pl-0 md:basis-1/4 lg:basis-1/5 xl:basis-1/6"
            >
              <div className="h-10 w-24 sm:h-12 sm:w-32 relative flex items-center justify-center">
                <img
                  src={urlFor(logo.logo).url()}
                  alt={logo.logo.alt}
                  className="brightness-0 invert-100 object-contain h-full w-full"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="absolute inset-y-0 left-0 w-8 sm:w-16 md:w-24 lg:w-40 bg-linear-to-r from-[#0c182b] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-8 sm:w-16 md:w-24 lg:w-40 bg-linear-to-l from-[#0c182b] to-transparent z-10 pointer-events-none"></div>
    </div>
  );
}

export { LogoSlideshow };
