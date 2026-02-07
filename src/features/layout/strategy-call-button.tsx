"use client";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { InlineWidget } from "react-calendly";

export function StrategyCallButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="lg"
          className="border-light-blue bg-light-blue text-dark-blue hover:bg-transparent hover:text-light-blue border duration-500"
        >
          Book A Strategy Call
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
