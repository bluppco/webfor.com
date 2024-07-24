import { z, defineCollection } from "astro:content"

const headerColumnCollection = defineCollection({
	schema: z.object({
		live: z.boolean(),
		order: z.number(),
		title: z.string(),
        link: z.string().optional(),
	})
})
export const collections = {
	"header-column": headerColumnCollection,
}
