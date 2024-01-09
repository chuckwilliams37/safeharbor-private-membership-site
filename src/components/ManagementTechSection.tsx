import React from 'react'
import blockchainMeeting from '@/images/blockchain-community-meeting-002.png';

import {
  DocumentTextIcon,
  ShieldCheckIcon,
  LightBulbIcon,
} from '@heroicons/react/20/solid'
import Image from 'next/image';
import { Container } from './Container';
import { SectionHeading } from './SectionHeading';

const features = [
  {
    name: 'Limited Digital Private Membership',
    description:
      'We will begin with 300 available SafeHarbor memberships. Contracts are delivered as accessible digital documents. Later we will transition into secure, blockchain-enabled smart-contracts.',
    icon: DocumentTextIcon,
  },
  {
    name: 'Blockchain Evolution',
    description:
      'Experience the future of policy management with our evolution into blockchain technology and NFTs for unrivaled transparency and security.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Proposal Submission Privilege',
    description:
      'Engage with the community through proposal submissions, actively participating in the decision-making that shapes our collective future.',
    icon: LightBulbIcon,
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
        <SectionHeading number="4" className='text-white' >
          Private Membership Plan Management and Technological Integration
        </SectionHeading>
          <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-32">
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="text-base font-semibold leading-7 text-green-400">
                Securing Social and Resource Access
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Dive into the heart of SafeHarbor where innovation meets
                tradition. Our policies start as digital documents, ensuring
                ease of access and management, and mature into
                blockchain-protected records for the utmost in transparency and
                security. With the ability to submit proposals, each member
                actively shapes the community&apos;s trajectory, harnessing
                technology to fuel our collective vision. This is private
                membership management reimagined for the modern era.
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden pt-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <Image
                src={blockchainMeeting}
                alt="Consesus votes, resource, and property access will be blockchain enabled."
                className="shadow-2xl mb-[-12%] rounded-xl ring-1 ring-white/10"
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
                  </dt>{' '}
                  <dd className="">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
      </Container>
    </section>
        </div>
  )
}

