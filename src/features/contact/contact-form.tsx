// features/contact/contact-form.tsx
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { submitContactForm } from "./submitContactForm";

// Schema definition matching HubSpot fields
const formSchema = z.object({
  firstname: z.string().min(2, { message: "First name is required" }),
  lastname: z.string().min(2, { message: "Last name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().min(5, { message: "Phone number is required" }), // HubSpot 'phone'
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters" }),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const { isSubmitting } = form.formState;

  async function onSubmit(values: FormValues) {
    try {
      const result = await submitContactForm(values);

      if (result.error) {
        toast.error(result.error);
        return;
      }

      toast.success("Message sent successfully!");
      form.reset();
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  }

  return (
    <div className="w-full max-w-lg mx-auto px-4 lg:px-0">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* First Name */}
            <FormField
              control={form.control}
              name="firstname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-dark-blue font-semibold">
                    First Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Jane"
                      className="bg-white border-gray-200 focus:border-dark-blue focus-visible:ring-dark-blue text-dark-blue placeholder:text-gray-400"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Last Name */}
            <FormField
              control={form.control}
              name="lastname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-dark-blue font-semibold">
                    Last Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Doe"
                      className="bg-white border-gray-200 focus:border-dark-blue focus-visible:ring-dark-blue text-dark-blue placeholder:text-gray-400"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-dark-blue font-semibold">
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="jane@example.com"
                      type="email"
                      className="bg-white border-gray-200 focus:border-dark-blue focus-visible:ring-dark-blue text-dark-blue placeholder:text-gray-400"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Phone */}
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-dark-blue font-semibold">
                    Phone
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="+1 (555) 000-0000"
                      type="tel"
                      className="bg-white border-gray-200 focus:border-dark-blue focus-visible:ring-dark-blue text-dark-blue placeholder:text-gray-400"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Message */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-dark-blue font-semibold">
                  Message
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="How can we help you?"
                    className="resize-none min-h-[120px] bg-white border-gray-200 focus:border-dark-blue focus-visible:ring-dark-blue text-dark-blue placeholder:text-gray-400"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-dark-blue text-white hover:bg-dark-blue/90 h-12 rounded-lg text-base font-medium"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
