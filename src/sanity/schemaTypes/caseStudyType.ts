import { DocumentTextIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const caseStudyType = defineType({
  name: "caseStudy",
  title: "Case Study",
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
      name: "author",
      type: "reference",
      to: { type: "author" },
    }),
    defineField({
      name: "mainImage",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alternative text",
          validation: (rule) => rule.required(),
        }),
      ],
    }),
    defineField({
      name: "services",
      type: "array",
      of: [defineArrayMember({ type: "reference", to: { type: "service" } })],
    }),
    defineField({
      name: "publishedAt",
      type: "datetime",
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
      name: "relatedCaseStudies",
      type: "array",
      of: [{ type: "reference", to: { type: "caseStudy" } }],
    }),
  ],
  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author && `by ${author}` };
    },
  },
});
