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

interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
}

interface Logos3Props {
  logos?: Logo[];
}

const Logos3 = ({
  logos = [
    {
      id: "logo-1",
      description: "Logo 1",
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/astro-wordmark.svg",
    },
    {
      id: "logo-2",
      description: "Logo 2",
      image: "/microsoft-logo-new.png",
    },
    {
      id: "logo-3",
      description: "Logo 3",
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/nextjs-wordmark.svg",
    },
    {
      id: "logo-4",
      description: "Logo 4",
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/react-wordmark.svg",
    },
    {
      id: "logo-5",
      description: "Logo 5",
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcn-ui-wordmark.svg",
    },
    {
      id: "logo-6",
      description: "Logo 6",
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/supabase-wordmark.svg",
    },
    {
      id: "logo-7",
      description: "Logo 7",
      image: "/BrucePower.png",
    },
    {
      id: "logo-8",
      description: "Logo 8",
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/vercel-wordmark.svg",
    },
  ],
}: Logos3Props) => {
  return (
    <div className="relative mx-auto flex items-center justify-center lg:max-w-5xl">
      <Carousel
        opts={{ loop: true }}
        plugins={[AutoScroll({ playOnInit: true, speed: 0.8 })]}
      >
        <CarouselContent className="ml-0">
          {logos.map((logo) => (
            <CarouselItem
              key={logo.id}
              className="flex basis-1/3 justify-center pl-0 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
            >
              {/* <div className="relative flex items-center justify-center"> */}
              <div className="h-12 w-32 relative flex items-center justify-center">
                <img
                  src={logo.image}
                  alt={logo.description}
                  className={`brightness-0 invert-100 object-contain h-12 w-32`}
                />
              </div>
              {/* </div> */}
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="absolute inset-y-0 left-0 w-40 bg-linear-to-r from-[#0c182b] to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-40 bg-linear-to-l from-[#0c182b] to-transparent"></div>
    </div>
  );
};

export { Logos3 };
