import { cn } from "@/lib/utils";
import React from "react";

function Container({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "container mx-auto px-6 lg:px-12 xl:px-24 h-full",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export default Container;
