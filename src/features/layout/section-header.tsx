import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";

export const textColourVariants = cva("", {
  variants: {
    textAlign: {
      left: "text-left",
      center: "text-center",
    },
    backgroundColor: {
      blue: "text-white",
      white: "text-dark-blue",
      gradient: "text-dark-blue",
    },
    defaultVariants: {
      textAlign: "center",
      backgroundColor: "white",
    },
  },
});

export function SectionHeader({
  textAlign = "center",
  backgroundColor = "white",
  className,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof textColourVariants>) {
  return (
    <div
      className={cn(
        className,
        textColourVariants({ textAlign, backgroundColor })
      )}
      {...props}
    />
  );
}
