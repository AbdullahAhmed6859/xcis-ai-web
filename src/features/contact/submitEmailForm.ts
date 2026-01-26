"use server";

export async function submitEmailForm(formData: FormData) {
  console.log("Submitting form data to HubSpot...");
  const HUBSPOT_PORTAL_ID = process.env.HUBSPOT_PORTAL_ID;
  const formId = "3617d857-0878-4d21-a8f5-6557ae31e317";

  if (!HUBSPOT_PORTAL_ID) {
    return { error: "HubSpot Portal ID is not defined" };
  }

  // Extract fields from FormData
  const email = formData.get("email")?.toString();
  console.log("Email extracted from form data:", email);

  if (!email) {
    return { error: "Email is required" };
  }

  const body = {
    fields: [{ name: "email", value: email }],
  };

  try {
    const response = await fetch(
      `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${formId}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      },
    );

    if (!response.ok) {
      const errorData = await response.json();
      return { error: errorData.message || "Failed to submit" };
    }

    console.log("Form submitted successfully");
    return { success: true };
  } catch (err) {
    console.error("Error submitting form:", err);
    return { error: "Network error occurred" };
  }
}
