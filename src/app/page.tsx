'use client'

// import { Author } from '@/components/Author'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { Introduction } from '@/components/Introduction'
import { NavigationBar } from '@/components/NavigationBar'
// import { ClickableOverview } from '@/components/ClickableOverview'
import { Testimonial } from '@/components/Testimonial'
// import { Testimonials } from '@/components/Testimonials'
import { Benefits } from '@/components/Benefits'
import { Ethos } from '@/components/Ethos'
import avatarImage1 from '@/images/avatars/kevin_fake_ai_sketch_001.png'
// import VoluntariaCallout from '@/components/VoluntariaCallout'
import { Guarantee } from '@/components/Guarrantee'
import { Membership } from '@/components/Membership'
import { NoWorry } from '@/components/NoWorry'
import { PerfectBalance } from '@/components/PerfectBalance'
import { PricingTable } from '@/components/PricingTable'
import { ReliableFood } from '@/components/ReliableFood'
import { ImageSection } from '@/components/ui/ImageSection'
import { ListSection } from '@/components/ui/ListSection'
import { WhyUs } from '@/components/WhyUs'
import Head from 'next/head'

// import { client } from '../../sanity/lib/client'

export default function Home({
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

      <ListSection
        heading={
          <>
            {' '}
            We had to spend over a year looking at properties, sorting
            financing, dealing with legal hurdles and negotiating agreements.
            <br />
            But YOUR bugout planning is as easy as online shopping
          </>
        }
        description={
          <>
            With Voluntaria's Safe Harbor Membership, you don't have to deal
            with everything we went through.
            <br />
            <b> You don't need to figure it all out on your own.</b>
          </>
        }
        bullets={[
          ` You don't need to spend weeks driving across the country, shopping
            for land`,
          `You don't need to find freedom minded business partners or convince
            your friends to go in on land with you…and start from scratch when
            they bail out`,
          `You don't need to figure out financing, or worry about your credit
            score`,
          `You don't need to save for an impossibly-high down payment deposit`,
          `You don't need to be tied down to land.`,
          `You don’t have to fix the wells.`,
          `You don’t have to bush hog the overgrown roads/trails.`,
        ]}
        descriptionAfterBullets={
          <>
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
          </>
        }
      />
      <Benefits />
      <ImageSection
        heading="Surround yourself with people who care enough to prepare"
        isReverse={false}
        imageSrc=""
        invertBg={true}
        description={
          <>
            Even if you never need to bugout…you can still connect with our
            community of like-minded freedom loving preppers.
            <br />
            Everyone who joins the Voluntaria SHM program is like you. We're all
            people who are concerned about the future, and care enough to do
            something about it. We're all willing to invest in emergency
            preparedness.
            <br />
            So if you're looking for community - join us on a group call. Create
            friends and allies with the people who are taking action, just like
            you.
          </>
        }
      />
      <ImageSection
        heading="You can have your bugout plan finished by NEXT WEEK"
        isReverse={true}
        imageSrc=""
        invertBg={false}
        description={
          <>
            It doesn't need to take you years, like it did for us. And there's a
            reason why we say "next week" and not "today". That because the most
            important part of Voluntaria is that our community has a common set
            of values.
            <br />
            So, we'll do a phone call with you first. Because, if you're a
            social justice warrior who "identifies as a cat"…nothing personal it
            just won’t be a good fit.
            <br />
            <b>
              (Sorry…we're looking for like minded but I am sure there is a
              community in California, or perhaps a mental health facility
              (sorry to be redundant).
            </b>
            <br />
            Once you assure us that{' '}
            <b>
              you're not a blue-haired commy leftist who thinks there are 27 or
              more genders
            </b>
            , you can just choose your package…and then you're done!
            <br />
            You'll <b>finally</b> have your food, water, and emergency bugout
            location, all figured out. So no matter what happens - you'll have a
            safe, secure place to go.
          </>
        }
      />
      <ImageSection
        heading="We're betting our lives on Voluntaria - because this is OUR bugout plan too!"
        isReverse={false}
        imageSrc=""
        invertBg={true}
        description={
          <>
            We're concerned preppers, just like you. And when/if the SHTF -
            we'll already be here to welcome you and all of our other Safe
            Harbor members.
            <br />
            So - we're betting our own lives - and our families' lives - on the
            safety, security, and FREEDOM of Voluntaria during a SHTF scenerio.
            <br />
            There are three of us who are all in and failure is not an option.
            This is a business but it’s also our Safe Harbor.
            <br />
            We're not leaving the land - we're creating a like-minded community
            to join us.
            <br />
            Can you say the same about any other bugout option?
          </>
        }
      />
      <WhyUs />
      <ListSection
        heading={
          <>
            {' '}
            There are even wild banana trees on the property
            <br />
            Plentiful fishing just 1 mile away - you don't even need a boat
          </>
        }
        description={
          <>
            Crescent Lake is a fisherman's paradise, with 16,000 acres of
            freshwater, just 1 mile away.
            <br />
            It's common to spot people fishing right off the dock, so you can
            catch your dinner without a boat.
            <br />
            You'll find an abundance of fish in Crescent Lake, including:
          </>
        }
        bullets={[
          ` Salmon`,
          `Lake Trout`,
          `Largemouth Bass`,
          `Dolly Varden`,
          `Bluegill`,
          `Shellcracker`,
          `Black Crappie.`,
          `Chain Pickerel`,
        ]}
        descriptionAfterBullets={
          <>
            Imagine – if the world descends into chaos, you'll be out by the
            lake, enjoying the fresh air and sunshine. <br /> Then you'll come
            home and enjoy your catch of wild salmon, cooked to perfection over
            the fire.
          </>
        }
      />

      <ReliableFood />
      <PerfectBalance />
      <NoWorry />
      <Membership />
      <PricingTable />
      <Guarantee />

      {/* <figure className="mx-5 mt-16">
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
      </figure> */}
      {/* <ManagementTechSection />
      <EmergencyProtocols />
      <Pricing /> */}
      <div>{/* Pricing Support */}</div>
      <div>{/* Legal / Ethics */}</div>
      <div>{/* Conclusion */}</div>
      {/* <Testimonials />
      <Author /> */}
      <Footer />
    </>
  )
}
