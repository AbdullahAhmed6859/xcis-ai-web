import { TextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";
import { sectionBaseFields } from "./sectionBaseFields";

export const impactCardsSectionType = defineType({
  name: "impactCardsSection",
  type: "object",
  fields: [
    ...sectionBaseFields,
    defineField({
      name: "statistics",
      type: "array",
      of: [{ type: "impactStatistic" }],
      validation: (rule) => rule.required().max(6),
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
        subtitle: `Impact Cards ${hide ? "(hidden)" : ""}`,
        media: media ?? TextIcon,
      };
    },
  },
});
