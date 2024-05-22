import { createSchema, type SchemaTypeDefinition } from 'sanity'

// Import your schemas
import hero from './hero'
import intro from './intro'
import problemStatement from './problemStatement'
import solutionOverview from './solutionOverview'
import membershipBenefits from './membershipBenefits'
import testimonial from './testimonial'
import detailedDescription from './detailedDescription'
import pricingTable from './pricingTable'
import pricingOption from './pricingOption'
import contactSection from './contactSection'
import cta from './cta' 

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    hero,
    intro,
    problemStatement,
    solutionOverview,
    membershipBenefits,
    testimonial,
    detailedDescription,
    pricingTable,
    pricingOption,
    contactSection,
    cta,
  ],
}
