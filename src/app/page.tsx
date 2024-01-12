import { Author } from '@/components/Author'
import { Footer } from '@/components/Footer'
import { FreeChapters } from '@/components/FreeChapters'
import { Hero } from '@/components/Hero'
import { Introduction } from '@/components/Introduction'
import { NavBar } from '@/components/NavBar'
import { Pricing } from '@/components/Pricing'
import { Resources } from '@/components/Resources'
import { Screencasts } from '@/components/Screencasts'
import { ClickableOverview } from '@/components/ClickableOverview'
import { Testimonial } from '@/components/Testimonial'
import { Testimonials } from '@/components/Testimonials'
import avatarImage1 from '@/images/kevin-beamish.jpeg'
import avatarImage2 from '@/images/chad-cameron.png'
import { Ethos } from '@/components/Ethos'
import { Benefits } from '@/components/Benefits'
import { InformationCircleIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import managementAndTechImage from '@/images/bitcoin-blockchain-camper-oak-forest.png'
import ManagementTechSection from '@/components/ManagementTechSection'
import EmergencyProtocols from '@/components/EmergencyProtocols'

export default function Home() {
  return (
    <>
      <Hero />
      <Introduction />
      <NavBar />
      <ClickableOverview />
      <Testimonial
        id="testimonial-from-kevin-beamish"
        author={{
          name: 'Kevin Beamish',
          role: 'Voluntaria Co-founder',
          image: avatarImage1,
        }}
      >
        <p>
          “My dream of raising my family in a secluded retreat may be realized
          within this community.”
        </p>
      </Testimonial>
      <Ethos />
      <Testimonial
        id="testimonial-from-chad-cameron"
        author={{
          name: 'Chad Cameron',
          role: 'Voluntaria Co-Founder',
          image: avatarImage2,
        }}
      >
        <p>
          “I&apos;ve been involved in several community and co-living
          situations, and this is by far the most exciting project with the most
          opportunity that I&apos;ve ever been privileged to be a part of.”
        </p>
      </Testimonial>
      <Benefits />
      <figure className="mx-5 mt-16">
        <Image
          className="aspect-video rounded-xl bg-gray-50 object-cover z-0"
          src={managementAndTechImage}
          alt=""
        />
        <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
          <InformationCircleIcon
            className="mt-0.5 h-5 w-5 flex-none text-gray-300"
            aria-hidden="true"
          />
          Our members are trained (and train others) in the use and deployment of cryptocurrencies and NFTs.
        </figcaption>
      </figure>
      <ManagementTechSection />
      <EmergencyProtocols />
      <Pricing />
      <Testimonials />
      <Author />
      <Footer />
    </>
  )
}
