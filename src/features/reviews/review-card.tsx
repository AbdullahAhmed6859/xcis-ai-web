import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react"; // Shadcn typically uses Lucide
import { cn } from "@/lib/utils";
import { ReviewsSectionProps } from "@/page-builder/blocks/page-builder-types";
import { urlFor } from "@/sanity/lib/image";
import { getInitilas } from "@/lib/getInitials";

interface TestimonialCardProps {
  review: ReviewsSectionProps["reviews"][number];
  color?: "blue" | "white";
}

export function ReviewCard({ color = "white", review }: TestimonialCardProps) {
  const isBlue = color === "blue";
  const { reviewText, name, image, position } = review;

  return (
    <Card
      className={cn(
        "relative h-full border-none shadow-md transition-all",
        isBlue ? "bg-dark-blue text-white" : "bg-white text-dark-blue"
      )}
    >
      <CardContent className="flex h-full flex-col justify-between p-8 pt-10">
        {/* Quote Text */}
        <blockquote className="text-lg font-medium leading-relaxed md:text-xl">
          “{reviewText}”
        </blockquote>

        <div className="mt-8 flex items-end justify-between">
          {/* Author Info */}
          <div className="flex items-center gap-3">
            <Avatar className="h-12 w-12 border-2 border-slate-100">
              <AvatarImage
                src={urlFor(image).height(100).width(100).url()}
                alt={name}
              />
              <AvatarFallback>{getInitilas(name)}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="font-bold leading-tight">{name}</span>
              <span
                className={cn(
                  "text-xs opacity-70",
                  isBlue ? "text-slate-300" : "text-slate-500"
                )}
              >
                {position}
              </span>
            </div>
          </div>

          {/* Large Decorative Quote Icon */}
          <Quote
            className={cn(
              "h-16 w-16 opacity-20 transform rotate-180",
              isBlue ? "text-white" : "text-dark-blue"
            )}
            strokeWidth={3}
          />
        </div>
      </CardContent>
    </Card>
  );
}
