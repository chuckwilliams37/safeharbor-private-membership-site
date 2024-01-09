import { Container } from "@/components/Container";
import { SectionHeading } from "./SectionHeading";
import {
  UserGroupIcon,
  CalendarIcon,
  ShareIcon,
  ShieldCheckIcon,
  CpuChipIcon,
  AcademicCapIcon,
} from '@heroicons/react/20/solid'
import campingScene from '@/images/camping-in-the-oaks.png'
import Image from "next/image";

export function Benefits() {

  const features = [
    {
      name: 'Exclusive Membership',
      description:
        'Membership is capped to ensure personalized attention and deep connections within the community, enhancing the collective experience.',
      icon: (
        <UserGroupIcon className="absolute left-1 top-1 h-5 w-5 text-green-600" aria-hidden="true" />
      ),
    },
    {
      name: 'Annual Retreat Access',
      description:
        "Each member has the right to a one-week stay per year in the community's private sanctuary, offering a chance to unwind and connect.",
      icon: (
        <CalendarIcon className="absolute left-1 top-1 h-5 w-5 text-green-600" aria-hidden="true" />
      ),
    },
    {
      name: 'Resource Sharing',
      description:
        'Members enjoy access to shared amenities and resources, promoting a balanced and eco-friendly lifestyle.',
      icon: (
        <ShareIcon className="absolute left-1 top-1 h-5 w-5 text-green-600" aria-hidden="true" />
      ),
    },
    {
      name: 'Emergency Preparedness',
      description:
        'The plan provides a secure haven and support network in times of widespread emergencies, giving members peace of mind.',
      icon: (
        <ShieldCheckIcon
          className="absolute left-1 top-1 h-5 w-5 text-green-600"
          aria-hidden="true"
        />
      ),
    },
    {
      name: 'Technological Integration',
      description:
        'Incorporating blockchain and digital contracts, the plan represents a forward-thinking approach to privacy and efficient Private Membership Plan management.',
      icon: <CpuChipIcon className="absolute left-1 top-1 h-5 w-5 text-green-600" aria-hidden="true" />,
    },
    {
      name: 'Skill-building Workshops',
      description:
        'Members benefit from exclusive workshops that enhance self-sufficiency and personal growth in areas such as permaculture and survivalism.',
      icon: (
        <AcademicCapIcon
          className="absolute left-1 top-1 h-5 w-5 text-green-600"
          aria-hidden="true"
        />
      ),
    },
  ]

  return (
    <section
      id="benefits"
      aria-labelledby="benefits-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="3">
          Membership Benefits, Access Rights, and Resource Sharing
        </SectionHeading>

        <div className="overflow-hidden bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:pr-8 lg:pt-4">
                <div className="lg:max-w-lg">
                  <h2 className="text-base font-semibold leading-7 text-green-600">
                    Empower Your Tomorrow:
                  </h2>
                  <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Exclusive Benefits of Joining SafeHarbor
                  </p>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    Welcome to Voluntaria&apos;s SafeHarbor community, where our membership comes with real
                    benefits. Think of it as your year-round retreat and support
                    network, all rolled into one. From annual getaways in nature
                    to shared resources and emergency preparedness, we&apos;ve
                    got your back. It&apos;s a place to learn, to share, and to
                    be part of something special. Let&apos;s make the most of it,
                    together.
                  </p>
                  <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                    {features.map((feature) => (
                      <div key={feature.name} className="relative pl-9">
                        <dt className="font-semibold text-gray-900">
                          {feature.icon}
                          {feature.name}
                        </dt>{' '}
                        <dd className="">{feature.description}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
              <Image
                src={campingScene}
                alt="Product screenshot"
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