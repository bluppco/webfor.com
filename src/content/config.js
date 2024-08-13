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

const headerCollection = defineCollection({
  
	schema: z.object({
		live: z.boolean(),
		order: z.number(),
		title: z.string(),
        link: z.string().optional(),
    
	})
  
})
const headerhoverresourcesCollection = defineCollection({
  
	schema: z.object({
		live: z.boolean(),
		order: z.number(),
		title: z.string(),
        link: z.string().optional(),
    
	})
  
})
const headerhoveraboutCollection = defineCollection({
  
	schema: z.object({
		live: z.boolean(),
		order: z.number(),
		title: z.string(),
        link: z.string().optional(),
    
	})
  
})

const headerhoverservicescolumn1Collection = defineCollection({
  
	schema: z.object({
		live: z.boolean(),
		order: z.number(),
		title: z.string(),
		description: z.string(),
        link: z.string().optional(),
    
	})
  
})

const headerhoverservicescolumn2Collection = defineCollection({
  
	schema: z.object({
		live: z.boolean(),
		order: z.number(),
		title: z.string(),
		description: z.string(),
        link: z.string().optional(),
    
	})
  
})


export const collections = {

    "footer": footerCollection,
    "header": headerCollection,
    "header-hover-about" : headerhoveraboutCollection,
    "header-hover-resources" : headerhoverresourcesCollection,
    "header-hover-services-column-1" : headerhoverservicescolumn1Collection,
    "header-hover-services-column-2" : headerhoverservicescolumn2Collection,

}
