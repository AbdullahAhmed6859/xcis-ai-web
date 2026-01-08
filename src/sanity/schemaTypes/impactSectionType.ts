import { TextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const impactSectionType = defineType({
  name: "impactSection",
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
      name: "statistics",
      type: "array",
      of: [{ type: "impactStatistic" }],
      validation: (rule) => rule.required().max(4),
    }),
    defineField({
      name: "Experience",
      type: "impactStatistic",
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
        subtitle: "Services",
        media: media ?? TextIcon,
      };
    },
  },
});
