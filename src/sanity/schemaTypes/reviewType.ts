import { UserIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const reviewType = defineType({
  name: "review",
  title: "Review",
  type: "document",
  icon: UserIcon,
  fields: [
    defineField({
      name: "reviewText",
      title: "Review Text",
      type: "text",
    }),
    defineField({
      name: "image",
      title: "Reviewer Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "name",
      title: "Reviewer Name",
      type: "string",
    }),
    defineField({
      name: "position",
      title: "Reviewer Position",
      type: "string",
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "reviewText",
      media: "image",
    },
  },
});
