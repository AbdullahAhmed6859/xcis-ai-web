import { defineType, defineArrayMember } from "sanity";

export const pageBuilderType = defineType({
  name: "pageBuilder",
  type: "array",
  of: [
    defineArrayMember({ type: "heroSection" }),
    defineArrayMember({ type: "servicesSection" }),
    defineArrayMember({ type: "caseStudiesSection" }),
    defineArrayMember({ type: "mediaSection" }),
    defineArrayMember({ type: "locationsSection" }),
    defineArrayMember({ type: "reviewsSection" }),
    defineArrayMember({ type: "carouselSection" }),
    defineArrayMember({ type: "impactSection" }),
    defineArrayMember({ type: "structuredStepsSection" }),
    defineArrayMember({ type: "trainingsSection" }),
    defineArrayMember({ type: "allCaseStudiesSection" }),
  ],
  // options: {
  //   insertMenu: {
  //     views: [
  //       {
  //         name: "grid",
  //         previewImageUrl: (schemaType) => `/block-previews/${schemaType}.png`,
  //       },
  //     ],
  //   },
  // },
});
