import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      // ───────────── Editorial Content ─────────────
      S.documentTypeListItem("media").title("Media"),
      S.documentTypeListItem("caseStudy").title("Case Studies"),
      S.documentTypeListItem("page").title("Pages"),
      S.documentTypeListItem("service").title("Services"),
      S.divider(),

      // ───────────── Taxonomy & People ─────────────
      S.documentTypeListItem("category").title("Categories"),
      S.documentTypeListItem("teamMember").title("Team Members"),
      S.documentTypeListItem("team").title("Teams"),
      S.documentTypeListItem("job").title("Jobs"),
      S.divider(),

      // ───────────── Business Content ─────────────
      S.documentTypeListItem("trustedCompany").title("Trusted Companies"),
      S.documentTypeListItem("review").title("Reviews"),
      S.documentTypeListItem("location").title("Locations"),
      S.documentTypeListItem("certification").title("Certifications"),
      S.documentTypeListItem("faq").title("FaQs"),

      S.divider(),

      // ───────────── Configuration ─────────────
      S.listItem()
        .id("siteSettings")
        .schemaType("siteSettings")
        .title("Site Settings")
        .child(
          S.editor()
            .id("siteSettings")
            .schemaType("siteSettings")
            .documentId("siteSettings"),
        ),

      S.divider(),

      // ───────────── Everything Else (auto) ─────────────
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() &&
          ![
            "media",
            "caseStudy",
            "page",
            "category",
            "author",
            "service",
            "trustedCompany",
            "review",
            "location",
            "siteSettings",
            "teamMember",
            "team",
            "job",
            "certification",
            "faq",
          ].includes(item.getId()!),
      ),
    ]);
