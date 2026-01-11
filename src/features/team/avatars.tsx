import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ImpactSectionProps } from "../../page-builder/blocks/page-builder-types";
import { urlFor } from "@/sanity/lib/image";

type Props = {
  teamMembers: ImpactSectionProps["teamMembers"];
};

function Avatars({ teamMembers }: Props) {
  return (
    <div className="*:data-[slot=avatar]:ring-background flex -space-x-4 *:data-[slot=avatar]:ring-2">
      {teamMembers.reverse().map((member, i) => (
        <Avatar key={i} className="lg:w-12 lg:h-12">
          <AvatarImage src={urlFor(member.image).url()} alt={member.name} />
          <AvatarFallback>
            {member.name
              .trim()
              .split(/\s+/)
              .map((w) => w[0])
              .join("")
              .toUpperCase()}
          </AvatarFallback>
        </Avatar>
      ))}
    </div>
  );
}

export default Avatars;
