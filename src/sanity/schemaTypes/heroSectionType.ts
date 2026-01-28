import { TextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";
import { sectionBaseFields } from "./sectionBaseFields";
import { uniqueFilter } from "../lib/unique-filter";

export const heroSectionType = defineType({
  name: "heroSection",
  type: "object",
  fields: [
    ...sectionBaseFields,
    defineField({
      name: "companies",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "trustedCompany" }],
          options: {
            filter: uniqueFilter,
          },
        },
      ],
    }),
    defineField({
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
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
        subtitle: `Hero ${hide ? "(hidden)" : ""}`,
        media: media ?? TextIcon,
      };
    },
  },
});
