"use client";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";

function ApplyButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="lg"
          className="bg-dark-blue text-white hover:bg-white hover:text-dark-blue border-dark-blue border hover:border-dark-blue transition-colors duration-300"
        >
          Apply Now
        </Button>
      </DialogTrigger>
      <DialogContent>
        <div className="h-100"></div>
      </DialogContent>
    </Dialog>
  );
}

export default ApplyButton;
