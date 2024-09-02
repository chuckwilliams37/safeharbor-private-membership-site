import React from 'react'
import blockchainMeeting from '@/images/blockchain-community-meeting-002.png'

import {
  DocumentTextIcon,
  LightBulbIcon,
  GlobeAltIcon,
  ChatBubbleLeftIcon,
  UserGroupIcon,
  CpuChipIcon,
} from '@heroicons/react/20/solid'
import Image from 'next/image'
import { Container } from './Container'
import { SectionHeading } from './SectionHeading'

const features = [
  {
    name: 'Managed Online Forums',
    description:
      'Participate in our online forums, managed to ensure that discussions remain focused and productive. Encrypted channels within this space guarantee the privacy of your communications, allowing secure connections with the SafeHarbor community.',
    icon: ChatBubbleLeftIcon,
  },
  {
    name: 'Digital Membership Contracts',
    description:
      'Once our member portal is live, you will have secure access to your membership contracts and community agreements. These contracts, along with essential community agreements, will be available digitally, safeguarding your information and facilitating easy retrieval.',
    icon: DocumentTextIcon,
  },
  {
    name: 'Downloadable Documents for Preparedness',
    description:
      'In keeping with our ethos of readiness, essential documents will be available for download. These resources will provide directions to the property and confirm membership status, ensuring peace of mind for every contingency.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Versatile Workshop Opportunities',
    description:
      'Enrich your life with an assortment of workshops offered both online and offline. Covering a spectrum of topics from technological proficiency to spiritual growth, these sessions are crafted to enhance skills and deepen knowledge within our vibrant community.',
    icon: LightBulbIcon,
  },
  {
    name: 'Encrypted Member Communication',
    description:
      'Engage in private conversations with fellow members through protected communication channels. Designed for confidentiality and security, these exclusive lines of communication will be an integral part of our member portal.',
    icon: UserGroupIcon,
  },
  {
    name: 'Upcoming Member Portal Launch',
    description:
      'Stay tuned for the launch of our member portal, scheduled to arrive within 30 days of our first private membership sale. This portal will be your gateway to managing your membership details, accessing community forums, and downloading essential documents.',
    icon: CpuChipIcon,
  },
]

export default function ManagementTechSection() {
  return (
    <div className="mt-32 bg-green-900 py-24 sm:py-32">
      <section
        id="tech"
        aria-labelledby="tech-title"
        className="scroll-mt-14 py-4 sm:scroll-mt-32 sm:py-20 lg:py-8"
      >
        <Container>
          <SectionHeading number="3" className="text-white">
            Private Membership Plan Management and Technological Integration
          </SectionHeading>
          <div className="mx-auto mt-32 max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="text-base font-semibold leading-7 text-green-400">
                Securing Social and Resource Access
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                At SafeHarbor, we&apos;re excited to integrate advanced
                technology to enhance the membership experience. With the launch
                of our member portal within the next 30 days, you&apos;ll enjoy
                streamlined access to membership contracts, secure
                communication, and a host of resources for both online and
                offline community engagement.
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden pt-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <Image
                src={blockchainMeeting}
                alt="Consensus votes, resource, and property access will be blockchain enabled."
                className="shadow-2xl rounded-xl ring-1 ring-white/10"
                width={2432}
                height={1442}
              />
              <div className="relative" aria-hidden="true">
                <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-gray-900 pt-[17%]" />
              </div>
            </div>
          </div>
          <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
            <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-9">
                  <dt className="font-semibold text-white">
                    <feature.icon
                      className="absolute left-1 top-1 h-5 w-5 text-green-400"
                      aria-hidden="true"
                    />
                    {feature.name}
                  </dt>
                  <dd className="mt-2 ">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>
    </div>
  )
}
