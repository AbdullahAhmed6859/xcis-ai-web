import { TextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";
import { sectionBaseFields } from "./sectionBaseFields";

export const reviewsSectionType = defineType({
  name: "reviewsSection",
  type: "object",
  fields: [
    ...sectionBaseFields,
    defineField({
      name: "reviews",
      type: "array",
      of: [{ type: "reference", to: { type: "review" } }],
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
        subtitle: `Reviews ${hide ? "(hidden)" : ""}`,
        media: media ?? TextIcon,
      };
    },
  },
});
