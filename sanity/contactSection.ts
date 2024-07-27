// schemas/contactSection.ts
import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'contactSection',
  title: 'Contact Section',
  type: 'document',
  fields: [
    defineField({
      name: 'contactInfo',
      title: 'Contact Information',
      type: 'text',
    }),
    defineField({
      name: 'cta',
      title: 'Call to Action',
      type: 'cta',  // reference to the CTA schema
    }),
  ],
})

