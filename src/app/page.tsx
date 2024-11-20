'use client'

import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { Introduction } from '@/components/Introduction'
import { NavigationBar } from '@/components/NavigationBar'
import { Testimonial } from '@/components/Testimonial'
import { Benefits } from '@/components/Benefits'
import { Ethos } from '@/components/Ethos'
import avatarImage1 from '@/images/chad/Screenshot 2024-10-11 155120.png'
import coreTeamImage from '@/images/core_team.png'

import landPhoto002 from '@/images/property/Screenshot 2024-10-11 165554.png'
import landPhoto003 from '@/images/property/Screenshot 2024-10-11 170226.png'
import landPhoto004 from '@/images/property/Screenshot 2024-10-11 170253.png'
import landPhoto005 from '@/images/property/Screenshot 2024-10-11 170359.png'
import landPhoto006 from '@/images/property/Screenshot 2024-10-11 170408.png'

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
import { ConvertKitLaunchButton } from '@/components/ConvertKitLaunchButton'
import Link from 'next/link'

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
          My partners, Chuck, Santori and I co-founded Voluntaria to create a
          safe haven from whatever crisis may come next.
          <br />
          <br />
          And let me tell you - it was NOT easy.
        </p>
      </Testimonial>
      <NavigationBar />
      <Ethos />
      <ListSection
        heading={
          <>
            We spent over a year looking at properties, sorting
            financing, dealing with legal hurdles and negotiating agreements.
            <br />
            <br />
            But now, we&apos;re making YOUR bugout planning as easy as online shopping.
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
          `You don't need to hunt down freedom minded business partners or convince
            your friends to go in on land with you, then worry about starting from scratch when
            they bail out`,
          `You don't need to figure out financing, or worry about your credit
            score`,
          `You don't need to save for an impossibly-high down payment deposit`,
          `You don't need to be tied down to land. Transient ownerships are encouraged!`,
          `You don't have to fix the wells.`,
          `You don't have to bush hog the overgrown roads/trails.`,
        ]}
        descriptionAfterBullets={
          <>
            <div className="mb-6 text-xl">

              You don&apos;t have to do any of it&hellip; &nbsp;
              <span className="font-bold text-green-600">
                &hellip;We&apos;ve got you covered.
              </span>
            </div>
            <b>
              Voluntaria&apos;s Safe Harbor is an affordable membership that gives
              you access to a safe bugout location and community, when/if the
              SHTF. Just like you have a home insurance policy in case there&apos;s a
              fire - we&apos;re here in case of a crisis.
            </b>
          </>
        }
      />
      <div className="mt-12 text-center">
          <Link
            href="https://voluntaria.kit.com/666e05e5c0"
            className="inline-block rounded-lg bg-green-600 px-6 py-3 text-lg font-semibold text-white transition-colors hover:bg-green-700"
            data-uid="666e05e5c0"
            target="_blank"
          >
            Get our updates straight to your inbox
            <span aria-hidden="true" className="ml-2">&rarr;</span>
          </Link>
        </div>
      <Benefits />
      <ImageSection
        heading="Surround yourself with people who care enough to prepare"
        isReverse={false}
        imageSrc={coreTeamImage}
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
        imageSrc={landPhoto003}
        invertBg={false}
        description={
          <>
            It doesn&apos;t need to take you years, like it did for us. And there&apos;s a
            reason why we say &ldquo;next week&rdquo; and not &ldquo;today&rdquo;. That&apos;s because the most
            important part of Voluntaria is that our community has a common set
            of values.
            <br />
            So, we&apos;ll do a phone call with you first. Because, if you&apos;re a
            social justice warrior who &ldquo;identifies as a cat&rdquo;&hellip;nothing personal it
            just won&apos;t be a good fit.
            <br />
            Once you assure us that{' '}
            <b>
              we&apos;re all on the same page
            </b>
            , you can just resolve payment, and your membership is secured for 1 year!
            <br />
            You&apos;ll <b>finally</b> have a bugout location, all figured out in the event of the next crisis.
            So no matter what happens - you&apos;ll have a
            safe, secure place to go.
          </>
        }
      />
      <div className="mt-8 text-center gap-3 flex flex-col sm:flex-row sm:justify-center">
        <a
          href="https://www.voluntaria.community/apply.html"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-lg bg-green-600 px-6 py-3 text-lg font-semibold text-white shadow-md transition-colors hover:bg-green-700"
        >
          Apply for Ownership
        </a>
        <ConvertKitLaunchButton href="https://voluntaria.kit.com/products/voluntaria-premium-annual-membership">
          <span className="inline-block mr-2">🏡</span>
          Become a Member
        </ConvertKitLaunchButton>
      </div>
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