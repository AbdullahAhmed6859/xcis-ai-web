import { defineField, defineType } from "sanity";

export const impactStatisticType = defineType({
  name: "impactStatistic",
  type: "object",
  fields: [
    defineField({
      name: "quantity",
      type: "number",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "text",
      type: "string",
      validation: (rule) => rule.required(),
    }),
  ],
});
