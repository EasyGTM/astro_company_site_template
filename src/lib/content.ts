import { getCollection, type CollectionEntry } from "astro:content";

type OrderedEntry = {
  data: {
    order?: number;
    listing_order?: number;
    date?: Date;
    featured?: boolean;
  };
};

const byOrder = <T extends OrderedEntry>(items: T[]) =>
  [...items].sort((a, b) => (a.data.order ?? 999) - (b.data.order ?? 999));

const byDate = <T extends OrderedEntry>(items: T[]) =>
  [...items].sort((a, b) => {
    const dateDiff =
      (b.data.date?.valueOf() ?? 0) - (a.data.date?.valueOf() ?? 0);

    if (dateDiff !== 0) {
      return dateDiff;
    }

    return (a.data.listing_order ?? 999) - (b.data.listing_order ?? 999);
  });

export async function getServices() {
  return byOrder(await getCollection("services", ({ data }) => !data.draft));
}

export async function getFeaturedServices(limit = 3) {
  const services = await getServices();
  return services.filter((service) => service.data.featured).slice(0, limit);
}

export async function getWork() {
  return byOrder(await getCollection("work", ({ data }) => !data.draft));
}

export async function getFeaturedWork(limit = 3) {
  const work = await getWork();
  return work.filter((entry) => entry.data.featured).slice(0, limit);
}

export async function getInsights() {
  return byDate(await getCollection("insights", ({ data }) => !data.draft));
}

export async function getFeaturedInsights(limit = 3) {
  const insights = await getInsights();
  return insights.filter((entry) => entry.data.featured).slice(0, limit);
}

export async function getPage(id: string) {
  const pages = await getCollection("pages", ({ data }) => !data.draft);
  return pages.find((page) => page.id === id);
}

export type ServiceEntry = CollectionEntry<"services">;
export type WorkEntry = CollectionEntry<"work">;
export type InsightEntry = CollectionEntry<"insights">;
