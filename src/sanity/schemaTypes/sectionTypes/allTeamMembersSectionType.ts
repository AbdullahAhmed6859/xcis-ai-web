import { TextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";
import { sectionBaseFields } from "./sectionBaseFields";

export const allTeamMembersSectionType = defineType({
  name: "allTeamMembersSection",
  type: "object",
  fields: [
    ...sectionBaseFields,
    defineField({
      name: "teams",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "team" }],
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
        subtitle: `Team Members ${hide ? "(hidden)" : ""}`,
        media: media ?? TextIcon,
      };
    },
  },
});
