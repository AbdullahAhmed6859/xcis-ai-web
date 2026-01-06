import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const pageSectionVariants = cva("w-screen", {
  variants: {
    type: {
      top: "mb-10",
      mid: "mb-10",
      bottom: "mb-10",
    },
    height: {
      full: "h-full",
      screen:
        "min-h-[600px] h-[calc(100vh-4rem)] sm:h-[calc(100vh-5rem)] page-section-screen",
      default: "",
    },
    colour: {
      light: "bg-white",
      dark: "bg-dark-blue text-white",
      none: "",
      gradient: "bg-linear-to-b from-[#030303] to-[#0c1729] text-white",
    },
  },
  defaultVariants: {
    type: "mid",
    height: "default",
    colour: "none",
  },
});

function PageSection({
  children,
  className,
  type = "mid",
  height = "default",
  colour = "none",
  ...props
}: React.ComponentProps<"section"> & VariantProps<typeof pageSectionVariants>) {
  return (
    <section
      className={cn(className, pageSectionVariants({ type, height, colour }))}
      {...props}
    >
      {children}
    </section>
  );
}

export default PageSection;
