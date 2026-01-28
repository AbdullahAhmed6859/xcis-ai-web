import { TextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";
import { sectionBaseFields } from "./sectionBaseFields";
import { uniqueFilter } from "../lib/unique-filter";

export const allCaseStudiesSectionType = defineType({
  name: "allCaseStudiesSection",
  type: "object",
  fields: [
    ...sectionBaseFields,
    defineField({
      name: "services",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "service" }],
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
        subtitle: `Case Studies ${hide ? "(hidden)" : ""}`,
        media: media ?? TextIcon,
      };
    },
  },
});
