// schemas/detailedDescription.ts
import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'detailedDescription',
  title: 'Detailed Description',
  type: 'document',
  fields: [
    defineField({
      name: 'subheadings',
      title: 'Subheadings',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'block'}, {type: 'image'}],
    }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'cta',
      title: 'Call to Action',
      type: 'cta',  // reference to the CTA schema
    }),
  ],
})
