import { Card } from "@/components/ui/card";
import { CtaSectionProps } from "./page-builder-types";
import { Container } from "@/features/layout/container";
import { MoveRight } from "lucide-react";
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
        className={`group relative w-full aspect-5/1 overflow-hidden border-0 rounded-xl p-0`}
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

        <div className="h-full flex flex-col justify-center p-6 md:p-8 w-full z-20 gap-4">
          <h2 className="mb-2 text-2xl font-bold text-white md:text-3xl line-clamp-3 lg:line-clamp-2">
            {heading}
          </h2>

          <div className="space-x-4">
            <SpeakWithOurTeamButton className="max-w-50" variant="light" />
            <Link
              href="/contact"
              className={cn(
                buttonVariants(),
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
