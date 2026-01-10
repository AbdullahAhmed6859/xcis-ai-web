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
      validation: (rule) => rule.required().length(4),
    }),
    defineField({
      name: "experience",
      type: "impactStatistic",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "teamMembers",
      type: "array",
      of: [{ type: "reference", to: [{ type: "teamMember" }] }],
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
        subtitle: `Impact ${hide ? "(hidden)" : ""}`,
        media: media ?? TextIcon,
      };
    },
  },
});
