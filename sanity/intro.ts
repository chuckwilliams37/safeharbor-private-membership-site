// schemas/intro.ts
import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'intro',
  title: 'Intro Section',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'introText',
      title: 'Intro Text',
      type: 'text',
    }),
  ],
})
