import { HeroProps } from "@/page-builder/blocks/page-builder-types";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { Container } from "./container";
import { LogoSlideshow } from "@/components/logo-slideshow";
import { StrategyCallButton } from "./strategy-call-button";
import { ExploreButton } from "./explore-button";

export function HeroWithCompanies(props: HeroProps) {
  const { heading, text, companies, mainImage } = props;
  if (!companies) return null;
  return (
    <div
      className={`w-full grid-cols-1 grid h-full grid-rows-6 md:grid-rows-5`}
    >
      <div className="w-full row-span-5 md:row-span-4 bg-linear-to-b from-[#030303] to-[#0c182b]">
        <Container className="mx-auto w-full">
          <div className="w-full h-full flex flex-col justify-evenly lg:grid lg:grid-cols-2 lg:grid-rows-1 lg:gap-x-10 2xl:gap-x-32 xl:gap-x-36">
            <div className="md:row-span-1 w-full md:flex md:flex-col md:justify-center text-center sm:text-left">
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
                <ExploreButton />
              </div>
            </div>
            <div className="flex flex-col items-center lg:justify-center lg:items-end">
              <div
                className={`relative w-full aspect-square max-h-[25vh] sm:max-h-[30vh] md:max-h-none max-w-40 sm:max-w-60 lg:max-w-72 2xl:max-w-96`}
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
      <div className="w-full row-span-1 bg-[#0c182b] py-4 md:py-8 lg:py-12 flex flex-col justify-center">
        <div className="w-full flex flex-col justify-center items-center gap-y-3 sm:gap-y-8">
          <Container className="text-center">
            <h2 className="text-pearl-white text-[10px] sm:text-sm font-semibold uppercase tracking-wider">
              Trusted by leading operators. Aligned with leading platforms
            </h2>
          </Container>

          <LogoSlideshow logos={companies} />
        </div>
      </div>
    </div>
  );
}
