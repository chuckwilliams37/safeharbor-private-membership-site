// schemas/problemStatement.ts
import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'problemStatement',
  title: 'Problem Statement',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'problems',
      title: 'Problems',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
})
