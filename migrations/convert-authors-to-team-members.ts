import { createClient } from "@sanity/client";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_API_WRITE_TOKEN,
  useCdn: false,
});

async function migrate() {
  const authors = await client.fetch(`*[_type == "author"]`);

  console.log(`Found ${authors.length} authors`);

  for (const author of authors) {
    await client.create({
      _type: "teamMember",
      name: author.name,
      image: author.image,
      body: author.bio,
    });
  }

  console.log("✅ Migration completed");
}

migrate().catch(console.error);
