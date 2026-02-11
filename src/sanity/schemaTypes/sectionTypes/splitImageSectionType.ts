import { BlockContentIcon, TextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";
import { sectionBaseFields } from "./sectionBaseFields";

export const splitImageSectionType = defineType({
  name: "splitImageSection",
  type: "object",
  fields: [
    ...sectionBaseFields,
    defineField({
      name: "orientation",
      type: "string",
      options: {
        list: [
          { value: "imageLeft", title: "Image Left" },
          { value: "imageRight", title: "Image Right" },
        ],
      },
    }),
    defineField({
      name: "image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
  ],
  icon: BlockContentIcon,
  preview: {
    select: {
      title: "heading",
      media: "image",
      hide: "hide",
    },
    prepare({ title, media, hide }) {
      return {
        title,
        subtitle: `Split Image ${hide ? "(hidden)" : ""}`,
        media: media ?? TextIcon,
      };
    },
  },
});
