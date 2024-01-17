import Link from 'next/link'

import { CheckIcon } from '@/components/CheckIcon'
import { Container } from '@/components/Container'

export function Introduction() {
  return (
    <section
      id="introduction"
      aria-label="Introduction"
      className="pb-16 pt-20 sm:pb-20 md:pt-36 lg:py-32"
    >
      <Container className="text-lg tracking-tight text-slate-700">
        <p className="font-display text-4xl font-bold tracking-tight text-slate-900">
          Your Private Membership Emergency Support Team & Oak Forested Haven
          Retreat
        </p>
        <p className="mt-4">
          Our private 52-acre community is your sanctuary, a place where members
          find strength and connection, ready to face challenges as one.
        </p>
        <ul role="list" className="mt-8 space-y-3">
          {[
            {
              name: 'Annual Cabin Retreat',
              description:
                'Secure your annual week-long stay in our cabin, with the opportunity to enjoy the encompassing beauty of 52 acres of rural Northeast Florida land poised for the development of public kitchens and climate-controlled storage.',
            },
            {
              name: 'Fertile Gardening Land',
              description:
                'Cultivate and harvest on chemical-free soil confirmed for its purity, especially advantageous for gardening, supported by ample water sources including two wells and a natural spring.',
            },
            {
              name: 'Emergency Resources',
              description:
                'Immediate access to emergency resources and support, with plans to expand community-preference-weighted supplies and equipment, for aligned and considered peace of mind.',
            },
            {
              name: 'Member Online Community',
              description:
                'Engage with other members in our online Safeharbor community, a moderated space for sharing knowledge, promoting sustainable practices, and connecting with a network committed to off-grid living.',
            },
            {
              name: 'Active Decision-Making Role',
              description:
                "Take an active role in decision-making by contributing to the property board group's governance; propose and influence capital development projects firsthand.",
            },
            {
              name: 'Quarterly Development Updates',
              description:
                'Stay informed through consistent quarterly updates on the development of planned facilities, scheduled member workshops, and upcoming on-property events.',
            },
            {
              name: 'Join the Execution Team',
              description:
                'Participate, if you choose, in the execution team tasked with developing our yet-to-be-constructed public facilities, directly applying your expertise to guide our collective efforts.',
            },
            {
              name: 'Strategic Location',
              description:
                "Benefit from the property's strategic location, accessible within a 1.5-hour drive from major urban centers like St. Augustine, Orlando, and Jacksonville, ensuring convenient access for both emergency services and personal visits.",
            },
            {
              name: 'Conflict Resolution Services',
              description:
                'Find reassurance in the event of any consensus disagreements with access to professional conflict resolution services, ensuring all voices are heard and valued within our membership agreement.',
            },
          ].map((featureObj, index) => (
            <li key={index + 1} className="flex">
              <CheckIcon className="h-8 w-8 flex-none fill-green-500" />
              <span
                className="ml-4"
                dangerouslySetInnerHTML={{ __html: featureObj.description }}
              ></span>
            </li>
          ))}
        </ul>
        <p className="mt-8">
          SafeHarbor is the epitome of a private community where empowerment and
          connection thrive, ensuring every member a voice in shaping a
          resilient future. It&apos;s a dynamic membership group that merges
          tradition with technology, providing a sanctuary where unity and
          learning equip us to tackle any challenge together.
        </p>
        <p className="mt-10">
          <Link
            href="https://voluntaria.ck.page/products/voluntarias-safeharbor-private-newsletter"
            className="text-base font-medium text-green-600 hover:text-green-800"
            data-commerce
          >
            Get our updates straight to your inbox{' '}
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </p>
      </Container>
    </section>
  )
}