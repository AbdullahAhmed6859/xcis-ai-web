import { TextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";
import { sectionBaseFields } from "./sectionBaseFields";

export const impactSectionType = defineType({
  name: "impactSection",
  type: "object",
  fields: [
    ...sectionBaseFields,
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
      hide: "hide",
    },
    prepare({ title, media, hide }) {
      return {
        title,
        subtitle: `Services ${hide ? "(hidden)" : ""}`,
        media: media ?? TextIcon,
      };
    },
  },
});
