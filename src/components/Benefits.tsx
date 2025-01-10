import { Container } from '@/components/Container'
import { SectionHeading } from './SectionHeading'
import campingScene from '@/images/camping-in-the-oaks.png'
import Image from 'next/image'
import Link from 'next/link'
import { ConvertKitLaunchButton } from './ConvertKitLaunchButton'
export function Benefits() {
  return (
    <section
      id="benefits"
      aria-labelledby="benefits-title"
      className="scroll-mt-12 py-16 sm:scroll-mt-12 sm:py-20 lg:py-32 bg-gray-50"
    >
      <Container size="lg">
        <SectionHeading number="2">
          Membership Benefits, Access Rights, and Resource Sharing
        </SectionHeading>
        <div className="mt-6 overflow-hidden rounded-3xl bg-white shadow-lg">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto grid max-w-2xl grid-cols-1 sm:gap-y-0 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
              <div className="order-2 px-6 py-16 lg:order-1 lg:px-8">
                <div className="max-w-lg">
                  <h2 className="text-lg font-semibold leading-7 text-green-600">
                    We know what makes a community thrive OR fail - because we&apos;ve lived it!*
                  </h2>
                  <p className="mt-2 text-sm text-gray-500 italic">
                    *and we&apos;ve read the book <Link className='underline text-green-600' href='https://amzn.to/4h1cEdV' target='_blank' >(Creating a Life Together)</Link> that talks
                    about how 90+% of communities fail within the first 5
                    years and how to avoid the common mistakes.
                  </p>

                  <p className="mt-6 text-base leading-7 text-gray-600">
                    Voluntaria is a new project, but we are not new in this
                    space. One of our founders lived in an intentional community in California
                    for 2 years, from 2013 to 2015. He saw first-hand what works -{' '}
                    <b>and perhaps more importantly what doesn&apos;t.</b>
                  </p>

                  <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                    <p className="text-base leading-7 text-gray-600">
                      Want to learn more about our vision for community building? Watch two of our founders Chad Cameron and Chuck Williams discuss reimagining community through voluntaryist principles with health advocate Amandha Vollmer. They explore how self-governance and natural law can create more joyful, liberated communities.
                    </p>
                    <p className="mt-2">
                      <Link 
                        href="https://yummy.doctor/video-list/amandha-vollmer-adv-discusses-community-building-with-chad-cameron-and-chuck-williams/"
                        target="_blank"
                        className="text-green-600 hover:underline font-medium"
                      >
                        Watch the full discussion here →
                      </Link>
                    </p>
                  </div>

                  <p className="mt-6 text-base leading-7 text-gray-600">
                    We believe it all comes down to clear communication, common values,
                    individual rights&hellip;and cutting out the bullsh*t. This is
                    NOT a hippie commune where you&apos;ll own nothing and be
                    happy&hellip;and we sing nightly next to a campfire (although
                    depending on who is here and if someone can play guitar,
                    this might happen from time to time). This is an American
                    country village, where we honor the same principles that
                    created our country,<span className="font-bold"> valuing individual sovereignty above
                    the collective.</span>
                  </p>

                  <h2 className="mt-8 text-xl font-semibold leading-7 text-green-600">
                    As a member, you&apos;re not alone anymore. <br />
                    Whatever happens, we&apos;ll figure it out - together.
                  </h2>
                  <p className="mt-4 text-base leading-7 text-gray-600">
                    We understand what it&apos;s like&hellip; <br />
                    To be shunned, yelled at and mocked&hellip; <br />
                    To be accused of &ldquo;killing grandma&rdquo; or &ldquo;spreading
                    misinformation&rdquo;&hellip; <br />
                    To lose our closest friends and family&hellip; <br />
                    Maybe some of us even had to leave our partners&hellip;or were left.
                  </p>
                  <p className="mt-4 text-base leading-7 text-gray-600">
                    And since 2020 - or maybe even before - we&apos;ve felt alone.
                    Because now, when we meet the average person on the street,
                    we wonder if they&apos;re the type of person that would have
                    yelled in our faces or called the cops on us for not
                    wearing a mask or wanted to force inject us so we too
                    could participate in a medical experiment.
                  </p>
                  <p className="mt-4 text-base leading-7 text-gray-600">
                    <b>
                      Your <Link href="https://safeharbor.voluntaria.community/Voluntaria_Emergency_Retreat_Access_Membership_Contract_v0.1.2025.01.10.0259CT.pdf" target="_blank" className="text-green-600 hover:underline">Safe Harbor membership</Link> isn&apos;t just about a piece of
                      land. It&apos;s about a community of like-minded, freedom-loving,
                      unvaxxed people.
                    </b>
                  </p>
                </div>
              </div>
              <div className="relative order-1 h-80 lg:order-2 lg:h-full">
                <Image
                  src={campingScene}
                  alt="Camping in the oaks"
                  className="absolute h-full w-full object-cover ring-1 ring-gray-400/10"
                  width={2432}
                  height={1442}
                />
              </div>
            </div>
          </div>
        </div>
         <div className="mt-8 text-center gap-3 flex flex-col sm:flex-row sm:justify-center">
            <a
              href="https://www.voluntaria.community/apply.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg bg-green-600 px-6 py-3 text-lg font-semibold text-white shadow-md transition-colors hover:bg-green-700"
            >
              Apply for Ownership
            </a>
            <ConvertKitLaunchButton href="https://connect.voluntaria.community/products/shm">
              <span className="inline-block mr-2">🏡</span>
              Become a Member
            </ConvertKitLaunchButton>
          </div>
      </Container>
    </section>
  )
}
