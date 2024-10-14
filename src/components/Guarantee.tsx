import { Container } from './Container'

export const Guarantee = () => {
  return (
    <section className="bg-gray-100 py-12 sm:py-16 lg:py-24">
      <Container size="lg">
        {/* Early-Bird Pricing */}
        <div className="mb-12 rounded-lg bg-white p-6 shadow-lg sm:p-8">
          <h2 className="mb-6 text-3xl font-bold text-gray-900">
            Subscribe Now for Early-Bird Pricing
          </h2>
          <div className="space-y-4 text-base text-gray-700 md:text-lg">
            <p>
              Right now, we&apos;re offering a basic boondocks solution at basic
              economy prices. As we raise money from membership sales, we&apos;ll be
              upgrading the property infrastructure. More solar power? A chicken
              coop? Greenhouses? We&apos;ll build out whatever our members prioritize.
            </p>
            <p>
              Once we sell 25 annual memberships, we&apos;ll reinvest $10,000 into the
              property - and naturally, we&apos;ll increase the price to reflect those
              upgrades. Our pricing will increase once we sell 25 memberships, and
              it will only go up from there.
            </p>
            <p>
              But our founding members will enjoy all infrastructure upgrades at
              current prices – locked in for 3 years. We don&apos;t know how long it
              will take to reach, but we&apos;re excited about Voluntaria
              and think the rest of the world will be too. We&apos;re getting booked on
              a number of podcasts talking about our unique offering, so we don&apos;t
              think it will be long before we are sold out.
            </p>
            <p>
              We suggest locking in your price before we hit hyper-inflation. Depending on
              inflation and how fast the global economy devalues the dollar, we
              might need to raise prices substantially just to keep pace. But our
              members will lock in the price for 3 years, so even though our
              currency isn&apos;t stable, your bug-out plan is!
            </p>
          </div>
          <div className="mt-8 text-center">
            <a
              href="#contact"
              className="inline-block rounded-lg bg-green-600 px-6 py-3 text-lg font-semibold text-white shadow-md transition-colors hover:bg-green-700"
            >
              Talk to Us About Joining Voluntaria
            </a>
          </div>
        </div>

        {/* 90-Day Money Back Guarantee */}
        <div className="rounded-lg bg-white p-6 shadow-lg sm:p-8">
          <h3 className="mb-6 text-2xl font-semibold text-gray-900">
            30-Day Money Back Guarantee
          </h3>
          <div className="space-y-4 text-base text-gray-700 md:text-lg">
            <p>
              Your peace of mind is our top priority. We&apos;re confident you&apos;ll love your
              Voluntaria Safe Harbor Membership, but we want you to feel completely at ease.
            </p>
            <p>
              That&apos;s why we offer a full 30-day money-back guarantee. If you change your mind
              for any reason, we&apos;ll refund your membership (pro-rated) and resell unused food supply to the next member.
            </p>
            <p>
              Lock in today&apos;s prices with confidence. You&apos;ll have a full month to experience
              Voluntaria risk-free &ndash; that&apos;s unheard of in the insurance world!
            </p>
            <p>
              We&apos;re preppers and freedom enthusiasts just like you, committed to ensuring
              everyone at Voluntaria is here voluntarily. ;-)
            </p>
          </div>
          <div className="mt-8 text-center">
            <a
              href="#contact"
              className="inline-block rounded-lg bg-green-600 px-6 py-3 text-lg font-semibold text-white shadow-md transition-colors hover:bg-green-700"
            >
              Talk to Us About Joining Voluntaria
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}