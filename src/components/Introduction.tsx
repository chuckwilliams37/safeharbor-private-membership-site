import Link from 'next/link'
import { Container } from '@/components/Container'

export function Introduction() {
  return (
    <section
      id="introduction"
      aria-label="Introduction"
      className="bg-white py-12 sm:py-16 lg:py-24"
    >
      <Container className="mx-auto max-w-4xl">
        <h2 className="mb-8 text-3xl font-bold text-gray-900 sm:text-4xl">
          Are you struggling with any of these prepping challenges?
        </h2>
        
        <div className="space-y-8">
          <Challenge
            title="Limited funds for land investment"
            description="You don&apos;t have enough money to invest in land&hellip; or you do, but you don&apos;t want to put such a big portion of your savings into real estate."
          />
          
          <Challenge
            title="Credit and mortgage concerns"
            description="You don&apos;t have good credit for a mortgage&hellip; or maybe you do, but the banks are such evil scammers, the thought of a mortgage makes you nauseous. Or you&apos;re afraid that if you do buy land, it&apos;ll be confiscated by the government&hellip;"
          />
          
          <Challenge
            title="Flexibility and community concerns"
            description="You&apos;re not sure where you want to live permanently - and a land purchase ties you down. You&apos;re a digital nomad, and you don&apos;t want to commit to one place. You don&apos;t want to be alone in the middle of nowhere &hellip;or worse, surrounded by neighbors who snitch on you, just for living your life."
          />
          
          <Challenge
            title="Lack of rural lifestyle desire"
            description="You don&apos;t even want to live a rural lifestyle&hellip; you just need a bug-out plan in case SHTF."
          />
          
          <Challenge
            title="Land vetting challenges"
            description="You don&apos;t know how to vet land&hellip; you don&apos;t even know what to look for &hellip;or you just don&apos;t have the time to drive around the country, shopping for land."
          />
          
          <Challenge
            title="Difficulties in finding suitable land"
            description="You&apos;ve already tried looking for land, but there&apos;s always something wrong&hellip; maybe it&apos;s so undeveloped, there isn&apos;t even a road into the property&hellip; or, it&apos;s too accessible to the road and neighbors, so if the SHTF, it won&apos;t offer any protection or privacy&hellip; Or, you&apos;re struggling to find land with reliable off-grid water."
          />
        </div>

        <p className="mt-8 text-xl font-bold text-gray-900">
          Or&hellip;you&apos;re just completely overwhelmed and you don&apos;t know where to start.
        </p>

        <div className="mt-12 rounded-lg bg-green-50 p-6">
          <h3 className="mb-4 text-2xl font-bold text-green-800">
            Don&apos;t worry - you&apos;re not alone.
          </h3>
          <p className="text-lg text-gray-700">
            We designed Voluntaria&apos;s Safe Harbor Membership to give you the assurance of a safe place to go, when the SHTF. Without the expense or stress of buying land - or trying to do it all on your own.
          </p>
        </div>

        <div className="mt-12">
          <h3 className="mb-4 text-2xl font-bold text-gray-900">
            You are ALREADY BEHIND on everything you need to do to defend yourself from the Globalists&hellip;
          </h3>
          <h4 className="mb-4 text-xl font-semibold text-gray-800">
            &hellip;We&apos;re here to handle your emergency bug-out plan.
          </h4>
          <p className="mb-4 text-lg font-medium text-gray-700">Let&apos;s just get it done&hellip;</p>
          <ul className="list-inside list-disc space-y-2 text-gray-700">
            <li>This is the easiest, most affordable emergency bug-out in America.</li>
            <li>If/When the SHTF, you&apos;ll join us on our 52 acres in Florida&apos;s beautiful (and easy-to-survive!) climate.</li>
            <li>We&apos;ve got you covered with food, water, and a community of like-minded freedom lovers - just like you.</li>
            <li>When crisis strikes, just bring your RV or tiny home. You can stay for a few weeks - or up to 3 months if you need it.</li>
            <li>No need to buy land or commit long term - you can cancel your membership, anytime.</li>
          </ul>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="https://voluntaria.ck.page/products/voluntarias-safeharbor-private-newsletter"
            className="inline-block rounded-lg bg-green-600 px-6 py-3 text-lg font-semibold text-white transition-colors hover:bg-green-700"
            data-commerce
          >
            Get our updates straight to your inbox
            <span aria-hidden="true" className="ml-2">&rarr;</span>
          </Link>
        </div>
      </Container>
    </section>
  )
}

function Challenge({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-lg bg-gray-50 p-6">
      <h3 className="mb-2 text-xl font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  )
}
