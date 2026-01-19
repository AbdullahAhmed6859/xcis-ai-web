import { buttonVariants } from "@/components/ui/button";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { textColourVariants } from "@/features/layout/section-header";
import { cn } from "@/lib/utils";
import { ServicesSectionProps } from "@/page-builder/blocks/page-builder-types";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

type CardContent = ServicesSectionProps["services"][number];

type Props = {
  cardContent: CardContent;
  color?: "blue" | "white";
  className?: string;
};

export function ServiceCard({
  cardContent: { title, description, slug, icon },
  color = "white",
  className,
}: Props) {
  const isWhite = color === "white";

  return (
    <Card
      className={cn(
        "h-full overflow-hidden",
        isWhite ? "bg-white" : "bg-dark-blue",
        className,
      )}
    >
      <div className="px-6 py-2 flex flex-col sm:flex-row justify-between gap-6 h-full">
        {/* Left Column: Text & Button */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <CardTitle className="mb-3">
              <h3
                className={cn(
                  "text-xl font-bold leading-tight",
                  textColourVariants({ backgroundColor: color }),
                )}
              >
                {title}
              </h3>
            </CardTitle>
            <CardDescription>
              <p
                className={cn(
                  "text-sm leading-relaxed mb-6 line-clamp-4",
                  isWhite ? "text-muted-foreground" : "text-gray-200",
                )}
              >
                {description}
              </p>
            </CardDescription>
          </div>

          <div>
            <Link
              href={`services/${slug}`}
              className={cn(
                buttonVariants({ size: "default" }),
                "bg-light-blue text-dark-blue font-semibold hover:bg-light-blue/90",
              )}
            >
              Learn more
            </Link>
          </div>
        </div>

        <div className="shrink-0 items-center flex justify-center">
          <Image
            src={urlFor(icon).width(200).url()}
            alt={title}
            width={100}
            height={100}
            className="object-contain w-24 h-24 sm:w-32 sm:h-32"
          />
        </div>
      </div>
    </Card>
  );
}
