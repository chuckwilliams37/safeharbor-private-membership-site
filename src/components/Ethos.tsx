import { Container } from "@/components/Container";
import { SectionHeading } from "./SectionHeading";
import {
  LockClosedIcon,
  KeyIcon,
  ServerIcon,
  ArrowsPointingInIcon,
} from '@heroicons/react/20/solid'
import tallStarryNight001 from '@/images/tall-starry-night-002.png';
import Image from "next/image";

export function Ethos() {
  return (
    <section
      id="ethos"
      aria-labelledby="ethos-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="2">
          The Voluntaria Community Ethos and Membership
        </SectionHeading>

        <div className="relative bg-white">
          <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
            <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
              <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
                <div className="absolute left-0 top-0 z-30 h-80 w-full bg-gradient-to-b from-white from-30% to-transparent"></div>
                <Image
                  className="absolute inset-0 h-full w-full bg-gray-50 object-cover mb-[-100px]"
                  src={tallStarryNight001}
                  alt="A group of people gathered around a campfire under a starry night sky in an oak forest."
                />
              </div>
            </div>
            <div className="px-6 lg:contents">
              <div className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2 xl:px-3">
                <p className="text-base font-semibold leading-7 text-green-600">
                  Introduction
                </p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  The Voluntaria Community Ethos and Membership
                </h1>
                <h2>Preamble</h2>
                <p className="mt-6 text-xl leading-8 text-gray-700">
                  Embracing the principles of voluntaryism and resilience, we
                  introduce SafeHarbor&apos;s Private Membership Community. This
                  plan is a commitment to our vision: a community sustained by
                  cooperation and proactive preparedness.
                </p>
                <div className="mt-10 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none">
                  <ul role="list" className="mt-8 space-y-8 text-gray-600">
                    <li className="flex gap-x-3">
                      <KeyIcon
                        className="mt-1 h-5 w-5 flex-none text-green-600"
                        aria-hidden="true"
                      />
                      <div>
                        <strong className="font-semibold text-gray-900">
                          Limited Membership and Personalized Categorization
                        </strong>
                        <p>
                          Reflecting on the depth of human connections, and the
                          resources necessary to sustain a community, we limit
                          membership to foster meaningful interactions. Each
                          member is a valued part of our story, chronicled in a
                          Private Membership Plan that represent our collective journey. We will avoid over-committing our precious resources. 
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-x-3">
                      <ArrowsPointingInIcon
                        className="mt-1 h-5 w-5 flex-none text-green-600"
                        aria-hidden="true"
                      />
                      <div>
                        <strong className="font-semibold text-gray-900">
                          Community Participation
                        </strong>
                        <p>
                          Beyond members, we are contributors to a
                          harmonious life, balancing autonomy with shared
                          responsibility. Active engagement and the sharing of
                          diverse talents enrich our community fabric.
                        </p>
                      </div>
                    </li>
                  </ul>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}