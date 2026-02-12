import { TextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";
import { sectionBaseFields } from "./sectionBaseFields";

export const companySlideshowSectionType = defineType({
  name: "companySlideshowSection",
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
        subtitle: `Company Slideshow ${hide ? "(hidden)" : ""}`,
        media: media ?? TextIcon,
      };
    },
  },
});
