import { TextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";
import { sectionBaseFields } from "./sectionBaseFields";

export const caseStudiesSectionType = defineType({
  name: "caseStudiesSection",
  type: "object",
  fields: [
    ...sectionBaseFields,
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
