import { TextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const heroSectionType = defineType({
  name: "heroSection",
  type: "object",
  fields: [
    defineField({
      name: "heading",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "text",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "companies",
      type: "array",
      of: [{ type: "reference", to: [{ type: "trustedCompany" }] }],
      validation: (rule) => rule.required(),
    }),
  ],
  icon: TextIcon,
  preview: {
    select: {
      title: "heading",
      media: "image",
    },
    prepare({ title, media }) {
      return {
        title,
        subtitle: "Hero",
        media: media ?? TextIcon,
      };
    },
  },
});
