import { Container } from '@/components/Container'
import { SectionHeading } from './SectionHeading'
import {
  UserGroupIcon,
  CalendarIcon,
  ShareIcon,
  ShieldCheckIcon,
  CpuChipIcon,
  AcademicCapIcon,
  HomeIcon,
} from '@heroicons/react/20/solid'
import campingScene from '@/images/camping-in-the-oaks.png'
import Image from 'next/image'

export function Benefits() {
  const features = [
    {
      name: 'Complimentary Cabin Retreats',
      description:
        'Enjoy an entitled one-week cabin stay annually on our property, with the option to extend at a discounted member rate.',
      icon: <HomeIcon className="h-5 w-5 text-green-600" aria-hidden="true" />,
    },
    {
      name: 'Collaborative Land Cultivation',
      description:
        'Work with other members and the land management group to cultivate and harvest the community gardens as designated by consensus.',
      icon: <ShareIcon className="h-5 w-5 text-green-600" aria-hidden="true" />,
    },
    {
      name: 'Emergency Preparedness and Expansion',
      description:
        'Immediate access to emergency resources and support, including 3 RV hookups with plans to expand, for peace of mind.',
      icon: (
        <ShieldCheckIcon
          className="h-5 w-5 text-green-600"
          aria-hidden="true"
        />
      ),
    },
    {
      name: 'Consensus Governance Participation',
      description:
        'Engage with the community and have a say in the decision-making, helping to shape the sanctuary’s development.',
      icon: (
        <UserGroupIcon className="h-5 w-5 text-green-600" aria-hidden="true" />
      ),
    },
    {
      name: 'Dynamic Educational Experiences and Celebrations',
      description:
        'Attend workshops by prominent sustainability experts and enjoy seasonal celebrations, enhancing community connection.',
      icon: (
        <AcademicCapIcon
          className="h-5 w-5 text-green-600"
          aria-hidden="true"
        />
      ),
    },
    // ... (other features you may want to add)
  ]

  return (
    <section
      id="benefits"
      aria-labelledby="benefits-title"
      className="scroll-mt-14 py-12 sm:scroll-mt-32 sm:py-16 "
    >
      <Container>
        <SectionHeading number="3">
          Membership Benefits, Access Rights, and Resource Sharing
        </SectionHeading>
        <div className="overflow-hidden bg-white py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="pr-8 pt-4">
                <div className="max-w-lg">
                  <h2 className="text-base font-semibold leading-7 text-green-600">
                    Empower Your Tomorrow:
                  </h2>
                  <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Exclusive Benefits of Joining SafeHarbor
                  </p>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    Welcome to Voluntaria&apos;s SafeHarbor community, where our
                    membership comes with real benefits. Think of it as your
                    year-round retreat and support network, all rolled into one.
                    From annual getaways in nature to shared resources and
                    emergency preparedness, we&apos;ve got your back. It&apos;s
                    a place to learn, to share, and to be part of something
                    special. 
                  </p>
                  <dl className="mt-10 space-y-8 text-base leading-7 text-gray-600">
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
                  </dl>
                </div>
              </div>

              <Image
                src={campingScene}
                alt="Camping in the oaks"
                className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                width={2432}
                height={1442}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
