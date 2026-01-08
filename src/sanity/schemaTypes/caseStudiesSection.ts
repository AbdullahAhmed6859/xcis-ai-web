import { TextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const caseStudiesSectionType = defineType({
  name: "caseStudiesSection",
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
      name: "caseStudies",
      type: "array",
      of: [{ type: "reference", to: { type: "caseStudy" } }],
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
        subtitle: "Case Studies",
        media: media ?? TextIcon,
      };
    },
  },
});
