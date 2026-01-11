import { SectionDescription } from "@/features/layout/section-description";
import {
  SectionHeader,
  textColourVariants,
} from "@/features/layout/section-header";
import { SectionHeading } from "@/features/layout/section-heading";
import Container from "../../features/layout/Container";
import { ImpactSectionProps } from "./page-builder-types";
import Avatars from "@/features/team/avatars";
import { cn } from "@/lib/utils";
import { ImpactCard } from "@/components/impact-card";

export function ImpactSection({
  heading,
  text,
  backgroundColor,
  countMembers,
  teamMembers,
  statistics,
}: ImpactSectionProps) {
  return (
    <Container>
      <div className="flex flex-col justify-center gap-y-4 lg:justify-normal lg:grid lg:grid-cols-5 xl:gap-x-32">
        <div className="col-span-3 flex flex-col gap-y-2 lg:justify-between">
          <SectionHeader
            backgroundColor={backgroundColor}
            textAlign="center"
            className="flex flex-col gap-y-2 lg:text-left lg:gap-y-4"
          >
            <SectionHeading>{heading}</SectionHeading>
            <SectionDescription className="lg:leading-8">
              {text}
            </SectionDescription>
          </SectionHeader>

          <div className="flex justify-center lg:justify-normal">
            <div
              className={cn(
                "flex items-center gap-2",
                textColourVariants({ backgroundColor })
              )}
            >
              <Avatars teamMembers={teamMembers} />{" "}
              <span className="text-sm lg:text-base">
                {countMembers}+ Team Members
              </span>
            </div>
          </div>
        </div>
        <div className="w-full col-span-2 grid grid-cols-2 gap-3">
          {statistics.map((stat, i) => (
            <ImpactCard
              key={i}
              cardContent={stat}
              color={i === 1 || i === 2 ? "blue" : "white"}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}
