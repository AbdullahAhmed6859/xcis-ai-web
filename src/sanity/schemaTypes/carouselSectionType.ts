import { TextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";
import { sectionBaseFields } from "./sectionBaseFields";

export const carouselSectionType = defineType({
  name: "carouselSection",
  type: "object",
  fields: [
    ...sectionBaseFields,
    defineField({
      name: "cards",
      type: "array",
      validation: (rule) => rule.required(),
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "heading",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "text",
              type: "text",
              validation: (rule) => rule.required(),
            }),
          ],
        },
      ],
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
        subtitle: `Carousel ${hide ? "(hidden)" : ""}`,
        media: media ?? TextIcon,
      };
    },
  },
});
