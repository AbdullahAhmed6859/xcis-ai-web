import { SectionDescription } from "@/features/layout/section-description";
import { SectionHeader } from "@/features/layout/section-header";
import { SectionHeading } from "@/features/layout/section-heading";
import Container from "../../features/layout/Container";
import { mediaSectionProps } from "./page-builder-types";
import MediaCardSmall from "@/features/media/media-card-small";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export function MediaSection({
  heading,
  text,
  backgroundColor,
  media,
}: mediaSectionProps) {
  console.log(media);
  return (
    <Container>
      <div className="flex flex-col gap-6">
        <SectionHeader backgroundColor={backgroundColor} textAlign={"left"}>
          <SectionHeading>{heading}</SectionHeading>
          <SectionDescription>{text}</SectionDescription>
        </SectionHeader>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
          {media.map((m, i) => (
            <MediaCardSmall key={i} media={m} />
          ))}
        </div>
        <div className="w-full flex justify-center items-center">
          <Link href="/media" className={cn(buttonVariants(), "bg-dark-blue")}>
            View All Media <ChevronRight />
          </Link>
        </div>
      </div>
    </Container>
  );
}
