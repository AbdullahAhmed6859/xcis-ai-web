import { Button } from "@/components/ui/button";

import AtomLogo from "./AtomLogo";
import { Logos3 } from "@/components/Logo3";
import Container from "../layout/Container";
import PageSection from "./PageSection";
// bg-[#09111e]
function HeroSection() {
  return (
    <PageSection height="screen">
      <div className="w-full h-4/5 bg-linear-to-b from-[#030303] to-[#0c182b]">
        <Container className="grid place-items-center">
          <div className="grid md:grid-cols-2 md:gap-x-10 2xl:gap-x-32 xl:gap-x-36">
            <div className=" w-full flex flex-col justify-center h-full">
              <h1 className="text-4xl lg:text-5xl 2xl:text-7xl font-semibold text-[#F9F9F9] mb-6">
                Where Nuclear Grade Data Meets Production AI
              </h1>
              <p className="text-lg text-gray-300 mb-8">
                We help nuclear operators, utilities, and energy leaders
                modernise data, deploy AI safely, and move from pilots to
                production.
              </p>

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

            <Logos3 />
            {/* <div className="h-16 w-36 relative flex items-center">
                <WhiteImage
                  src="/BrucePower.png"
                  className="object-contain"
                  // sizes="128px"
                  alt=""
                />
              </div>
              <div className="h-14 w-32 relative flex items-center justify-center">
                <WhiteImage
                  src="/microsoft-logo.svg"
                  //     className="object-contain"
                  sizes="128px"
                  alt=""
                />
              </div> */}
          </div>
        </Container>
      </div>

      {/* <div className="container mx-auto px-6 h-full">
        <div className="h-full grid grid-rows-4 my-auto">
          <div className="row-span-3 grid grid-cols-2 gap-x-50">
            <div className=" w-full flex flex-col justify-center h-full">
              <h1 className="text-7xl font-semibold text-[#F9F9F9] mb-6">
                Where Nuclear Grade Data Meets Production AI
              </h1>
              <p className="text-lg text-gray-300 mb-8">
                We help nuclear operators, utilities, and energy leaders
                modernise data, deploy AI safely, and move from pilots to
                production.
              </p>

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
            <div className="flex flex-col justify-center items-end h-full">
              <div className="flex flex-col justify-center items-center gap-2">
                <AtomLogo />
                <h2 className="text-pearl-white text-lg">
                  Nuclear, Powered by Data + AI
                </h2>
              </div>
            </div>
          </div>
          <div className=" bg-[#09111e] row-span-1 grid place-items-center">
            <div className=" ">
              <div className="text-center">
                <h2 className="text-pearl-white">
                  XCIS IS TRUSTED BY PARTNERS AND PLATFORMS INCLUDING
                </h2>
              </div>

              <Logos3 />
              <div className="h-16 w-36 relative flex items-center">
                <WhiteImage
                  src="/BrucePower.png"
                  className="object-contain"
                  // sizes="128px"
                  alt=""
                />
              </div>
              <div className="h-14 w-32 relative flex items-center justify-center">
                <WhiteImage
                  src="/microsoft-logo.svg"
                  //     className="object-contain"
                  sizes="128px"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </PageSection>
  );
}

export default HeroSection;
