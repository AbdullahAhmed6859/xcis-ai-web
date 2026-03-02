import { type SchemaTypeDefinition } from "sanity";
import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { pageBuilderType } from "./pageBuilderType";
import { pageType } from "./pageType";
import { featuresType } from "./featuresType";
import { siteSettingsType } from "./siteSettingsType";
import { seoType } from "./seoType";
import { trustedCompanyType } from "./trustedCompanyType";
import { reviewType } from "./reviewType";
import { caseStudyType } from "./caseStudyType";
import { mediaType } from "./mediaType";
import { serviceType } from "./serviceType";
import { impactStatisticType } from "./impactStatisticType";
import { locationType } from "./locationType";
import { teamMemberType } from "./teamMemberType";
import { teamType } from "./teamType";
import { certificationType } from "./certificationType";
import { jobType } from "./jobType";
import { faqType } from "./faqType";
import { trainingType } from "./trainingType";
import {
  caseStudiesSectionType,
  impactSectionType,
  impactCardsSectionType,
  structuredStepsSectionType,
  trainingsSectionType,
  mediaSectionType,
  locationsSectionType,
  reviewsSectionType,
  carouselSectionType,
  allCaseStudiesSectionType,
  allMediaSectionType,
  allTeamMembersSectionType,
  contactFormSectionType,
  companiesSectionType,
  certificationsSectionType,
  companySlideshowSectionType,
  ctaSectionType,
  heroSectionType,
  servicesSectionType,
  splitImageSectionType,
  allTrainingsSectionType,
  allJobsSectionType,
  allTeamSectionType,
  howWeEngageSectionType,
} from "./sectionTypes";
import { jobLoactionType } from "./jobLocationType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    categoryType,
    pageType,
    pageBuilderType,
    featuresType,
    splitImageSectionType,
    siteSettingsType,
    seoType,
    trustedCompanyType,
    reviewType,
    caseStudyType,
    mediaType,
    serviceType,
    locationType,
    impactStatisticType,
    heroSectionType,
    servicesSectionType,
    caseStudiesSectionType,
    impactSectionType,
    impactCardsSectionType,
    structuredStepsSectionType,
    trainingsSectionType,
    mediaSectionType,
    locationsSectionType,
    reviewsSectionType,
    carouselSectionType,
    allCaseStudiesSectionType,
    allMediaSectionType,
    allTeamMembersSectionType,
    allTeamSectionType,
    allJobsSectionType,
    allTrainingsSectionType,
    teamMemberType,
    teamType,
    contactFormSectionType,
    companiesSectionType,
    certificationType,
    certificationsSectionType,
    companySlideshowSectionType,
    ctaSectionType,
    jobType,
    jobLoactionType,
    faqType,
    trainingType,
    howWeEngageSectionType
  ],
};
