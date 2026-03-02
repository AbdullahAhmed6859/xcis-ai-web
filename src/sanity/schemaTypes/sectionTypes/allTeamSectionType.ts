// allTeamMembersSectionType.ts
import { TextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";
import { sectionBaseFields } from "./sectionBaseFields";

export const allTeamSectionType = defineType({
  name: "allTeamSection",
  type: "object",
  fields: [
    ...sectionBaseFields,
    // NEW: Allow creating groups with specific member lists
    defineField({
      name: "teamGroups",
      title: "Team Groups (Manual Order)",
      description:
        "Create a tab for each team and drag-and-drop members to set their order.",
      type: "array",
      of: [
        {
          type: "object",
          name: "teamGroup",
          fields: [
            defineField({
              name: "team",
              title: "Team Category",
              type: "reference",
              to: [{ type: "team" }],
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "members",
              title: "Members",
              description:
                "Add members here. The order they appear here is the order they will show on the site.",
              type: "array",
              of: [{ type: "reference", to: [{ type: "teamMember" }] }],
            }),
          ],
          preview: {
            select: {
              title: "team.title",
              // CHANGE: Select the raw array instead of .length
              members: "members",
            },
            prepare({ title, members }) {
              // CHANGE: Calculate length here using optional chaining
              const count = members ? Object.keys(members).length : 0;

              return {
                title: title || "Untitled Group",
                subtitle: `${count} members configured`,
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
        title: title || "Team Section",
        subtitle: `All Team ${hide ? "(hidden)" : ""}`,
        media: media ?? TextIcon,
      };
    },
  },
});
