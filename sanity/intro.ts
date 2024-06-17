// schemas/intro.ts
import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'intro',
  title: 'Intro Section',
  type: 'document',
  fields: [
    defineField({
      name: 'introSectionOpeningLine',
      title: 'Intro Section Opening Line',
      type: 'string',
    }),
    defineField({
      name: 'introSectionBody',
      title: 'Intro Section Body',
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
