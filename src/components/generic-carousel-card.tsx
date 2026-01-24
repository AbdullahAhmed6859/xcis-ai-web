import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { textColourVariants } from "@/features/layout/section-header";
import { cn } from "@/lib/utils";
import { CarouselSectionProps } from "@/page-builder/blocks/page-builder-types";
type CardContent = CarouselSectionProps["cards"][number];

type Props = {
  cardContent: Omit<CardContent, "_key"> & { _key?: string };
  color?: "blue" | "white";
};

export function GenericCard({
  cardContent: { heading, text },
  color = "white",
}: Props) {
  return (
    <Card
      className={`relative h-full ${color === "white" ? "bg-white" : "bg-dark-blue"}`}
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
              textColourVariants({ backgroundColor: color }),
            )}
          >
            {heading}
          </h3>
        </CardTitle>
        <CardDescription>
          <p
            className={`lg:text-sm text-xs line-clamp-3 ${color === "white" ? "text-muted-foreground" : "text-white"}`}
          >
            {text}
          </p>
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
