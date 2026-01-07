import { defineType } from "sanity";

export const trustedCompanyType = defineType({
  name: "trustedCompany",
  title: "Trusted Company",
  type: "document",
  fields: [
    { name: "name", type: "string", validation: (Rule) => Rule.required() },
    {
      name: "logo",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
      fields: [
        { name: "alt", type: "string", validation: (Rule) => Rule.required() },
      ],
    },
    { name: "website", type: "url" },
  ],
  preview: {
    select: {
      title: "name",
      website: "website",
      media: "logo",
    },
    prepare({ title, website, media }) {
      return {
        title,
        subtitle: website ? website.replace(/^https?:\/\//, "") : "No website",
        media,
      };
    },
  },
});
