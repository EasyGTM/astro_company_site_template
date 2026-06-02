import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const seoFields = {
  meta_title: z.string().optional(),
  description: z.string(),
  canonical: z.string().optional(),
  image: z.string().optional(),
  draft: z.boolean().default(false),
  noindex: z.boolean().optional(),
};

const servicesCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/content/services" }),
  schema: z.object({
    title: z.string(),
    short_title: z.string(),
    tagline: z.string(),
    summary: z.string(),
    category: z.string().default("Service"),
    timeline: z.string(),
    engagement_model: z.string(),
    order: z.number(),
    featured: z.boolean().default(false),
    ideal_for: z.array(z.string()).default([]),
    deliverables: z.array(z.string()).default([]),
    outcomes: z.array(z.string()).default([]),
    ...seoFields,
  }),
});

const workCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/content/work" }),
  schema: z.object({
    title: z.string(),
    client: z.string(),
    sector: z.string(),
    duration: z.string(),
    engagement: z.string(),
    order: z.number(),
    featured: z.boolean().default(false),
    services: z.array(z.string()).default([]),
    results: z.array(z.string()).default([]),
    quote: z.string().optional(),
    quote_author: z.string().optional(),
    ...seoFields,
  }),
});

const insightsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/content/insights" }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string(),
    date: z.date(),
    image: z.string().optional(),
    author: z.string().default("Skynet"),
    categories: z.array(z.string()).default(["Performance Marketing"]),
    tags: z.array(z.string()).default(["Services Marketing"]),
    cluster: z.string().optional(),
    canonical: z.string().optional(),
    listing_order: z.number().optional(),
    featured: z.boolean().default(false),
    format: z
      .enum(["article", "guide", "checklist", "report"])
      .default("article"),
    format_label: z.string().optional(),
    draft: z.boolean().default(false),
    noindex: z.boolean().optional(),
  }),
});

const pagesCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/content/pages" }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string(),
    kicker: z.string().optional(),
    hero_title: z.string().optional(),
    hero_intro: z.string().optional(),
    image: z.string().optional(),
    canonical: z.string().optional(),
    draft: z.boolean().default(false),
    noindex: z.boolean().optional(),
  }),
});

export const collections = {
  services: servicesCollection,
  work: workCollection,
  insights: insightsCollection,
  pages: pagesCollection,
};
