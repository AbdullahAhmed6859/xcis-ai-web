import { TextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";
import { sectionBaseFields } from "./sectionBaseFields";

export const servicesSectionType = defineType({
  name: "servicesSection",
  type: "object",
  fields: [
    ...sectionBaseFields,
    defineField({
      name: "services",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "service" }],
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
        subtitle: `Services ${hide ? "(hidden)" : ""}`,
        media: media ?? TextIcon,
      };
    },
  },
});
