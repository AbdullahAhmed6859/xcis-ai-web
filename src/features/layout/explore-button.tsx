import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function ExploreButton() {
  return (
    <Link
      href="/case-studies"
      className={cn(
        buttonVariants({ size: "lg", variant: "outline" }),
        "text-light-blue bg-transparent hover:bg-light-blue border-light-blue hover:border-light-blue duration-500",
      )}
    >
      Explore Our Case Studies
    </Link>
  );
}
