import { TextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";
import { sectionBaseFields } from "./sectionBaseFields";

export const locationsSectionType = defineType({
  name: "locationsSection",
  type: "object",
  fields: [
    ...sectionBaseFields,
    defineField({
      name: "locations",
      type: "array",
      of: [{ type: "reference", to: { type: "location" } }],
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
        subtitle: `Locations ${hide ? "(hidden)" : ""}`,
        media: media ?? TextIcon,
      };
    },
  },
});
