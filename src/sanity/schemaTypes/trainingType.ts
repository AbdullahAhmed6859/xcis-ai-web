import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const trainingType = defineType({
  name: "training",
  title: "Trainings",
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
    // defineField({
    //   name: "services",
    //   type: "array",
    //   of: [defineArrayMember({ type: "reference", to: { type: "service" } })],
    //   validation: (rule) => rule.required(),
    // }),
    defineField({
      name: "publishedAt",
      type: "datetime",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "excerpt",
      type: "text",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "body",
      type: "blockContent",
    }),
    defineField({
      name: "relatedTrainings",
      type: "array",
      of: [{ type: "reference", to: { type: "training" } }],
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "excerpt",
      media: "mainImage",
    },
    prepare(selection) {
      return { ...selection };
    },
  },
});
