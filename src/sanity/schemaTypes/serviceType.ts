import { DocumentIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const serviceType = defineType({
  name: "service",
  title: "Service",
  type: "document",
  icon: DocumentIcon,
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
      name: "description",
      type: "text",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "icon",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "companies",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "trustedCompany" }],
        },
      ],
      validation: (rule) => rule.required(),
    }),
    // defineField({
    //   name: "relatedCaseStudies",
    //   type: "array",
    //   of: [
    //     {
    //       type: "reference",
    //       to: [{ type: "caseStudy" }],
    //     },
    //   ],
    //   validation: (rule) => rule.required(),
    // }),
    defineField({
      name: "faqs",
      title: "FAQs",
      type: "array",
      of: [{ type: "reference", to: [{ type: "faq" }] }],
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "slug.current",
    },
  },
});
