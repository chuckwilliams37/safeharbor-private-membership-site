import { ShieldCheckIcon, LifebuoyIcon, BellAlertIcon } from '@heroicons/react/20/solid'
import { SectionHeading } from './SectionHeading'
import { Container } from './Container'
import featureImage from "@/images/chuck_williams_A_photorealistic_image_of_a_modern_survival_kit__edcad7cd-5418-4ac2-90bf-4e3398904c0d.png";
import Image from 'next/image';

const features = [
  {
    name: 'Immediate Support Access.',
    description:
      'In times of unexpected events, gain instant access to our support network, ensuring the safety and well-being of all members.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Crisis Preparedness Training.',
    description:
      'Equip yourself with the knowledge and skills needed to navigate emergencies with our comprehensive preparedness programs.',
    icon: LifebuoyIcon,
  },
  {
    name: 'Timely Alerts and Updates.',
    description:
      'Stay informed with real-time updates and alerts, so you can take immediate action when it matters most.',
    icon: BellAlertIcon,
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
                  Emergency Protocols
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  We will collect, protect, and provide 
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
              <Image src={featureImage}
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