import site from "@/data/site.json";

export { site };

export function absoluteUrl(path = "/") {
  return new URL(path, site.site.base_url).toString();
}

export function buildTitle(title?: string, metaTitle?: string) {
  if (metaTitle) {
    return metaTitle;
  }

  if (!title) {
    return site.seo.default_title;
  }

  return site.seo.title_template.replace("%s", title);
}

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.company.name,
    legalName: site.company.legal_name,
    url: site.site.base_url,
    logo: absoluteUrl(site.site.logo),
    description: site.company.description,
    email: site.company.email,
    telephone: site.company.phone,
    foundingDate: site.company.founding_date,
    areaServed: site.company.areas_served,
    sameAs: site.company.same_as,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: site.company.email,
      telephone: site.company.phone,
      availableLanguage: "English",
    },
  };
}

export function buildWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.site.name,
    url: site.site.base_url,
    description: site.seo.default_description,
    inLanguage: site.site.locale,
  };
}

export function buildBreadcrumbSchema(
  items: Array<{ name: string; item: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((entry, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: entry.name,
      item: entry.item,
    })),
  };
}

export function buildRobotsTxt() {
  const robotsRules = site.seo.robots_txt?.rules ?? [];
  const sitemapEntries = site.seo.robots_txt?.sitemaps ?? [
    "/sitemap-index.xml",
  ];
  const ruleLines = robotsRules.flatMap((rule, index) => {
    const lines = [`User-agent: ${rule.userAgent}`];

    (rule.allow ?? []).forEach((entry) => {
      lines.push(`Allow: ${entry}`);
    });

    (rule.disallow ?? []).forEach((entry) => {
      lines.push(`Disallow: ${entry}`);
    });

    if (index < robotsRules.length - 1) {
      lines.push("");
    }

    return lines;
  });

  return [
    ...ruleLines,
    "",
    ...sitemapEntries.map((entry) => `Sitemap: ${absoluteUrl(entry)}`),
  ].join("\n");
}

export function buildLlmsTxt() {
  const keyRoutes = site.llms?.routes ?? [];
  const retrievalNotes = site.llms?.notes ?? [];
  const llmsPurpose =
    site.llms?.purpose ||
    `${site.company.name} uses this site to explain its services and capture new inquiries.`;

  return [
    `# ${site.site.name}`,
    "",
    `> ${site.company.tagline}`,
    "",
    site.company.description,
    "",
    "## Website purpose",
    llmsPurpose,
    "",
    "## Primary routes",
    ...keyRoutes.map(({ label, url }) => `- ${label}: ${absoluteUrl(url)}`),
    "",
    "## Contact",
    `- Email: ${site.company.email}`,
    `- Phone: ${site.company.phone}`,
    `- Contact page: ${absoluteUrl("/contact")}`,
    "",
    "## AI retrieval notes",
    ...retrievalNotes.map((note) => `- ${note}`),
  ].join("\n");
}
