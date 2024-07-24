import { z, defineCollection } from "astro:content"

const footerCollection = defineCollection({

    schema: z.object({

        title: z.string(),
        order: z.number(),
        items: z.array(

            z.object({
				title: z.string(),
                live: z.boolean(),
                order: z.number(),
				link: z.string(),
			})

        ).optional()

    })

})

const headerColumnCollection = defineCollection({
  
	schema: z.object({
		live: z.boolean(),
		order: z.number(),
		title: z.string(),
    link: z.string().optional(),
    
	})
  
})

export const collections = {

    "footer": footerCollection,
    "header-column": headerColumnCollection,

}
