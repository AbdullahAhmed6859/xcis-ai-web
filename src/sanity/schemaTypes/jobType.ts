import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const jobType = defineType({
  name: "job",
  title: "Job",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "department",
      title: "Department",
      type: "reference",
      to: [{ type: "team" }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "postedAt",
      type: "datetime",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "schedule",
      title: "Schedule",
      type: "string",
      options: {
        list: ["Full Time", "Part Time", "Contract", "Internship"],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "location",
      type: "reference",
      to: [{ type: "jobLocation" }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      type: "blockContent",
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "department.title",
    },
    prepare(selection) {
      const { title, subtitle } = selection;
      return {
        title: title,
        subtitle: subtitle || "No department",
        media: DocumentTextIcon,
      };
    },
  },
});
