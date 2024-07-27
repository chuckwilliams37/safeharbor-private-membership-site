// schemas/hero.ts
import {defineType, defineField} from 'sanity'


export default defineType({
  name: 'hero',
  title: 'Hero Section',
  type: 'document',
  fields: [
    defineField({
      name: 'pageOpeningLine',
      title: 'Opening Line',
      type: 'string',
    }),
    defineField({
      name: 'initialPromptHeading',
      title: 'Initial Prompt Heading',
      type: 'array',
      of: [
        {
          type: 'block',
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              { title: 'Highlight', value: 'highlight' }
            ]
          }
        }
      ]
    }),
    defineField({
      name: 'heroHeading',
      title: 'Hero Heading',
      type: 'array',
      of: [
        {
          type: 'block',
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              { title: 'Highlight', value: 'highlight' }
            ]
          }
        }
      ]
    }),
  ],
})
