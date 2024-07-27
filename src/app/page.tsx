'use client';

import { Author } from '@/components/Author'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { NavigationBar } from '@/components/NavigationBar'
import { Introduction } from '@/components/Introduction'
import { Pricing } from '@/components/Pricing'
import { ClickableOverview } from '@/components/ClickableOverview'
import { Testimonial } from '@/components/Testimonial'
import { Testimonials } from '@/components/Testimonials'
import avatarImage1 from '@/images/avatars/kevin_fake_ai_sketch_001.png'
import avatarImage2 from '@/images/chad-cameron.png'
import { Ethos } from '@/components/Ethos'
import { Benefits } from '@/components/Benefits'
import { InformationCircleIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import managementAndTechImage from '@/images/bitcoin-blockchain-camper-oak-forest.png'
import ManagementTechSection from '@/components/ManagementTechSection'
import EmergencyProtocols from '@/components/EmergencyProtocols'
import VoluntariaCallout from '@/components/VoluntariaCallout'
import Head from 'next/head'

import { client } from "../../sanity/lib/client";


export default async function Home({
  params: { inviteCode },
}: {
  params: { inviteCode: string }
}) {
  

const query = `*[_type == "hero"][0]`
const heroData = await client.fetch(query)

const introQuery = `*[_type == "intro"][0]`
const introData = await client.fetch(introQuery)

console.log("introData: ", introData)

// console.log("heroData", heroData)
  return (
    <>
      <Head>
        <script src="https://voluntaria.ck.page/commerce.js" async defer></script>
      </Head>
      <Hero data={heroData}  />
      <p>2024.07.27.1846</p>
      <Introduction data={introData} />
      
      {/* ************************************** ABOVE THIS LINE IS COMPLETE ******************************************* */}
      {/* ************************************** BELOW THIS LINE IS IN PROGRESS 2024.06.16.2018 ******************************************* */}
      {/* ************************************** BELOW THIS LINE IS UNEDITED 2024.05.21.1834 ******************************************* */}
      {/* <VoluntariaCallout /> */}
      <NavigationBar />
      {/* <ClickableOverview /> */}
      <Testimonial
        id="testimonial-from-kevin-beamish"
        author={{
          name: 'Satori33',
          role: 'Voluntaria Co-founder',
          image: avatarImage1,
        }}
      >
        <p>
          &ldquo;My dream of raising my family in a self-sufficient,
          freedom-focused community may be realized within Voluntaria.&rdquo;
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
          &ldquo;I have been heavily involved in one residential community and
          have researched a lot of others. I have seen a lot of what works and
          what doesn&apos;t. Being founder of Voluntaria it&apos;s extremely
          exciting to work on a project where we take the working bits and
          create solid voluntaryist solutions to the bits that have experienced
          that did not work well.&rdquo;
        </p>
      </Testimonial>
      <Benefits />
      <figure className="mx-5 mt-16">
        <Image
          className="z-0 aspect-video rounded-xl bg-gray-50 object-cover"
          src={managementAndTechImage}
          alt=""
        />
        <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
          <InformationCircleIcon
            className="mt-0.5 h-5 w-5 flex-none text-gray-300"
            aria-hidden="true"
          />
          Our members are trained (and train others) in the use and deployment
          of cryptocurrencies and NFTs.
        </figcaption>
      </figure>
      <ManagementTechSection />
      <EmergencyProtocols />
      <Pricing />
      <div>{/* Pricing Support */}</div>
      <div>{/* Legal / Ethics */}</div>
      <div>{/* Conclusion */}</div>
      {/* <Testimonials />
      <Author /> */}
      <Footer />
    </>
  )
}
