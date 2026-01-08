import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Blog")
    .items([
      S.documentTypeListItem("category").title("Categories"),
      S.documentTypeListItem("author").title("Authors"),
      S.divider(),
      S.documentTypeListItem("page").title("Pages"),
      S.documentTypeListItem("faq").title("FAQs"),
      S.divider(),
      S.listItem()
        .id("siteSettings")
        .schemaType("siteSettings")
        .title("Site Settings")
        .child(
          S.editor()
            .id("siteSettings")
            .schemaType("siteSettings")
            .documentId("siteSettings")
        ),
      S.documentTypeListItem("redirect").title("Redirects"),
      S.divider(),
      S.documentTypeListItem("trustedCompany").title("Trusted Companies"),
      S.documentTypeListItem("caseStudy").title("Case Studies"),
      S.documentTypeListItem("media").title("Media"),
      S.documentTypeListItem("service").title("Services"),
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() &&
          ![
            "category",
            "author",
            "page",
            "faq",
            "siteSettings",
            "redirect",
            "trustedCompany",
            "caseStudy",
            "media",
            "service",
          ].includes(item.getId()!)
      ),
    ]);
