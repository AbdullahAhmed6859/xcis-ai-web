"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { submitEmailForm } from "./submitEmailForm";
import { toast } from "sonner";

export function EmailForm() {
  async function handleAction(formData: FormData) {
    const result = await submitEmailForm(formData);

    if (result.error) {
      toast.error(result.error);
    } else {
      toast.success("Thank you for subscribing!");

      const form = document.getElementById(
        "newsletter-form",
      ) as HTMLFormElement;
      form.reset();
    }
  }

  return (
    <form
      id="newsletter-form"
      action={handleAction}
      className="relative flex items-center w-full overflow-hidden rounded-2xl border border-white/10 bg-[#1a2b4b] shadow-lg focus-within:ring-2 focus-within:ring-white/20"
    >
      <Input
        type="email"
        name="email"
        required
        placeholder="Email address"
        className="border-none bg-transparent text-white placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0 flex-grow px-4"
      />

      <Button
        type="submit"
        className="rounded-xl bg-[#fcfcfc] px-6 text-[#1a2b4b] transition-all hover:bg-white flex items-center gap-2 font-semibold shadow-sm disabled:opacity-70"
      >
        Subscribe
        <ArrowRight className="h-4 w-4 stroke-[3]" />
      </Button>
    </form>
  );
}
