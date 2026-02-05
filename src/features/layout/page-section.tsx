import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const pageSectionVariants = cva("w-full h-full", {
  variants: {
    paddingTop: {
      none: "",
      single: "pt-6 sm:pt-8",
      double: "pt-12 sm:pt-16",
    },
    paddingBottom: {
      none: "",
      single: "pb-6 sm:pb-8",
      double: "pb-12 sm:pb-16",
    },
    height: {
      full: "h-full",
      screen: "min-h-[600px] h-[calc(80vh)] md:h-[calc(100vh-5rem)]",
      medium: "min-h-[350px] lg:h-[calc(70vh)]",
    },
    color: {
      white: "bg-white",
      blue: "bg-dark-blue text-white",
      gradient: "bg-linear-to-b from-[#030303] to-[#0c1729] text-white",
    },
  },
  defaultVariants: {
    height: "full",
    color: "white",
    paddingBottom: "single",
    paddingTop: "single",
  },
});

export function PageSection({
  children,
  className,
  height = "full",
  color = "white",
  paddingTop = "single",
  paddingBottom = "single",
  ...props
}: React.ComponentProps<"section"> & VariantProps<typeof pageSectionVariants>) {
  return (
    <section
      className={cn(
        pageSectionVariants({ height, color, paddingTop, paddingBottom }),
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
}
