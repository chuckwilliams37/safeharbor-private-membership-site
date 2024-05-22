// schemas/solutionOverview.ts
import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'solutionOverview',
  title: 'Solution Overview',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
  ],
})
