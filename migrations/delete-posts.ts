import { createClient } from "@sanity/client";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_API_WRITE_TOKEN,
  useCdn: false,
});

async function run() {
  const ids = await client.fetch<string[]>('*[_type == "post"]._id');

  if (!ids.length) {
    console.log("No documents found");
    return;
  }

  for (const id of ids) {
    await client.delete(id);
    console.log("Deleted:", id);
  }

  console.log(`Deleted ${ids.length} documents`);
}

run();
