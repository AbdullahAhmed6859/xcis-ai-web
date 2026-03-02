import { BlockContentIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";
import { sectionBaseFields } from "./sectionBaseFields";

export const howWeEngageSectionType = defineType({
  name: "howWeEngageSection",
  title: "How We Engage Section",
  type: "object",
  fields: [
    // Reuse standard fields for the top heading "How We Engage" and the description text below it
    ...sectionBaseFields,

    // The specific steps (Access -> Build -> Operate)
    defineField({
      name: "steps",
      title: "Engagement Steps",
      description:
        "Add the steps for the process (e.g., Access, Build, Operate).",
      type: "array",
      of: [
        {
          type: "object",
          name: "step",
          fields: [
            defineField({
              name: "title",
              title: "Step Title",
              type: "string",
              placeholder: "e.g. Access",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
              rows: 3,
              placeholder: "Description of this phase...",
            }),
          ],
          preview: {
            select: {
              title: "title",
              subtitle: "description",
            },
          },
        },
      ],
      // Limit to 3 if you want to strictly enforce the design in the image
      validation: (rule) => rule.required().min(1).max(3),
    }),
  ],
  icon: BlockContentIcon,
  preview: {
    select: {
      title: "heading",
      steps: "steps",
    },
    prepare({ title, steps }) {
      const stepNames =
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        steps?.map((s: any) => s.title).join(" → ") || "No steps";
      return {
        title: title || "How We Engage",
        subtitle: stepNames,
        media: BlockContentIcon,
      };
    },
  },
});
