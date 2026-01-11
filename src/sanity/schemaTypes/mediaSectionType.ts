import { TextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";
import { sectionBaseFields } from "./sectionBaseFields";

export const mediaSectionType = defineType({
  name: "mediaSection",
  type: "object",
  fields: [
    ...sectionBaseFields,
    defineField({
      name: "media",
      type: "array",
      of: [{ type: "reference", to: { type: "media" } }],
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
        subtitle: `Media ${hide ? "(hidden)" : ""}`,
        media: media ?? TextIcon,
      };
    },
  },
});
