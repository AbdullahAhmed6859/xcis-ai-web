import { defineType } from "sanity";

export const jobLoactionType = defineType({
  name: "jobLocation",
  title: "Job Location",
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
      validation: (rule) => rule.required(),
    },
  ],
});
