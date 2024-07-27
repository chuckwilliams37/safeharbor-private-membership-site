// schemas/pricingTable.ts
import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'pricingTable',
  title: 'Pricing Table',
  type: 'document',
  fields: [
    defineField({
      name: 'pricingOptions',
      title: 'Pricing Options',
      type: 'array',
      of: [{type: 'pricingOption'}], // reference to the pricingOption schema
    }),
    defineField({
      name: 'cta',
      title: 'Call to Action',
      type: 'cta',  // reference to the CTA schema
    }),
  ],
})

