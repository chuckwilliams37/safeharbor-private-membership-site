// schemas/membershipBenefits.ts
import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'membershipBenefits',
  title: 'Membership Benefits',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'benefits',
      title: 'Benefits',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
})
