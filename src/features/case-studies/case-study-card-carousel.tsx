import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CaseStudiesSectionProps } from "../page-builder/blocks/page-builder-types";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { MoveRight } from "lucide-react";
import Link from "next/link";

type CaseStudy = CaseStudiesSectionProps["caseStudies"][number];

function CaseStudyCardCarousel({ title, excerpt, mainImage, slug }: CaseStudy) {
  return (
    <Card>
      <CardContent className="space-y-6">
        <Image
          src={urlFor(mainImage).width(640).height(360).url()}
          alt={mainImage.alt ?? ""}
          className="aspect-video w-full rounded-md object-cover"
          width={640}
          height={360}
        />
      </CardContent>
      <CardHeader className="">
        <CardTitle>
          <h3>{title}</h3>
        </CardTitle>
        <CardDescription>
          <p className="text-xs line-clamp-3">{excerpt}</p>
        </CardDescription>
        <Link
          href={`case-studies/${slug.current}`}
          className="flex gap-x-2 items-center text-xs"
        >
          VIEW CASE STUDY <MoveRight />
        </Link>
      </CardHeader>
    </Card>
  );
}

export default CaseStudyCardCarousel;
