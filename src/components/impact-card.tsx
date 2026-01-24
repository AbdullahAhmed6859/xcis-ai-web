import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ImpactSectionProps } from "@/page-builder/blocks/page-builder-types";

type Props = {
  cardContent: ImpactSectionProps["statistics"][number];
  color?: "blue" | "white";
  className?: string;
};

export function ImpactCard({
  cardContent: { text, heading, highlightedHeading },
  className,
  color = "white",
}: Props) {
  return (
    <Card
      className={cn(
        className,
        `${color === "white" ? "bg-white" : "bg-dark-blue"} py-4 relative h-full`,
      )}
    >
      <CardHeader className="px-4">
        <CardTitle className="text-2xl lg:text-4xl">
          <h3 className={color === "white" ? "text-dark-blue" : "text-white"}>
            {heading}
            <span className="text-light-blue">{highlightedHeading}</span>
          </h3>
        </CardTitle>
        <CardDescription className="px-0">
          <p
            className={`text-xs ${color === "white" ? "text-dark-blue" : "text-white"} lg:text-base`}
          >
            {text}
          </p>
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
