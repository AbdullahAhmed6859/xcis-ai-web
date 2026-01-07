import { createClient } from "@sanity/client";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_API_WRITE_TOKEN,
  useCdn: false,
});

async function migrate() {
  const posts = await client.fetch(`*[_type == "post"]`);

  console.log(`Found ${posts.length} posts`);

  for (const post of posts) {
    // ---- Case Study ----
    await client.create({
      _type: "caseStudy",
      title: post.title,
      slug: post.slug,
      author: post.author,
      mainImage: post.mainImage,
      categories: post.categories,
      publishedAt: post.publishedAt,
      body: post.body,
    });

    // ---- Media ----
    await client.create({
      _type: "media",
      title: post.title,
      slug: post.slug,
      author: post.author,
      mainImage: post.mainImage,
      categories: post.categories,
      publishedAt: post.publishedAt,
      body: post.body,
    });
  }

  console.log("✅ Migration completed");
}

migrate().catch(console.error);
