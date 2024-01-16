import { Container } from '@/components/Container'
import { SectionHeading } from './SectionHeading'
import {
  GlobeAltIcon,
  UsersIcon,
  HeartIcon,
  UserGroupIcon,
  ShieldCheckIcon,
} from '@heroicons/react/20/solid'
import tallStarryNight001 from '@/images/tall-starry-night-002.png'
import Image from 'next/image'
import Link from 'next/link'

export function Ethos() {
  return (
    <section
      id="ethos"
      aria-labelledby="ethos-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="2">
          SafeHarbor: Your Commitment to a Life of Voluntaryism and Resilience
        </SectionHeading>

        <div className="relative bg-white">
          <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
            <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
              <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
                <div className="absolute left-0 top-0 z-30 h-80 w-full bg-gradient-to-b from-white from-30% to-transparent"></div>
                <Image
                  className="absolute inset-0 mb-[-100px] h-full w-full bg-gray-50 object-cover"
                  src={tallStarryNight001}
                  alt="A group of people gathered around a campfire under a starry night sky in an oak forest."
                  layout="fill"
                />
              </div>
            </div>
            <div className="px-6 lg:contents">
              <div className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2 xl:px-3">
                <p className="text-base font-semibold leading-7 text-green-600">
                  Intro & Ethos
                </p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Embrace the Ethos of Voluntaria
                </h1>
                <p className="mt-6 text-xl leading-8 text-gray-700">
                  SafeHarbor is not just a membership; it is a pathway to a life
                  aligned with the values of liberty, mutual respect, and
                  proactive living. As a product of The Voluntaria Community, it
                  offers an invitation to individuals seeking to live by
                  principles that foster personal growth and collective well
                  being. Discover how SafeHarbor encapsulates the essence of
                  voluntaryism, creating a platform for members to live freely,
                  honorably, and in harmony with nature.
                </p>
                <div className="mt-10 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none">
                  <ul role="list" className="mt-8 space-y-8 text-gray-600">
                    <li className="flex gap-x-3">
                      <UserGroupIcon
                        className="mt-1 h-5 w-5 flex-none text-green-600"
                        aria-hidden="true"
                      />
                      <div>
                        <strong className="font-semibold text-gray-900">
                          Community Engagement
                        </strong>
                        <p>
                          At the core of SafeHarbor is the belief that active
                          participation is key to a thriving community. Members
                          are encouraged to bring their interpersonal skills and
                          engage in effective communication, fostering an
                          environment of responsiveness and consensus.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-x-3">
                      <UsersIcon
                        className="mt-1 h-5 w-5 flex-none text-green-600"
                        aria-hidden="true"
                      />
                      <div>
                        <strong className="font-semibold text-gray-900">
                          Guidelines for Growth
                        </strong>
                        <p>
                          Each member of SafeHarbor is seen as integral to the
                          community&apos;s health. By adhering to{' '}
                          <a
                            href="https://www.voluntaria.community"
                            target="_blank"
                            className="font-medium text-green-600 hover:underline"
                          >
                            Voluntaria Guidelines
                          </a>
                          —such as practicing kindness, self-governance, and
                          voluntary transactions—we commit to enhancing each
                          other&apos;s lives.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-x-3">
                      <ShieldCheckIcon
                        className="mt-1 h-5 w-5 flex-none text-green-600"
                        aria-hidden="true"
                      />
                      <div>
                        <strong className="font-semibold text-gray-900">
                          Harmony with Principles
                        </strong>
                        <p>
                          SafeHarbor members commit to living by the
                          Non-Aggression Principle, observing Natural Law, and
                          upholding Universal Law. We promote a lifestyle that
                          respects personal and property rights, ensuring every
                          interaction is rooted in integrity.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-x-3">
                      <GlobeAltIcon
                        className="mt-1 h-5 w-5 flex-none text-green-600"
                        aria-hidden="true"
                      />
                      <div>
                        <strong className="font-semibold text-gray-900">
                          Nurturing Nature
                        </strong>
                        <p>
                          We recognize the symbiotic relationship with our
                          environment and dedicate ourselves to working in
                          tandem with nature, embracing eco-friendly practices,
                          and advancing towards collective self-sufficiency and
                          self-defense.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-x-3">
                      <HeartIcon
                        className="mt-1 h-5 w-5 flex-none text-green-600"
                        aria-hidden="true"
                      />
                      <div>
                        <strong className="font-semibold text-gray-900">
                          Honorable Resolutions
                        </strong>
                        <p>
                          In the spirit of{' '}
                          <a
                            className="font-medium text-green-600 hover:underline"
                            href="https://www.voluntaria.community/the-10-guidelines.html"
                          >
                            the Voluntaria guidelines
                          </a>{' '}
                          SafeHarbor provides mechanisms for equitable and
                          honorable dispute resolution. We believe in resolving
                          conflicts with dignity, upholding the promise of a
                          united community.
                        </p>
                      </div>
                    </li>
                  </ul>
                  <p className="mt-6">
                    To explore in more depth the values that inspire SafeHarbor,
                    we invite you to{' '}
                    <a
                      href="https://www.voluntaria.community"
                      target="_blank"
                      className="font-medium text-green-600 hover:underline"
                    >
                      learn more about The Voluntaria Community
                    </a>{' '}
                    and how it continually nurtures the ethos that shapes our
                    shared journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
