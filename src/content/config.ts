import { defineCollection, z } from "astro:content";

const leetcode = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    difficulty: z.string(),
    topics: z.array(z.string()),
  }),
});

const meCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    pubDate: z.date().optional(),
  }),
});

export const collections = { leetcode, me: meCollection };
