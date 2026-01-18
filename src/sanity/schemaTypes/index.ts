import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { authorType } from "./authorType";
// import { faqsType } from "./faqsType";
// import { faqType } from "./faqType";
import { heroSectionType } from "./heroSectionType";
import { pageBuilderType } from "./pageBuilderType";
import { pageType } from "./pageType";
import { splitImageType } from "./splitImageType";
import { featuresType } from "./featuresType";
import { siteSettingsType } from "./siteSettingsType";
import { seoType } from "./seoType";
// import { redirectType } from "./redirectType";
import { trustedCompanyType } from "./trustedCompanyType";
import { reviewType } from "./reviewType";
import { caseStudyType } from "./caseStudyType";
import { mediaType } from "./mediaType";
import { serviceType } from "./serviceType";
import { servicesSectionType } from "./servicesSectionType";
import { caseStudiesSectionType } from "./caseStudiesSectionType";
import { impactSectionType } from "./impactSectionType";
import { impactStatisticType } from "./impactStatisticType";
import { structuredStepsSectionType } from "./structuredStepsSectionType";
import { mediaSectionType } from "./mediaSectionType";
import { locationType } from "./locationType";
import { locationsSectionType } from "./locationsSectionType";
import { reviewsSectionType } from "./reviewsSectionType";
import { carouselSectionType } from "./carouselSectionType";
import { trainingsSectionType } from "./trainingsSectionType";
import { teamMemberType } from "./teamMemberType";
import { allCaseStudiesSectionType } from "./allCaseStudiesSectionType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    categoryType,
    authorType,
    pageType,
    pageBuilderType,
    // faqType,
    // faqsType,
    featuresType,
    splitImageType,
    siteSettingsType,
    seoType,
    // redirectType,
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
    structuredStepsSectionType,
    trainingsSectionType,
    mediaSectionType,
    locationsSectionType,
    reviewsSectionType,
    carouselSectionType,
    allCaseStudiesSectionType,
    teamMemberType,
  ],
};
