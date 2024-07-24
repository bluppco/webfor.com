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

export const collections = {

    "footer": footerCollection,

}
