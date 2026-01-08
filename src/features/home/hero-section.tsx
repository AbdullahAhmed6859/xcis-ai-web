import { Button } from "@/components/ui/button";
import AtomLogo from "./atom-logo";
import { LogoSlideshow } from "@/components/logo-slideshow";
import Container from "../layout/Container";
import PageSection from "./page-section";
import { HeroProps } from "./page-builder-types";

function HeroSection(props: HeroProps) {
  return (
    <PageSection height="screen">
      <div className="w-full h-4/5 bg-linear-to-b from-[#030303] to-[#0c182b]">
        <Container className="grid place-items-center">
          <div className="w-full grid md:grid-cols-2 md:gap-x-10 2xl:gap-x-32 xl:gap-x-36">
            <div className=" w-full flex flex-col justify-center h-full">
              <h1 className="text-4xl lg:text-5xl 2xl:text-7xl font-semibold text-[#F9F9F9] mb-6">
                {props.heading}
              </h1>
              <p className="text-lg text-gray-300 mb-8">{props.text}</p>

              <div className="flex gap-4">
                <Button
                  size="lg"
                  className="bg-light-blue text-dark-blue hover:bg-light-blue/90 hover:text-dark-blue/90"
                >
                  Book A Strategy Call
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-light-blue bg-transparent hover:bg-light-blue border-light-blue hover-border-light-blue"
                >
                  Explore Our Services
                </Button>
              </div>
            </div>
            <div className="hidden md:flex flex-col justify-center items-end h-full">
              <div className="flex flex-col justify-center items-center gap-2">
                <AtomLogo />
                <h2 className="text-pearl-white text-lg">
                  Nuclear, Powered by Data + AI
                </h2>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="w-full h-1/5 bg-[#0c182b]">
        <Container>
          <div className="w-full h-full flex flex-col justify-center items-center gap-y-4 sm:gap-y-6">
            <div className="text-center px-2">
              <h2 className="text-pearl-white text-sm sm:text-base">
                XCIS IS TRUSTED BY PARTNERS AND PLATFORMS INCLUDING
              </h2>
            </div>

            <LogoSlideshow logos={props.companies} />
          </div>
        </Container>
      </div>
    </PageSection>
  );
}

export default HeroSection;
