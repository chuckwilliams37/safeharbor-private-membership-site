import { Container } from '@/components/Container'
import { SectionHeading } from './SectionHeading'
// import {
//   UserGroupIcon,
//   CalendarIcon,
//   ShareIcon,
//   ShieldCheckIcon,
//   CpuChipIcon,
//   AcademicCapIcon,
//   HomeIcon,
// } from '@heroicons/react/20/solid'
import campingScene from '@/images/camping-in-the-oaks.png'
import Image from 'next/image'

export function Benefits() {
  // const features = [
  //   {
  //     name: 'Complimentary Cabin Retreats',
  //     description:
  //       'Enjoy an entitled one-week cabin stay annually on our property, with the option to extend at a discounted member rate.',
  //     icon: <HomeIcon className="h-5 w-5 text-green-600" aria-hidden="true" />,
  //   },
  //   {
  //     name: 'Collaborative Land Cultivation',
  //     description:
  //       'Work with other members and the land management group to cultivate and harvest the community gardens as designated by consensus.',
  //     icon: <ShareIcon className="h-5 w-5 text-green-600" aria-hidden="true" />,
  //   },
  //   {
  //     name: 'Emergency Preparedness and Expansion',
  //     description:
  //       'Immediate access to emergency resources and support, with plans to expand community-preference-weighted supplies and equipment, for aligned and considered peace of mind.',
  //     icon: (
  //       <ShieldCheckIcon
  //         className="h-5 w-5 text-green-600"
  //         aria-hidden="true"
  //       />
  //     ),
  //   },
  //   {
  //     name: 'Consensus Governance Participation',
  //     description:
  //       'Engage with the community and have a say in the decision-making, helping to shape the sanctuary’s development.',
  //     icon: (
  //       <UserGroupIcon className="h-5 w-5 text-green-600" aria-hidden="true" />
  //     ),
  //   },
  //   {
  //     name: 'Dynamic Educational Experiences and Celebrations',
  //     description:
  //       'Attend workshops by prominent sustainability experts and enjoy seasonal celebrations, enhancing community connection.',
  //     icon: (
  //       <AcademicCapIcon
  //         className="h-5 w-5 text-green-600"
  //         aria-hidden="true"
  //       />
  //     ),
  //   },
  //   // ... (other features you may want to add)
  // ]

  return (
    <section
      id="benefits"
      aria-labelledby="benefits-title"
      className="scroll-mt-14 py-12 sm:scroll-mt-32 sm:py-16 "
    >
      <Container size="lg">
        <SectionHeading number="2">
          Membership Benefits, Access Rights, and Resource Sharing
        </SectionHeading>
        <div className="mt-6 overflow-hidden rounded-3xl bg-white">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto grid max-w-2xl grid-cols-1 sm:gap-y-0 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
              <div className=" order-2 px-6 py-16 lg:order-1 lg:px-8">
                <div className="max-w-lg">
                  <h2 className="text-lg font-semibold leading-7 text-green-600">
                    I know what makes a community thrive OR fail - because we’ve
                    lived it!*
                    <br />
                    *and we read the book (creating a life together) that talks
                    about how how 90+% of communities fail within the first 5
                    years and how to avoid the common mistakes.
                  </h2>

                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    Voluntaria is a new project, but I'm we are not new in this
                    space - I lived in an intentional community in California
                    for 2 years. From 2013 - 2015, I lived in an intentional
                    community, full time. I saw firsthand what works -{' '}
                    <b>and perhaps more importantly what doesn't.</b> And I'm so
                    excited to take those insights, and apply them to
                    Voluntaria. Chuck and Santori have lived through a version
                    of communal failure. Pulling from all our experiences and
                    all the proactive research we have done we are as well
                    positioned to create a thriving community. How we see it is
                    It all comes down to clear communication, common values,
                    individual rights…and cutting out the bullsh*t ;) This is
                    NOT a hippie commune where you'll own nothing and be
                    happy….and we sing nightly next to a campfire (ok well
                    depending on who is there and if someone can play guitar
                    this might happen from time to time). This is an American
                    country village, where we honor the same principals as what
                    created our country. Where we value individual rights above
                    the collective. This is a place where we come together and
                    help each other because we are the kind of people who like
                    to help. We help each other because we choose to - not
                    because we're forced to.
                  </p>
                  <h2 className="text-lg font-semibold leading-7 text-green-600">
                    You're not alone anymore. <br />
                    Whatever happens, we'll figure it out - together.
                  </h2>
                  <p className="text-lg text-gray-600">
                    We understand what it's like… <br />
                    To be shunned, yelled at and mocked… <br />
                    To be accused of "killing grandma" or "spreading
                    misinformation"… <br />
                    To lose your closest friends and family… <br />
                    Maybe you even had to leave your partner…or they left you.{' '}
                    <br />
                    And since 2020 - or maybe even before - you've felt alone.
                    Because now, when you meet the average person on the street,
                    you wonder if they're the type of person that would have
                    yelled in your face or called the cops on you for not
                    wearing a mask or wanted to force inject you so you too
                    could participate in a medical experiment.
                    <br />
                    Maybe you've tried connecting with other red-pilled
                    freedom-lovers or voluntaryists. But it seems that most of
                    them are more interested in drinking and complaining about
                    the government than{' '}
                    <b>actually doing something about it.</b>
                    <br />
                    <b>
                      So you go through the motions, doing your best to plan and
                      prepare, but unsure of what to do next.
                    </b>
                    <br />
                    So the good news is you don’t have to go at it alone
                    anymore!
                    <br />
                    Your Safe Harbor membership isn't just about a piece of
                    land.
                    <br />
                    It's about a{' '}
                    <b>
                      community of like minded freedom minded unvaxxed people.
                    </b>
                  </p>
                  {/* <dl className="mt-10 space-y-8 text-lg leading-7 text-gray-600">
                    {features.map((feature) => (
                      <div key={feature.name} className="relative">
                        <dt>
                          <div className="absolute left-1 top-1">
                            {feature.icon}
                          </div>
                          <p className="ml-11 font-bold text-gray-900 ">
                            {feature.name}
                          </p>
                        </dt>
                        <dd className="ml-11 mt-2">{feature.description}</dd>
                      </div>
                    ))}
                  </dl> */}
                </div>
              </div>
              <div className="relative order-1 h-80 lg:order-2 lg:h-full ">
                <Image
                  src={campingScene}
                  alt="Camping in the oaks"
                  className="absolute  h-full w-full object-cover  ring-1 ring-gray-400/10"
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
