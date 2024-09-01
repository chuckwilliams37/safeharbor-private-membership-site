'use client'

// import { Author } from '@/components/Author'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { NavigationBar } from '@/components/NavigationBar'
import { Introduction } from '@/components/Introduction'
import { Pricing } from '@/components/Pricing'
// import { ClickableOverview } from '@/components/ClickableOverview'
import { Testimonial } from '@/components/Testimonial'
// import { Testimonials } from '@/components/Testimonials'
import avatarImage1 from '@/images/avatars/kevin_fake_ai_sketch_001.png'
import avatarImage2 from '@/images/chad-cameron.png'
import { Ethos } from '@/components/Ethos'
import { Benefits } from '@/components/Benefits'
import { InformationCircleIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import managementAndTechImage from '@/images/bitcoin-blockchain-camper-oak-forest.png'
import ManagementTechSection from '@/components/ManagementTechSection'
import EmergencyProtocols from '@/components/EmergencyProtocols'
// import VoluntariaCallout from '@/components/VoluntariaCallout'
import Head from 'next/head'
import { Container } from '@/components/Container'

// import { client } from '../../sanity/lib/client'

export default async function Home({
  params: { inviteCode },
}: {
  params: { inviteCode: string }
}) {
  // const query = `*[_type == "hero"][0]`
  // const heroData = await client.fetch(query)

  // const introQuery = `*[_type == "intro"][0]`
  // const introData = await client.fetch(introQuery)

  // console.log('introData: ', introData)

  // console.log("heroData", heroData)
  return (
    <>
      <Head>
        <script
          src="https://voluntaria.ck.page/commerce.js"
          async
          defer
        ></script>
      </Head>
      <Hero />
      {/* <p>2024.07.27.1846</p> */}
      <Introduction />

      {/* ************************************** ABOVE THIS LINE IS COMPLETE ******************************************* */}
      {/* ************************************** BELOW THIS LINE IS IN PROGRESS 2024.06.16.2018 ******************************************* */}
      {/* ************************************** BELOW THIS LINE IS UNEDITED 2024.05.21.1834 ******************************************* */}
      {/* <VoluntariaCallout /> */}
      <NavigationBar />
      {/* <ClickableOverview /> */}
      <Testimonial
        id="testimonial-from-kevin-beamish"
        author={{
          name: 'Chad Cameron',
          role: 'Voluntaria Co-Founder ',
          image: avatarImage1,
        }}
        hasStars={false}
      >
        <h2 className="font-bold">
          Hi - I'm Chad Cameron, Co-Founder of Voluntaria.
        </h2>
        <p>
          My partners, Chuck and Santori and I co-founded Voluntaria to create a
          safe haven from whatever crisis comes next.
          <br />
          <br />
          And let me tell you - it was NOT easy.
        </p>
      </Testimonial>
      <Ethos />
      {/* <Testimonial
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
      </Testimonial> */}

      <section className="bg-white py-10">
        <Container size="lg">
          <h2 className="text-base font-semibold leading-7 text-green-600">
            We had to spend over a year looking at properties, sorting
            financing, dealing with legal hurdles and negotiating agreements.
            <br />
            But YOUR bugout planning is as easy as online shopping
          </h2>
          <p>
            With Voluntaria's Safe Harbor Membership, you don't have to deal
            with everything we went through.
            <br />
            <b> You don't need to figure it all out on your own.</b>
          </p>
          <ul className="my-6 font-bold [&>li]:flex [&>li]:items-center [&>li]:gap-3 [&>li]:before:h-2 [&>li]:before:w-2 [&>li]:before:rounded-full [&>li]:before:bg-green-600">
            <li>
              You don't need to spend weeks driving across the country, shopping
              for land
            </li>
            <li>
              You don't need to find freedom minded business partners or
              convince your friends to go in on land with you…and start from
              scratch when they bail out
            </li>
            <li>
              You don't need to figure out financing, or worry about your credit
              score
            </li>
            <li>
              You don't need to save for an impossibly-high down payment deposit
            </li>
            <li>You don't need to be tied down to land.</li>
            <li>You don’t have to fix the wells.</li>
            <li>You don’t have to bush hog the overgrown roads/trails.</li>
          </ul>
          <p>
            You don't have to do any of it… <br />
            <span className="font-bold text-green-600">
              …We've got you covered.
            </span>
            <br />
            <b>
              Voluntaria's Safe Harbor is an affordable membership that gives
              you access to a safe bugout location and community, when/if the
              SHTF. Just like you have a home insurance policy in case there's a
              fire - we're here for when crisis strikes.
            </b>
          </p>
        </Container>
      </section>
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
