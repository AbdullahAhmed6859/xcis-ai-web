import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const pageSectionVariants = cva("w-full", {
  variants: {
    paddingTop: {
      none: "",
      single: "pt-8",
      double: "pt-16",
    },
    paddingBottom: {
      none: "",
      single: "pb-8",
      double: "pb-16",
    },
    height: {
      full: "h-full",
      screen:
        "min-h-[600px] h-[calc(80vh)] sm:h-[calc(100vh-5rem)] page-section-screen",
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

function PageSection({
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
        className,
        pageSectionVariants({ height, color, paddingTop, paddingBottom })
      )}
      {...props}
    >
      {children}
    </section>
  );
}

export default PageSection;
