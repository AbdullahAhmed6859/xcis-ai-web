import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import React from "react";

export const containerVariants = cva(
  "container mx-auto px-6 lg:px-12 xl:px-20 2xl:px-24 h-full",
);

function Container({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn(containerVariants(), className)} {...props}>
      {children}
    </div>
  );
}

export default Container;
