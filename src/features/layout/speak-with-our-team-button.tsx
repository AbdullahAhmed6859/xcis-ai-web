"use client";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { InlineWidget } from "react-calendly";

export function SpeakWithOurTeamButton({
  className,
  variant = "dark",
  nav = false,
}: {
  className?: string;
  variant?: "light" | "dark";
  nav?: boolean;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="sm"
          className={cn(
            `${nav ? "h-10 px-4 py-2" : "md:h-10 md:px-4 md:py-2"} border ${variant === "dark" ? "bg-dark-blue hover:bg-light-blue hover:text-dark-blue" : "border-light-blue bg-light-blue text-dark-blue hover:bg-dark-blue hover:text-light-blue"}`,
            className,
          )}
        >
          Speak With Our Team
        </Button>
      </DialogTrigger>
      <DialogContent className="flex h-[calc(100vh-5rem)] min-w-[calc(100vw-5rem)] flex-col justify-between gap-0 bg-[#ffff]">
        <InlineWidget
          url="https://calendly.com/xcis/30min?hide_gdpr_banner=1"
          className="h-full rounded-4xl"
        />
      </DialogContent>
    </Dialog>
  );
}
