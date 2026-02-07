"use client";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { InlineWidget } from "react-calendly";

export function SpeakWithOurTeamButton({
  className,
  variant = "dark",
}: {
  className?: string;
  variant?: "light" | "dark";
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="sm"
          className={cn(
            `border ${variant === "dark" ? "bg-dark-blue hover:bg-light-blue hover:text-dark-blue" : "border-light-blue bg-light-blue text-dark-blue hover:bg-dark-blue hover:text-light-blue"}`,
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

//  <Dialog>
//   <DialogTrigger>Open</DialogTrigger>
//   <DialogContent>
//     <DialogHeader>
//       <DialogTitle>Are you absolutely sure?</DialogTitle>
//       <DialogDescription>
//         This action cannot be undone. This will permanently delete your account
//         and remove your data from our servers.
//       </DialogDescription>
//     </DialogHeader>
//   </DialogContent>
// </Dialog>
