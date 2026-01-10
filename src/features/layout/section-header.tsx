import React from "react";

type Props = React.PropsWithChildren & {
  backgroundColor: "blue" | "white" | "gradient";
};

export function SectionHeader({ children, backgroundColor }: Props) {
  return (
    <div
      className={`text-center ${backgroundColor === "white" ? "text-dark-blue" : "text-white"}`}
    >
      {children}
    </div>
  );
}
