import { defineQuery } from "next-sanity";

const pageCommon = `
{
  "seo": {
    "title": coalesce(seo.title, title, ""),
    "description": coalesce(seo.description,  ""),
    "image": seo.image,
    "noIndex": seo.noIndex == true
  },
  "content": content[hide != true]{
    ...,
    // Logic for the Impact Section
    _type == "impactSection" => {
        "countMembers": count(*[_type == "teamMember"]),
        "teamMembers": teamMembers[defined(@)]->{
          name,
          image
        },
        statistics[]{
          heading,
          highlightedHeading,
          text
        }
      },
    // Logic for Case Studies
    _type == "caseStudiesSection" => {
      "caseStudies": caseStudies[defined(@)]->{
        title,
        excerpt,
        mainImage,
        slug,
        services[]->{
          title
        }
      }
    },
    _type == "servicesSection" => {
        "services": *[_type == "service"]
    },
    _type == "heroSection" => {
      "companies": companies[defined(@)]->{
        _key,
        name,
        website,
        logo
      }
    },
    _type == "reviewsSection" => {
      reviews[]->{
        name,
        image,
        reviewText,
        position
      }
    }
  }
}`;

export const PAGE_QUERY = defineQuery(`
*[_type == "page" && slug.current == $slug][0]${pageCommon}`);

export const PAGE_SLUGS_QUERY = defineQuery(`
  *[_type == "page" && defined(slug.current)]{ 
  "slug": slug.current
}`);

export const HOME_PAGE_QUERY = defineQuery(`
*[_id == "siteSettings"][0]{
  ...,
  homePage->${pageCommon}
}`);

// export const REDIRECTS_QUERY = defineQuery(`
// *[_type == "redirect" && isEnabled == true] {
//   source,
//   destination,
//   permanent
// }`);

export const OG_IMAGE_QUERY = defineQuery(`
*[_id == $id][0]{
  title,
  mainImage,
  "palette": mainImage.asset->metadata.palette
}`);

export const SITEMAP_QUERY = defineQuery(`
[*[_id == "siteSettings"][0].homePage->{
  "href": "/", 
  _updatedAt
}] | order(typeOrder asc, _updatedAt desc)
+
*[_type in ["page", "service", "caseStudy", "media"] && defined(slug.current)] {
  "href": select(
    _type == "page" => "/" + slug.current,
    _type == "service" => "/services/" + slug.current,
    _type == "caseStudy" => "/case-studies/" + slug.current,
    _type == "media" => "/media/" + slug.current,
    slug.current
  ),
  _updatedAt
} | order(typeOrder asc, _updatedAt desc)
`);

export const TRUSTED_COMPANIES_QUERY = defineQuery(`
*[_type == "trustedCompany"]{
  name,
  website,
  logo{
    alt,
    asset
  }
}`);

export const CASE_STUDIES_QUERY = defineQuery(`
*[_type == "caseStudy" && defined(slug.current)]|order(publishedAt desc)[0...12]{
  _id,
  title,
  slug,
  body,
  mainImage,
  publishedAt,
  "services": coalesce(
    services[]->{
      _id,
      slug,
      title
    },
    []
  ),
  author->{
    name,
    image
  }
}`);

export const CASE_STUDY_QUERY = defineQuery(`
*[_type == "caseStudy" && slug.current == $slug][0]{
  _id,
  title,
  body,
  mainImage,
  publishedAt,
  "services": coalesce(
    services[]->{
      _id,
      slug,
      title
    },
    []
  ),
  author->{
    name,
    image
  },
  relatedCaseStudies[]{
    _key, // required for drag and drop
    ...@->{_id, title, slug} // get fields from the referenced post
  }
}`);

export const CASE_STUDIES_SLUGS_QUERY =
  defineQuery(`*[_type == "caseStudy" && defined(slug.current)]{ 
  "slug": slug.current
}`);

export const MEDIA_QUERY =
  defineQuery(`*[_type == "media" && defined(slug.current)]|order(publishedAt desc)[0...12]{
  _id,
  title,
  slug,
  body,
  mainImage,
  publishedAt,
  "categories": coalesce(
    categories[]->{
      _id,
      slug,
      title
    },
    []
  ),
  author->{
    name,
    image
  }
}`);

export const MEDIUM_QUERY =
  defineQuery(`*[_type == "media" && slug.current == $slug][0]{
  _id,
  title,
  body,
  mainImage,
  publishedAt,
  "categories": coalesce(
    categories[]->{
      _id,
      slug,
      title
    },
    []
  ),
  author->{
    name,
    image
  },
  relatedMedia[]{
    _key, // required for drag and drop
    ...@->{_id, title, slug} // get fields from the referenced post
  }
}`);

export const MEDIA_SLUGS_QUERY =
  defineQuery(`*[_type == "media" && defined(slug.current)]{ 
  "slug": slug.current
}`);

export const SERVICES_QUERY = defineQuery(`
*[_type == "service"]{
  _id,
  slug,
  title,
}`);

export const SERVICE_QUERY = defineQuery(`
*[_type == "service" && slug.current == $slug][0]{
  title,
  description
}`);

export const SERVICES_SLUGS_QUERY =
  defineQuery(`*[_type == "service" && defined(slug.current)]{ 
  "slug": slug.current
}`);
