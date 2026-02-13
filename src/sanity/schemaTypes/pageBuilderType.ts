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
    defineArrayMember({ type: "allMediaSection" }),
    defineArrayMember({ type: "allTeamMembersSection" }),
    defineArrayMember({ type: "contactFormSection" }),
    defineArrayMember({ type: "splitImageSection" }),
    defineArrayMember({ type: "companiesSection" }),
    defineArrayMember({ type: "certificationsSection" }),
    defineArrayMember({ type: "companySlideshowSection" }),
    defineArrayMember({ type: "impactCardsSection" }),
    defineArrayMember({ type: "ctaSection" }),
    defineArrayMember({ type: "allJobsSection" }),
    defineArrayMember({ type: "allTrainingsSection" }),
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
