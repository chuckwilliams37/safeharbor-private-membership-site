'use client'

import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { Introduction } from '@/components/Introduction'
import { NavigationBar } from '@/components/NavigationBar'
import { Testimonial } from '@/components/Testimonial'
import { Benefits } from '@/components/Benefits'
import { Ethos } from '@/components/Ethos'
import avatarImage1 from '@/images/avatars/kevin_fake_ai_sketch_001.png'
import { Guarantee } from '@/components/Guarantee'
import { Membership } from '@/components/Membership'
import { NoWorry } from '@/components/NoWorry'
import { PerfectBalance } from '@/components/PerfectBalance'
import { PricingTable } from '@/components/PricingTable'
import { ReliableFood } from '@/components/ReliableFood'
import { ImageSection } from '@/components/ui/ImageSection'
import { ListSection } from '@/components/ui/ListSection'
import { WhyUs } from '@/components/WhyUs'
import Head from 'next/head'

export default function Home({
  params: { inviteCode },
}: {
  params: { inviteCode: string }
}) {
  return (
    <div className="bg-gray-50 text-gray-900">
      <Head>
        <script
          src="https://voluntaria.ck.page/commerce.js"
          async
          defer
        ></script>
      </Head>
      <Hero />
      <NavigationBar />
      <Introduction />
      <Testimonial
        id="testimonial-from-kevin-beamish"
        author={{
          name: 'Chad Cameron',
          role: 'Voluntaria Co-Founder',
          image: avatarImage1,
        }}
        hasStars={false}
      >
        <h2 className="font-bold">
          Hi - I&apos;m Chad Cameron, Co-Founder of Voluntaria.
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
      <ListSection
        heading={
          <>
            We had to spend over a year looking at properties, sorting
            financing, dealing with legal hurdles and negotiating agreements.
            <br />
            But YOUR bugout planning is as easy as online shopping
          </>
        }
        description={
          <>
            With Voluntaria&apos;s Safe Harbor Membership, you don&apos;t have to deal
            with everything we went through.
            <br />
            <b> You don&apos;t need to figure it all out on your own.</b>
          </>
        }
        bullets={[
          `You don't need to spend weeks driving across the country, shopping
            for land`,
          `You don't need to find freedom minded business partners or convince
            your friends to go in on land with you&hellip;and start from scratch when
            they bail out`,
          `You don't need to figure out financing, or worry about your credit
            score`,
          `You don't need to save for an impossibly-high down payment deposit`,
          `You don't need to be tied down to land.`,
          `You don't have to fix the wells.`,
          `You don't have to bush hog the overgrown roads/trails.`,
        ]}
        descriptionAfterBullets={
          <>
            You don&apos;t have to do any of it&hellip; <br />
            <span className="font-bold text-green-600">
              &hellip;We&apos;ve got you covered.
            </span>
            <br />
            <b>
              Voluntaria&apos;s Safe Harbor is an affordable membership that gives
              you access to a safe bugout location and community, when/if the
              SHTF. Just like you have a home insurance policy in case there&apos;s a
              fire - we&apos;re here for when crisis strikes.
            </b>
          </>
        }
      />
      <Benefits />
      <ImageSection
        heading="Surround yourself with people who care enough to prepare"
        isReverse={false}
        imageSrc="https://via.placeholder.com/800x600?text=Community+Image"
        invertBg={true}
        description={
          <>
            Even if you never need to bugout&hellip;you can still connect with our
            community of like-minded freedom loving preppers.
            <br />
            Everyone who joins the Voluntaria SHM program is like you. We&apos;re all
            people who are concerned about the future, and care enough to do
            something about it. We&apos;re all willing to invest in emergency
            preparedness.
            <br />
            So if you&apos;re looking for community - join us on a group call. Create
            friends and allies with the people who are taking action, just like
            you.
          </>
        }
      />
      <ImageSection
        heading="You can have your bugout plan finished by NEXT WEEK"
        isReverse={true}
        imageSrc="https://via.placeholder.com/800x600?text=Bugout+Plan+Image"
        invertBg={false}
        description={
          <>
            It doesn&apos;t need to take you years, like it did for us. And there&apos;s a
            reason why we say &ldquo;next week&rdquo; and not &ldquo;today&rdquo;. That because the most
            important part of Voluntaria is that our community has a common set
            of values.
            <br />
            So, we&apos;ll do a phone call with you first. Because, if you&apos;re a
            social justice warrior who &ldquo;identifies as a cat&rdquo;&hellip;nothing personal it
            just won&apos;t be a good fit.
            <br />
            <b>
              (Sorry&hellip;we&apos;re looking for like minded but I am sure there is a
              community in California, or perhaps a mental health facility
              (sorry to be redundant).
            </b>
            <br />
            Once you assure us that{' '}
            <b>
              you&apos;re not a blue-haired commy leftist who thinks there are 27 or
              more genders
            </b>
            , you can just choose your package&hellip;and then you&apos;re done!
            <br />
            You&apos;ll <b>finally</b> have your food, water, and emergency bugout
            location, all figured out. So no matter what happens - you&apos;ll have a
            safe, secure place to go.
          </>
        }
      />
      <WhyUs />
      <ReliableFood />
      <PerfectBalance />
      <NoWorry />
      <Membership />
      <PricingTable />
      <Guarantee />
      <Footer />
    </div>
  )
}