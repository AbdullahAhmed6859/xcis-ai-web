"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

type ApplyButtonProps = {
  jobTitle?: string;
  jobSlug?: string;
};

function ApplyButton({ jobTitle, jobSlug }: ApplyButtonProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name")?.toString().trim();
    const email = formData.get("email")?.toString().trim();

    if (!name || !email) {
      toast.error("Please enter your name and email");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/careers/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, jobTitle, jobSlug }),
      });

      const rawBody = await response.text();
      let result: { error?: string } = {};

      if (rawBody) {
        try {
          result = JSON.parse(rawBody) as { error?: string };
        } catch {
          // Non-JSON server responses should not throw a fake network error.
          result = {};
        }
      }

      if (!response.ok) {
        toast.error(result.error || "Could not submit your application");
        return;
      }

      toast.success("Application received. Check your email for confirmation.");
      form.reset();
      setIsOpen(false);
    } catch {
      toast.error("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          size="lg"
          className="bg-dark-blue text-white hover:bg-white hover:text-dark-blue border-dark-blue border hover:border-dark-blue transition-colors duration-300"
        >
          Apply Now
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <div className="space-y-5 py-2">
          <div className="space-y-1">
            <h3 className="text-xl font-semibold text-dark-blue">Apply Now</h3>
            <p className="text-sm text-dark-blue/80">
              Share your details and we will email a confirmation.
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label htmlFor="applicant-name">Name</Label>
              <Input
                id="applicant-name"
                name="name"
                placeholder="Your full name"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="applicant-email">Email</Label>
              <Input
                id="applicant-email"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-dark-blue text-white hover:bg-dark-blue/90"
            >
              {isSubmitting ? "Sending..." : "Submit Application"}
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ApplyButton;
