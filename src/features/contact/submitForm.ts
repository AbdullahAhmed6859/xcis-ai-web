export async function submitForm(data: FormData, formId: string) {
  const HUBSPOT_PORTAL_ID = process.env.HUBSPOT_PORTAL_ID;
  const HUBSPOT_FORM_ID = process.env.HUBSPOT_FORM_ID;

  if (!HUBSPOT_PORTAL_ID || !HUBSPOT_FORM_ID) {
    throw new Error("HubSpot Portal ID or Form ID is not defined");
  }

  const formData: { [key: string]: string } = {};
  data.forEach((value, key) => {
    formData[key] = value.toString();
  });

  const response = await fetch(
    `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${formId}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fields: Object.entries(formData).map(([name, value]) => ({
          name,
          value,
        })),
        context: {
          pageUri: "http://localhost:3000/contact",
          pageName: "Contact Us",
        },
      }),
    },
  );

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Failed to submit form: ${errorText}`);
  }

  return await response.json();
}
