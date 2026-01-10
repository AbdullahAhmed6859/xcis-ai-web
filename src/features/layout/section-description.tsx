import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export function SectionDescription({ children, className }: Props) {
  return (
    <p className={cn(className, "text-sm max-w-3xl md:text-base leading-8")}>
      {children}
    </p>
  );
}
