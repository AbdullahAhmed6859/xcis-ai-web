import { defineField, defineType } from "sanity";

export const impactStatisticType = defineType({
  name: "impactStatistic",
  type: "object",
  fields: [
    defineField({
      name: "heading",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "highlightedHeading",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "text",
      type: "string",
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      text: "text",
      heading: "heading",
      highlightedHeading: "highlightedHeading",
    },
    prepare({ text, heading, highlightedHeading }) {
      return {
        title: `${heading} ${highlightedHeading}`,
        subtitle: text,
      };
    },
  },
});
