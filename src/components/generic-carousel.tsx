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
import { cn } from "@/lib/utils";

interface GenericCarouselProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  // Optional props to customize the grid per section
  basisMobile?: string;
  basisMd?: string;
  basisLg?: string;
}

export function GenericCarousel<T>({
  items,
  renderItem,
  basisMobile = "basis-full",
  basisMd = "md:basis-1/2",
  basisLg = "lg:basis-1/3",
}: GenericCarouselProps<T>) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="mx-auto w-full px-12 md:px-12 xl:px-14">
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {items.map((item, index) => (
            <CarouselItem
              key={index}
              className={cn(basisMobile, basisMd, basisLg)}
            >
              {renderItem(item, index)}
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="text-dark-blue border-dark-blue" />
        <CarouselNext className="text-dark-blue border-dark-blue" />
      </Carousel>

      <div className="mt-8 flex justify-center gap-2">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={cn(
              "h-2 transition-all duration-300 rounded-full bg-slate-300",
              current === index ? "w-8 bg-[#1B2B44]" : "w-2 hover:bg-slate-400"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
