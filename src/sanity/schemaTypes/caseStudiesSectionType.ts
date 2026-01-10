import { TextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";
import { sectionBaseFields } from "./sectionBaseFields";

export const caseStudiesSectionType = defineType({
  name: "caseStudiesSection",
  type: "object",
  fields: [
    ...sectionBaseFields,
    defineField({
      name: "caseStudies",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "caseStudy" }],
          options: {
            filter: ({ parent }) => {
              // Cast parent as an array of objects with a _ref property
              const existingItems = parent as
                | Array<{ _ref?: string }>
                | undefined;

              // Safely extract the IDs
              const selectedIds =
                existingItems
                  ?.map((item) => item._ref)
                  .filter((id): id is string => !!id) || [];

              return {
                filter: "!(_id in $selectedIds)",
                params: {
                  selectedIds,
                },
              };
            },
          },
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
        subtitle: `Case Studies ${hide ? "(hidden)" : ""}`,
        media: media ?? TextIcon,
      };
    },
  },
});
