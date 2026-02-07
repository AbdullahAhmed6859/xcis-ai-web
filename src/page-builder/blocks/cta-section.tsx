import { Card } from "@/components/ui/card";
import { CtaSectionProps } from "./page-builder-types";
import { Container } from "@/features/layout/container";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { cn } from "@/lib/utils";
import { SpeakWithOurTeamButton } from "@/features/layout/speak-with-our-team-button";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export function CtaSection({ heading, mainImage }: CtaSectionProps) {
  return (
    <Container>
      <Card
        className={`group relative w-full h-32 md:h-40 lg:h-52 overflow-hidden border-0 rounded-xl p-0`}
      >
        {/* Background Image */}
        <div className="absolute inset-0 h-full w-full">
          <Image
            src={urlFor(mainImage).url()}
            alt={"img"}
            className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            fill
          />
        </div>

        <div className="h-full flex flex-col justify-center p-4 md:p-8 w-full z-20 gap-4">
          <h2 className="text-2xl font-bold text-white md:text-3xl line-clamp-3 lg:line-clamp-2">
            {heading}
          </h2>

          <div className="gap-4 flex">
            <SpeakWithOurTeamButton className="max-w-50" variant="light" />
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ size: "sm" }),
                "bg-white text-dark-blue hover:bg-light-blue",
              )}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </Card>
    </Container>
  );
}
