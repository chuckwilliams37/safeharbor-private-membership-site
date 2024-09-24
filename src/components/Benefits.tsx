import { Container } from '@/components/Container'
import { SectionHeading } from './SectionHeading'
import campingScene from '@/images/camping-in-the-oaks.png'
import Image from 'next/image'

export function Benefits() {
  return (
    <section
      id="benefits"
      aria-labelledby="benefits-title"
      className="scroll-mt-14 py-12 sm:scroll-mt-32 sm:py-16 bg-gray-50"
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
                    I know what makes a community thrive OR fail - because we&apos;ve
                    lived it!*
                  </h2>
                  <p className="mt-2 text-sm text-gray-500 italic">
                    *and we read the book (Creating a Life Together) that talks
                    about how 90+% of communities fail within the first 5
                    years and how to avoid the common mistakes.
                  </p>

                  <p className="mt-6 text-base leading-7 text-gray-600">
                    Voluntaria is a new project, but we are not new in this
                    space - I lived in an intentional community in California
                    for 2 years. From 2013 - 2015, I lived in an intentional
                    community, full time. I saw firsthand what works -{' '}
                    <b>and perhaps more importantly what doesn&apos;t.</b> And I&apos;m so
                    excited to take those insights, and apply them to
                    Voluntaria. Chuck and Santori have lived through a version
                    of communal failure. Pulling from all our experiences and
                    all the proactive research we have done we are as well
                    positioned to create a thriving community.
                  </p>
                  
                  <p className="mt-4 text-base leading-7 text-gray-600">
                    How we see it is it all comes down to clear communication, common values,
                    individual rights&hellip;and cutting out the bullsh*t ;) This is
                    NOT a hippie commune where you&apos;ll own nothing and be
                    happy&hellip;and we sing nightly next to a campfire (ok well
                    depending on who is there and if someone can play guitar
                    this might happen from time to time). This is an American
                    country village, where we honor the same principals as what
                    created our country. Where we value individual rights above
                    the collective.
                  </p>

                  <h2 className="mt-8 text-lg font-semibold leading-7 text-green-600">
                    You&apos;re not alone anymore. <br />
                    Whatever happens, we&apos;ll figure it out - together.
                  </h2>
                  <p className="mt-4 text-base leading-7 text-gray-600">
                    We understand what it&apos;s like&hellip; <br />
                    To be shunned, yelled at and mocked&hellip; <br />
                    To be accused of &ldquo;killing grandma&rdquo; or &ldquo;spreading
                    misinformation&rdquo;&hellip; <br />
                    To lose your closest friends and family&hellip; <br />
                    Maybe you even had to leave your partner&hellip;or they left you.
                  </p>
                  <p className="mt-4 text-base leading-7 text-gray-600">
                    And since 2020 - or maybe even before - you&apos;ve felt alone.
                    Because now, when you meet the average person on the street,
                    you wonder if they&apos;re the type of person that would have
                    yelled in your face or called the cops on you for not
                    wearing a mask or wanted to force inject you so you too
                    could participate in a medical experiment.
                  </p>
                  <p className="mt-4 text-base leading-7 text-gray-600">
                    <b>
                      Your Safe Harbor membership isn&apos;t just about a piece of
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
      </Container>
    </section>
  )
}