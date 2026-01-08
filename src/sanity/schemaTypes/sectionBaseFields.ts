// sanity/schema/shared/sectionBaseFields.ts
import { defineField } from "sanity";

export const sectionBaseFields = [
  defineField({
    name: "heading",
    title: "Section title",
    description: "Main heading for this section",
    type: "string",
    validation: (rule) => rule.required(),
  }),
  defineField({
    name: "text",
    title: "Section description",
    description: "Short descriptive text for this section",
    type: "string",
    validation: (rule) => rule.required(),
  }),
  defineField({
    name: "hide",
    title: "Hide section",
    description: "Hide this section from the website",
    type: "boolean",
    initialValue: false,
  }),
];
