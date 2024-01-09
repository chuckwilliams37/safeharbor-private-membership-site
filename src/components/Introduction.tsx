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
          A United Front as Your Private Membership Haven in Uncertainty
        </p>
        <p className="mt-4">
          In moments when the future seems unsure, SafeHarbor emerges as your
          dependable retreat. Here, we extend beyond simple promises to offer a
          real place of security and togetherness. In any crisis, our private
          community is your sanctuary, a place where members find strength and
          connection, ready to face challenges as one.
        </p>
        <ul role="list" className="mt-8 space-y-3">
          {[
            'Secure tomorrow&apos;s freedom today with the Voluntaria Private Membership Emergency Support Plan—your proactive pact for unwavering community resilience and sovereignty.',
            'Craft meaningful connections in an exclusive haven where each member is a cornerstone of our tight-knit sanctuary of solidarity.',
            'Reclaim serenity with your guaranteed annual retreat, a week of unity and renewal amidst the tranquil embrace of nature&apos;s strength.',
            'Step into the future with a Private Membership Plan protected by blockchain, where modern security meets the enduring promise of community trust.',
            'Shape a living legacy with a Private Membership Plan that evolves through your voice, ensuring your vision and values are woven into the fabric of our collective future.',
            'Immerse yourself in transformative knowledge with immersive workshops on permaculture and survival, igniting growth and camaraderie in every encounter.',
            'Stand tall in the face of uncertainty, knowing your membership is not just security — it&apos;s a bold step towards a self-reliant and connected tomorrow.',
          ].map((feature) => (
            <li key={feature} className="flex">
              <CheckIcon className="h-8 w-8 flex-none fill-green-500" />
              <span
                className="ml-4"
                dangerouslySetInnerHTML={{ __html: feature }}
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
            href="#free-chapters"
            className="text-base font-medium text-green-600 hover:text-green-800"
          >
            Get our updates straight to your inbox{' '}
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </p>
      </Container>
    </section>
  )
}
