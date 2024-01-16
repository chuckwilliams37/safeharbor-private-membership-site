import { Container } from '@/components/Container'
import {
  Expandable,
  ExpandableButton,
  ExpandableItems,
} from '@/components/Expandable'
import { SectionHeading } from '@/components/SectionHeading'

const clickableOverviewTopics = {
  'The Voluntaria Community Ethos and Membership': {
    'Introduction: ': 1,
    'Limited Membership and Personalized Categorization': 15,
    'Community Participation, Building, and Skill Sharing': 20,
  },
  'Membership Benefits, Access Rights, and Resource Sharing': {
    'Annual Retreat and Sanctuary': 21,
    'Access to Shared Resources': 22,
  },
  'Private Membership Plan Management and Technological Integration': {
    'Digital Membership and Blockchain Evolution': 50,
    'Proposal Submission Privilege': 57,
  },
  'Emergency Protocols and Plan Activation': {
    'Community Supported Emergency Response': 82,
    'Refund Policy in Case of Liquidation': 88,
  },
  'Pricing, Discounts, and Financial Options': {
    'Varied Pricing for Membership': 93,
    'Consensus Bypass Clause': 96,
  },
  'Legal Framework, Ethical Standards, and Dispute Resolution': {
    'Adherence to Law and Ethics': 101,
    'Continuous Legal and Ethical Adaptation': 105,
  },
  'Member Feedback, Communication, and Private Membership Plan Adaptation': {
    'Dynamic Member Feedback and Communication': 111,
    'Engagement and Community Evolution': 129,
  },
}

export function ClickableOverview() {
  return (
    <section
      id="membership-plan-overview"
      aria-labelledby="membership-plan-overview-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="1" id="membership-plan-overview-title">
          The Safeharbor Private Membership Emergency Support Plan (Clickable
          Overview)
        </SectionHeading>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
          Get a look at all of the membership benefits and mutual commitments
          outlined in the membership contract. Everything you need to know is
          here.
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          The plan is comprised of a contract and financial membership
          commitment with flexible payment plans from lump sum payments to
          monthly renewals.
        </p>
        <Expandable>
          <ol role="list" className="mt-16 space-y-10 sm:space-y-16">
            <ExpandableItems>
              {Object.entries(clickableOverviewTopics).map(([title, pages]) => (
                <li key={title}>
                  <h3 className="font-display text-3xl font-bold tracking-tight text-slate-900">
                    {title}
                  </h3>
                  <ol
                    role="list"
                    className="mt-8 divide-y divide-slate-300/30 rounded-2xl bg-slate-50 px-6 py-3 text-base tracking-tight sm:px-8 sm:py-7"
                  >
                    {Object.entries(pages).map(([title, pageNumber]) => (
                      <li
                        key={title}
                        className="flex justify-between py-3"
                        aria-label={`${title} on page ${pageNumber}`}
                      >
                        <span
                          className="font-medium text-slate-900"
                          aria-hidden="true"
                        >
                          {title}
                        </span>
                        <span
                          className="font-mono text-slate-400"
                          aria-hidden="true"
                        >
                          {pageNumber}
                        </span>
                      </li>
                    ))}
                  </ol>
                </li>
              ))}
            </ExpandableItems>
          </ol>
          <ExpandableButton>See more</ExpandableButton>
        </Expandable>
      </Container>
    </section>
  )
}
