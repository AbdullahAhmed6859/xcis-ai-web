import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CaseStudiesSectionProps } from "../../page-builder/blocks/page-builder-types";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { textColourVariants } from "../layout/section-header";

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
    <Link href={`case-studies/${slug}`}>
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
            <h3
              className={cn(
                "text-lg md:text-xl line-clamp-2",
                textColourVariants({ backgroundColor: color })
              )}
            >
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
          <p
            className={cn(
              `flex gap-x-2 items-center text-xs transition-colors duration-300`,
              textColourVariants({ backgroundColor: color })
            )}
          >
            VIEW CASE STUDY <MoveRight />
          </p>
        </CardHeader>
      </Card>
    </Link>
  );
}

export default CaseStudyCardCarousel;
