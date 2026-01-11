import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { textColourVariants } from "@/features/layout/section-header";
import { cn } from "@/lib/utils";
import { ServicesSectionProps } from "@/page-builder/blocks/page-builder-types";
import Link from "next/link";
type CardContent = ServicesSectionProps["services"][number];

type Props = {
  cardContent: CardContent;
  color?: "blue" | "white";
  className?: string;
};

export function ServiceCard({
  cardContent: { title, description, slug },
  color = "white",
  className,
}: Props) {
  return (
    <Card
      className={cn(color === "white" ? "bg-white" : "bg-dark-blue", className)}
    >
      {/* <CardContent className="space-y-6">
        <Image
          src={urlFor(mainImage).width(640).height(360).url()}
          alt={mainImage.alt}
          className="aspect-video w-full rounded-md object-cover"
          width={640}
          height={360}
        />
      </CardContent> */}
      <CardHeader>
        <CardTitle>
          <h3
            className={cn(
              "text-lg md:text-xl",
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
            {description}
          </p>
          <br />
          <Link
            href={`services/${slug.current}`}
            className={cn(
              buttonVariants({ size: "sm" }),
              "bg-light-blue text-dark-blue"
            )}
          >
            Learn More
          </Link>
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
