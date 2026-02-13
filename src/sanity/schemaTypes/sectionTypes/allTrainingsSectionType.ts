import { TextIcon } from "@sanity/icons";
import { defineType } from "sanity";
import { sectionBaseFields } from "./sectionBaseFields";

export const allTrainingsSectionType = defineType({
  name: "allTrainingsSection",
  type: "object",
  fields: [...sectionBaseFields],
  icon: TextIcon,
  preview: {
    select: {
      title: "heading",
      media: "image",
      hide: "hide",
    },
    prepare({ title, media, hide }) {
      return {
        title,
        subtitle: `Trainings ${hide ? "(hidden)" : ""}`,
        media: media ?? TextIcon,
      };
    },
  },
});
