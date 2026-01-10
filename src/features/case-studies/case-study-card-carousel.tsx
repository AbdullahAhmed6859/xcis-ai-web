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

type Props = {
  caseStudy: CaseStudy;
  color?: "blue" | "white";
};

function CaseStudyCardCarousel({
  caseStudy: { mainImage, title, excerpt, slug, services },
  color = "white",
}: Props) {
  return (
    <Card className={color === "white" ? "bg-white" : "bg-dark-blue"}>
      <CardContent className="space-y-6">
        <Image
          src={urlFor(mainImage).width(640).height(360).url()}
          alt={mainImage.alt}
          className="aspect-video w-full rounded-md object-cover"
          width={640}
          height={360}
        />
      </CardContent>
      <CardHeader>
        <p
          className={`text-xs ${color === "white" ? "text-muted-foreground" : "text-light-blue"}`}
        >
          {services?.map((s) => s.title).join(" . ")}
        </p>
        <CardTitle>
          <h3 className={color === "white" ? "text-dark-blue" : "text-white"}>
            {title}
          </h3>
        </CardTitle>
        <CardDescription>
          <p
            className={`lg:text-sm text-xs line-clamp-3 ${color === "white" ? "text-muted-foreground" : "text-white"}`}
          >
            {excerpt}
          </p>
        </CardDescription>
        <Link
          href={`case-studies/${slug.current}`}
          className={`flex gap-x-2 items-center text-xs transition-colors duration-300 ${color === "white" ? "text-dark-blue" : "text-light-blue"}`}
        >
          VIEW CASE STUDY <MoveRight />
        </Link>
      </CardHeader>
    </Card>
  );
}

export default CaseStudyCardCarousel;
