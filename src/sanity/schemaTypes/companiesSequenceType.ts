import { TextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const companiesSequenceType = defineType({
  name: "companiesSequence",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "companies",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "trustedCompany" }],
        },
      ],
    }),
  ],
  icon: TextIcon,
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title,
        media: TextIcon,
      };
    },
  },
});
