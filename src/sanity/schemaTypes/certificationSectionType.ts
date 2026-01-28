import { TextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";
import { sectionBaseFields } from "./sectionBaseFields";
import { uniqueFilter } from "../lib/unique-filter";

export const certificationsSectionType = defineType({
  name: "certificationsSection",
  type: "object",
  fields: [
    ...sectionBaseFields,
    defineField({
      name: "certifications",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "certification" }],
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
        subtitle: `Certifications ${hide ? "(hidden)" : ""}`,
        media: media ?? TextIcon,
      };
    },
  },
});
