// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content"
// 2. Define your collection(s)
const blogCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.date(),
      tags: z.array(z.string()),
      abstract: z.string(),
      display_abstract: z.boolean().default(false),
      display_cover: z.boolean().default(false),
      display_toc: z.boolean().default(false),
      image: image(),
      image_alt: z.string().default("Cover image"),
      image_caption: z.string().default(""),
      image_source: z.string().optional(),
      icon: z.string().default("📝"),
      published: z.string().default("never"),
    }),
})
const changelogCollection = defineCollection({
  type: "content",
  schema: () =>
    z.object({
      type: z.string(),
      date: z.date(),
      url: z.string().optional(),
      url_caption: z.string().default("Read more"),
      name: z.string(),
      description: z.string(),
    }),
})
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  blog: blogCollection,
  changelog: changelogCollection,
}
