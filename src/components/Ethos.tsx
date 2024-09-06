import { Container } from '@/components/Container'
import { SectionHeading } from './SectionHeading'
// import {
//   GlobeAltIcon,
//   UsersIcon,
//   HeartIcon,
//   UserGroupIcon,
//   ShieldCheckIcon,
// } from '@heroicons/react/20/solid'
import tallStarryNight001 from '@/images/tall-starry-night-002.png'
import Image from 'next/image'
// import Link from 'next/link'

export function Ethos() {
  return (
    <section
      id="ethos"
      aria-labelledby="ethos-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container size="lg">
        <SectionHeading number="1">
          Turning Setbacks into Success: The Birth of Voluntaria
        </SectionHeading>

        <div className="relative mt-6 overflow-hidden rounded-3xl border-0 bg-white">
          <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
            <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
              <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
                {/* <div className="absolute left-0 top-0 z-30 h-80 w-full bg-gradient-to-b from-white from-30% to-transparent"></div> */}
                <Image
                  className="absolute inset-0 mb-[-100px] h-full w-full bg-gray-50 object-cover "
                  src={tallStarryNight001}
                  alt="A group of people gathered around a campfire under a starry night sky in an oak forest."
                  layout="fill"
                />
              </div>
            </div>
            <div className="px-6 lg:contents">
              <div className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2 xl:px-3">
                <p className="text-base font-semibold leading-7 text-green-600">
                  We thought that finding the land would be the easy part…yeah
                  no...
                </p>
                {/* <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Embrace the Ethos of Voluntaria
                </h1> */}
                <p className="mt-6 text-base leading-8 text-gray-700 md:text-xl">
                  This project has been in existence since the craziness of 2020
                  happened.
                </p>
                <p className="mt-6 text-base leading-8 text-gray-700 md:text-xl">
                  Chuck and Santori co-founded Voluntaria with a couple friends.
                  The others turned out to not be alignment with where the
                  project was going when I showed up and bought them out. Before
                  I came on board, the crew spend months looking aa dozens of
                  properties before settling on this 52 acre paradise. You can
                  ask them it’s not an easy task to find the plot of land that
                  ticks all the boxes and has a great vibe.
                </p>
                <p className="mt-6 text-base leading-8 text-gray-700 md:text-xl">
                  Finally the perfect location. Off-grid drinking water (2
                  wells), great soil quality (former organic fern farm), perfect
                  climate…and strategic location. Finally the search was over
                  and the deal got done in 2021.
                </p>
                <p className="mt-6 text-base leading-8 text-gray-700 md:text-xl">
                  But then as the project progressed a mere months after the
                  property was acquired, their worst fears were realized. Just
                  as they were ready to launch the the community…it became
                  apparent to all that 2 of the partners were not a fit. They
                  wanted out and Chuck and Santori wanted them out. They owned a
                  1/3 of the property and it’s hard to sell 1/3 of a property.
                  So they put the whole thing on the market and figured the
                  dream of a freedom based community was more than they could
                  pull off. The land is huge - 52 acres. Chuck and Santori
                  couldn't pull it off on their own especially with the property
                  not producing any income. It was a big time and money suck for
                  a dream that sputtered and failed to launch.
                </p>
                <p className="mt-6 text-base leading-8 text-gray-700 md:text-xl">
                  This is where I entered the picture. I have known Chuck for
                  years and we have very similar takes on how we feel about
                  freedom. The 3 of us got together and talked about what went
                  wrong and how to keep it from not going wrong again. We worked
                  out a deal and I bought out the 2 founding members and brought
                  new life to the project. I had been working on a concept based
                  on my experience living in community and my love for freedom
                  and when the 3 of us came together it all just felt right.
                  Merging what they had and what I had Voluntaria was born!
                </p>

                <p className="mt-6 text-base leading-8 text-gray-700 md:text-xl">
                  But I knew that with the current state of the world, we all
                  need a safe haven for if/when the SHTF. In the end I sold my
                  house bought out the previous partners and went all in on this
                  project. It was a big stretch for me…but it just all felt
                  right. I had the guys we had the property the 3 of us have
                  great ideas…all the ingredients were there we just had to do
                  it.
                </p>

                <p className="mt-6 text-base leading-8 text-gray-700 md:text-xl">
                  That was the biggest hurdle, but it wasn't the only one. The
                  farmhouse and well were seriously run down.
                </p>
                <p className="mt-6 text-base leading-8 text-gray-700 md:text-xl">
                  The well had MAJOR problems. We had to redo EVERYTHING - the
                  accumulation tank, the electrical, the water filter, and all
                  the PVC piping. The well took us weeks and thousands of
                  dollars to fix and more time than I care to count. Now we are
                  dealing with $12,000+ property tax bill extortion racket, plus
                  who knows how much for the existing farmhouse soon to be
                  community house repairs and upgrages. Well over $20,000 to get
                  it all in decent workable condition.
                </p>

                {/* <div className="mt-10 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none">
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
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
