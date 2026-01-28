import { TextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";
import { sectionBaseFields } from "./sectionBaseFields";
import { uniqueFilter } from "../lib/unique-filter";

export const companiesSectionType = defineType({
  name: "companiesSection",
  type: "object",
  fields: [
    ...sectionBaseFields,
    defineField({
      name: "companies",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "trustedCompany" }],
          options: {
            filter: uniqueFilter,
          },
        },
      ],
      validation: (rule) => rule.required(),
    }),
  ],
  icon: TextIcon,
  preview: {
    select: {
      title: "heading",
      media: "image",
      hide: "hide",
    },
    prepare({ title, media, hide }) {
      return {
        title,
        subtitle: `Companies ${hide ? "(hidden)" : ""}`,
        media: media ?? TextIcon,
      };
    },
  },
});
