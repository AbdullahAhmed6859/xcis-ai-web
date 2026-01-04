import { defineField, defineType } from "sanity";

export const seoType = defineType({
  name: "seo",
  title: "SEO",
  type: "object",
  fields: [
    defineField({
      name: "title",
      type: "string",
      description: "Meta title for search engines",
    }),
    defineField({
      name: "description",
      type: "text",
      description: "Meta description for search engines",
    }),
    defineField({
      name: "image",
      type: "image",
      options: { hotspot: true },
      description: "Image used for social sharing previews",
    }),
    defineField({
      name: "noIndex",
      type: "boolean",
      initialValue: false,
      description:
        "If true, search engines will be instructed not to index this page",
    }),
  ],
});
