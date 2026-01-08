import { TextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const servicesSectionType = defineType({
  name: "servicesSection",
  type: "object",
  fields: [
    defineField({
      name: "heading",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "text",
      type: "string",
      validation: (rule) => rule.required(),
    }),
  ],
  icon: TextIcon,
  preview: {
    select: {
      title: "heading",
      media: "image",
    },
    prepare({ title, media }) {
      return {
        title,
        subtitle: "Services",
        media: media ?? TextIcon,
      };
    },
  },
});
