import { TextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";
import { sectionBaseFields } from "./sectionBaseFields";

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
