import { AllTeamMembersSectionProps } from "@/page-builder/blocks/page-builder-types";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

type TeamMemberProps = {
  member: AllTeamMembersSectionProps["teamMembers"][0];
};

export function TeamMemberCard({ member }: TeamMemberProps) {
  return (
    <div className="flex flex-col items-center group">
      {/* 1. Image Container - 1:1 Square & Circular */}
      {/* Changed aspect ratio to square and rounded to full */}
      <div className="relative w-full aspect-square overflow-hidden rounded-full bg-dark-blue shadow-sm border border-gray-100 mb-5 transition-transform duration-300 group-hover:-translate-y-1">
        <Image
          // Updated Sanity dimensions to be square (600x600)
          src={urlFor(member.image).width(400).height(400).url()}
          alt={member.name}
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* 2. Name - Pill Shape Border */}
      <div className="border-[1.5px] border-dark-blue rounded-full px-8 py-2 mb-3 bg-white">
        <h3 className="text-dark-blue font-bold text-lg text-center leading-none">
          {member.name}
        </h3>
      </div>

      {/* 3. Job Title / Bio */}
      {member.bio && (
        <p className="text-muted-foreground text-sm font-medium text-center">
          {member.bio}
        </p>
      )}
    </div>
  );
}
