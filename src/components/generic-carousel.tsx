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
import Autoplay from "embla-carousel-autoplay";
import { useIsMobile } from "@/hooks/use-mobile";

interface GenericCarouselProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  // Optional props to customize the grid per section
  basisMobile?: string;
  basisMd?: string;
  basisLg?: string;
  backgroundColor?: "white" | "blue" | "gradient";
}

export function GenericCarousel<T>({
  items,
  renderItem,
  basisMobile = "basis-full",
  basisMd = "lg:basis-1/2",
  basisLg = "2xl:basis-1/3",
  backgroundColor = "white",
}: GenericCarouselProps<T>) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  const isMobile = useIsMobile();

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );

  React.useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="mx-auto w-full md:px-12 xl:px-14">
      <Carousel
        setApi={setApi}
        className="w-full"
        plugins={isMobile ? [plugin.current] : []}
        opts={{
          align: "start",
          loop: true,
        }}
      >
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
        {!isMobile && (
          <>
            <CarouselPrevious className="text-dark-blue border-dark-blue" />
            <CarouselNext className="text-dark-blue border-dark-blue" />
          </>
        )}
      </Carousel>

      <div className="mt-8 flex justify-center gap-2">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={cn(
              "h-2 transition-all duration-300 rounded-full bg-slate-300",
              current === index
                ? `w-8 ${backgroundColor === "white" ? "bg-dark-blue" : "bg-white"}`
                : "w-2 hover:bg-slate-400",
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
