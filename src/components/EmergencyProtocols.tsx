import React from 'react'
import { ArchiveBoxIcon, HomeIcon, ChatBubbleLeftRightIcon, UserGroupIcon, InformationCircleIcon } from '@heroicons/react/20/solid'
import { SectionHeading } from './SectionHeading'
import { Container } from './Container'
import featureImage from "@/images/chuck_williams_A_photorealistic_image_of_a_modern_survival_kit__edcad7cd-5418-4ac2-90bf-4e3398904c0d.png";
import Image from 'next/image';

const features = [
  {
    name: 'Collective Resource Stockpiling',
    description:
      'Members of SafeHarbor have access to emergency supplies and equipment stored and maintained on the Voluntaria property. We openly prepare and commit to keeping these resources ready and replenished as a community.',
    icon: ArchiveBoxIcon,
  },
  {
    name: 'Secure Shelter Planning',
    description:
      'With plans to construct communal shelters within the next 2-3 years, members will have the opportunity to play a role in developing and potentially owning a piece of these vital structures.',
    icon: HomeIcon,
  },
  {
    name: 'Resilient Communication Systems',
    description:
      'Keeping our community informed and connected is paramount, especially in times of crisis. Our protocols include establishing and maintaining reliable lines of communication that members can depend on.',
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: 'Community Support and Resource Sharing',
    description:
      "In true Voluntaria spirit, SafeHarbor is about more than just individual preparation—it's about forging a support network where resources, skills, and aid are shared, ensuring that every member finds strength and assistance within our ranks.",
    icon: UserGroupIcon,
  },
  {
    name: 'Preparedness Information and Tools',
    description:
      'SafeHarbor will provide essential tools and information to help members locate the property and understand the community&apos;s resources, empowering them with the knowledge to confidently navigate any challenges we may face.',
    icon: InformationCircleIcon,
  },
]

export default function EmergencyProtocols() {
  return (
    <div id="protocols" className="overflow-hidden bg-white py-24 sm:py-32">
      <Container>
        <SectionHeading number="5" className='my-12'>
          Emergency Protocols
        </SectionHeading>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:ml-auto lg:pl-4 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-green-600">
                  Stay Prepared
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Proactive Preparedness with SafeHarbor&apos;s Emergency Protocols
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  SafeHarbor doesn&apos;t just offer a place to call home—it ensures a comprehensive contingency plan designed for peace of mind. Our emergency protocols are meticulously crafted to cover a range of scenarios, guaranteeing that you and your family have access to the resources and support needed in uncertain times.
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <feature.icon
                          className="absolute left-1 top-1 h-5 w-5 text-green-600"
                          aria-hidden="true"
                        />
                        {feature.name}
                      </dt>{' '}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <div className="flex items-start justify-end lg:order-first">
              <Image 
                src={featureImage}
                alt="Emergency protocols feature image"
                className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-green-400/10 sm:w-[57rem]"
                width={2432}
                height={1442}
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}