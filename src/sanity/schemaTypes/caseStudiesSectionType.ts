import { TextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";
import { sectionBaseFields } from "./sectionBaseFields";
import { uniqueFilter } from "../lib/unique-filter";

export const caseStudiesSectionType = defineType({
  name: "caseStudiesSection",
  type: "object",
  fields: [
    ...sectionBaseFields,
    defineField({
      name: "caseStudies",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "caseStudy" }],
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
