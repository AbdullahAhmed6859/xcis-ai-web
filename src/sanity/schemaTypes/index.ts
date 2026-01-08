import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { authorType } from "./authorType";
import { faqsType } from "./faqsType";
import { faqType } from "./faqType";
import { heroSectionType } from "./heroSectionType";
import { pageBuilderType } from "./pageBuilderType";
import { pageType } from "./pageType";
import { splitImageType } from "./splitImageType";
import { featuresType } from "./featuresType";
import { siteSettingsType } from "./siteSettingsType";
import { seoType } from "./seoType";
import { redirectType } from "./redirectType";
import { trustedCompanyType } from "./trustedCompanyType";
import { caseStudyType } from "./caseStudyType";
import { mediaType } from "./mediaType";
import { serviceType } from "./serviceType";
import { servicesSectionType } from "./servicesSectionType";
import { caseStudiesSectionType } from "./caseStudiesSection";
import { impactSectionType } from "./impactSectionType";
import { impactStatisticType } from "./impactStatisticType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    categoryType,
    authorType,
    pageType,
    pageBuilderType,
    faqType,
    faqsType,
    featuresType,
    splitImageType,
    siteSettingsType,
    seoType,
    redirectType,
    trustedCompanyType,
    caseStudyType,
    mediaType,
    serviceType,
    impactStatisticType,
    heroSectionType,
    servicesSectionType,
    caseStudiesSectionType,
    impactSectionType,
  ],
};
