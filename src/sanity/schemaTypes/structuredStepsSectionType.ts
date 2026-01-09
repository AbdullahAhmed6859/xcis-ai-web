import { TextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";
import { sectionBaseFields } from "./sectionBaseFields";

export const structuredStepsSectionType = defineType({
  name: "structuredStepsSection",
  type: "object",
  fields: [
    ...sectionBaseFields,
    defineField({
      name: "steps",
      type: "array",
      of: [
        {
          name: "step",
          type: "object",
          fields: [
            defineField({
              name: "heading",
              type: "string",
            }),
            defineField({
              name: "text",
              type: "text",
            }),
          ],
          preview: {
            select: {
              title: "heading",
            },
            prepare({ title }) {
              return {
                title,
              };
            },
          },
        },
      ],
    }),
    // defineField({
    //   name: "mainImage",
    //   type: "image",
    //   options: {
    //     hotspot: true,
    //   },
    //   validation: (rule) => rule.required(),
    //   fields: [
    //     defineField({
    //       name: "alt",
    //       type: "string",
    //       title: "Alternative text",
    //       validation: (rule) => rule.required(),
    //     }),
    //   ],
    // }),
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
        subtitle: `Structured Steps ${hide ? "(hidden)" : ""}`,
        media: media ?? TextIcon,
      };
    },
  },
});
