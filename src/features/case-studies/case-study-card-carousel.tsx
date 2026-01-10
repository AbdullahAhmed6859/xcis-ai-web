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
  colour?: "blue" | "white";
};

function CaseStudyCardCarousel({
  caseStudy: { mainImage, title, excerpt, slug, services },
  colour = "white",
}: Props) {
  return (
    <Card className={colour === "white" ? "bg-white" : "bg-dark-blue"}>
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
          className={`text-xs ${colour === "white" ? "text-muted-foreground" : "text-light-blue"}`}
        >
          {services?.map((s) => s.title).join(" . ")}
        </p>
        <CardTitle>
          <h3 className={colour === "white" ? "text-dark-blue" : "text-white"}>
            {title}
          </h3>
        </CardTitle>
        <CardDescription>
          <p
            className={`text-xs line-clamp-3 ${colour === "white" ? "text-muted-foreground" : "text-white"}`}
          >
            {excerpt}
          </p>
        </CardDescription>
        <Link
          href={`case-studies/${slug.current}`}
          className={`flex gap-x-2 items-center text-xs transition-colors duration-300 ${colour === "white" ? "text-dark-blue" : "text-light-blue"}`}
        >
          VIEW CASE STUDY <MoveRight />
        </Link>
      </CardHeader>
    </Card>
  );
}

export default CaseStudyCardCarousel;
