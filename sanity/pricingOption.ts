// schemas/pricingOption.ts
import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'pricingOption',
  title: 'Pricing Option',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
    }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'cta',
      title: 'Call to Action',
      type: 'cta',  // reference to the CTA schema
    }),
  ],
})
