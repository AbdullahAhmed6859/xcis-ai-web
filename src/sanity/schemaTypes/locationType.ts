import { MarkerIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const locationType = defineType({
  name: "location",
  title: "Location",
  type: "document",
  icon: MarkerIcon,
  fields: [
    defineField({
      name: "name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "name",
      },
      validation: (rule) => rule.required(),
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
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
});
