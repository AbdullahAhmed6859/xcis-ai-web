import { HeroProps } from "@/page-builder/blocks/page-builder-types";
import { Container } from "./container";
import { cn } from "@/lib/utils";
import { StrategyCallButton } from "./strategy-call-button";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export function HeroWithoutImage(props: HeroProps) {
  const { heading, text } = props;
  return (
    <div className="w-full h-full">
      <Container className="w-full h-full py-12 lg:py-12">
        {/* CHANGED: grid-cols-2 now triggers at 'lg' instead of 'md' */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center h-full transition-all">
          {/* TEXT BLOCK */}
          {/* CHANGED: Text aligns left only on 'lg' */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            {heading && (
              <h1 className="text-2xl md:text-4xl lg:text-5xl 2xl:text-7xl font-bold lg:font-semibold text-white mb-6">
                {heading}
              </h1>
            )}
            {text && (
              <p className="text-base md:text-lg text-gray-300 mb-8">{text}</p>
            )}
            {/* CHANGED: Buttons align start only on 'lg' */}
            <div className="flex gap-4 flex-col sm:flex-row w-full justify-center lg:justify-start">
              <StrategyCallButton />
              <Link
                href="/case-studies"
                className={cn(
                  buttonVariants({ size: "lg", variant: "outline" }),
                  "text-light-blue bg-transparent hover:bg-light-blue border-light-blue hover:border-light-blue",
                )}
              >
                Explore Our Case Studies
              </Link>
            </div>
          </div>

          {/* IMAGE BLOCK */}
          {/* CHANGED: Image aligns end only on 'lg' */}
          <div className="w-full flex justify-center lg:justify-end"></div>
        </div>
      </Container>
    </div>
  );
}
