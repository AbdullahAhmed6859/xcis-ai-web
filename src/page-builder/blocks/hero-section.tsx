import { buttonVariants } from "@/components/ui/button";
import { LogoSlideshow } from "@/components/logo-slideshow";
import { Container } from "../../features/layout/container";
import { HeroProps } from "./page-builder-types";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { StrategyCallButton } from "@/features/layout/strategy-call-button";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function HeroSection(props: HeroProps) {
  const { heading, text, companies, mainImage } = props;

  const showCompanies = companies && companies.length > 0;

  // LOGIC SWITCH:
  // If we have companies (Main Hero), use the strict Grid layout.
  // If not (Case Studies), use a flexible Flex layout.
  if (!showCompanies) {
    return (
      <div className="w-full h-full bg-linear-to-b from-[#030303] to-[#0c182b] flex items-center">
        <Container className="w-full py-12 md:py-0">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
              {heading && (
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                  {heading}
                </h1>
              )}
              {text && (
                <p className="text-base md:text-lg text-gray-300 mb-8 max-w-xl">
                  {text}
                </p>
              )}
              <div className="flex gap-4 flex-col sm:flex-row w-full justify-center md:justify-start">
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

            {mainImage && (
              <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                <div className="relative w-full max-w-[300px] md:max-w-[400px] aspect-square">
                  <Image
                    src={urlFor(mainImage).url()}
                    fill
                    alt="Hero Image"
                    className="object-contain"
                  />
                </div>
              </div>
            )}
          </div>
        </Container>
      </div>
    );
  }

  // --- MAIN HERO LAYOUT (Grid - Preserved exactly as requested) ---
  return (
    <div
      className={`w-full grid-cols-1 grid h-full grid-rows-6 md:grid-rows-5`}
    >
      <div className="w-full row-span-5 md:row-span-4 bg-linear-to-b from-[#030303] to-[#0c182b]">
        <Container className="mx-auto w-full">
          <div className="w-full h-full flex flex-col justify-evenly md:grid md:grid-cols-2 md:grid-rows-1 md:gap-x-10 2xl:gap-x-32 xl:gap-x-36">
            <div className="sm:row-span-1 w-full md:flex md:flex-col md:justify-center text-center sm:text-left">
              {heading && (
                <h1 className="text-2xl md:text-4xl lg:text-5xl 2xl:text-7xl font-bold lg:font-semibold text-white mb-6">
                  {heading}
                </h1>
              )}
              {text && (
                <p className="text-base md:text-lg text-gray-300 mb-8">
                  {text}
                </p>
              )}

              <div className="flex gap-4 flex-col sm:flex-row">
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
            <div className="flex flex-col items-center md:justify-center md:items-end">
              <div
                className={`relative w-full aspect-square max-w-40 sm:max-w-60 md:max-w-72 lg:max-w-72 2xl:max-w-96`}
              >
                {mainImage && (
                  <Image
                    src={urlFor(mainImage).url()}
                    fill
                    alt="mainImage"
                    className="object-contain"
                  />
                )}
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="w-full row-span-1 bg-[#0c182b] py-6 md:py-8 lg:py-12">
        <div className="w-full h-full flex flex-col justify-end items-center gap-y-4 sm:gap-y-8">
          <Container className="text-center">
            <h2 className="text-pearl-white text-xs sm:text-sm font-semibold">
              TRUSTED BY LEADING OPERATORS. ALIGNED WITH LEADING PLATFORMS AND
              NUCLEAR INDUSTRY PARTNERS
            </h2>
          </Container>

          <LogoSlideshow logos={companies} />
        </div>
      </div>
    </div>
  );
}
