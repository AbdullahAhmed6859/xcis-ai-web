// features/contact/submitContactForm.ts
"use server";

import { z } from "zod";

// Define schema here for validation on server side as well
const formSchema = z.object({
  firstname: z.string().min(1),
  lastname: z.string().min(1),
  email: z.email(),
  phone: z.string().optional(),
  message: z.string().min(1),
});

export type ContactFormValues = z.infer<typeof formSchema>;

export async function submitContactForm(data: ContactFormValues) {
  const HUBSPOT_PORTAL_ID = process.env.HUBSPOT_PORTAL_ID || "244688559"; // Fallback to the ID from your snippet
  const FORM_ID = "903a754a-f08b-4027-a78f-c86bb9910eb4"; // The ID from your snippet

  // Validate data
  const result = formSchema.safeParse(data);
  if (!result.success) {
    return { error: "Invalid form data" };
  }

  // Map to HubSpot Fields format
  const body = {
    fields: [
      { name: "firstname", value: data.firstname },
      { name: "lastname", value: data.lastname },
      { name: "email", value: data.email },
      { name: "phone", value: data.phone || "" },
      { name: "message", value: data.message },
    ],
  };

  try {
    const response = await fetch(
      `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${FORM_ID}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      },
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error("HubSpot Error:", errorData);
      return { error: errorData.message || "Failed to submit form." };
    }

    return { success: true };
  } catch (err) {
    console.error("Network Error:", err);
    return { error: "A network error occurred. Please try again later." };
  }
}
