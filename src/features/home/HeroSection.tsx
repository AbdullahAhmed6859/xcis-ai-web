import { Button } from "@/components/ui/button";

import AtomLogo from "./AtomLogo";

function HeroSection() {
  return (
    <section className="w-screen h-[calc(100vh-5rem)] bg-linear-to-b from-[#030303] to-[#0c1729]">
      {/* Content Grid */}
      <div className="grid grid-cols-2 px-64 gap-50">
        {/* Column 1 - Text Content */}
        <div className="flex flex-col justify-center h-[calc(100vh-5rem)]">
          <h1 className="text-7xl font-semibold text-[#F9F9F9] mb-6">
            Where Nuclear Grade Data Meets Production AI
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            We help nuclear operators, utilities, and energy leaders modernise
            data, deploy AI safely, and move from pilots to production.
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
        <div className="h-[calc(100vh-5rem)] flex items-center justify-end">
          <AtomLogo />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
