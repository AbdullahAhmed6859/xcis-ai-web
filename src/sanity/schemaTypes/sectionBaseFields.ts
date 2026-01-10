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
    name: "height",
    title: "Height",
    type: "string",
    options: {
      list: [
        { title: "Full", value: "full" },
        { title: "Screen", value: "screen" },
      ],
    },
    validation: (Rule) => Rule.required(),
    initialValue: "full",
  }),
  defineField({
    name: "backgroundColor",
    title: "Background Color",
    type: "string",
    options: {
      list: [
        { title: "White", value: "white" },
        { title: "Blue", value: "blue" },
        { title: "Gradient", value: "gradient" },
      ],
    },
    validation: (Rule) => Rule.required(),
    initialValue: "white",
  }),
  defineField({
    name: "paddingTop",
    title: "Padding Top",
    type: "string",
    options: {
      list: [
        { title: "None", value: "none" },
        { title: "Single", value: "single" },
        { title: "Double", value: "double" },
      ],
    },
    validation: (Rule) => Rule.required(),
    initialValue: "single",
  }),
  defineField({
    name: "paddingBottom",
    title: "Padding Bottom",
    type: "string",
    options: {
      list: [
        { title: "None", value: "none" },
        { title: "Single", value: "single" },
        { title: "Double", value: "double" },
      ],
    },
    validation: (Rule) => Rule.required(),
    initialValue: "single",
  }),
  defineField({
    name: "hide",
    title: "Hide section",
    description: "Hide this section from the website",
    type: "boolean",
    initialValue: false,
  }),
];
