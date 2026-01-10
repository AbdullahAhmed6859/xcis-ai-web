import { cn } from "@/lib/utils";

export function SectionDescription({
  className,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p className={cn("text-sm max-w-3xl md:text-base", className)} {...props} />
  );
}
