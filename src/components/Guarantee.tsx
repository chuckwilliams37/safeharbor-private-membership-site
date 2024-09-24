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
              will take to reach that level, but we&apos;re excited about Voluntaria
              and think the rest of the world will be too. We&apos;re getting booked on
              a number of podcasts talking about our unique offering, so we don&apos;t
              think it will be long before we are sold out.
            </p>
            <p>
              Lock in your price before we hit hyper-inflation. Depending on
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
            90-Day Money Back Guarantee
          </h3>
          <div className="space-y-4 text-base text-gray-700 md:text-lg">
            <p>
              We want you to be completely comfortable and at ease with your
              Voluntaria Safe Harbor Membership. The entire point of your
              membership is to put your mind at ease… we don&apos;t want any of our
              members to have buyer&apos;s remorse.
            </p>
            <p>
              That&apos;s why we&apos;ll give you a full 90 days to change your mind. No
              problem - if you change your mind for any reason, we&apos;ll give you a
              full refund on your membership AND your food supply (if unused) will
              be resold to an incoming party.
            </p>
            <p>
              So, you can reserve your spot today at today&apos;s prices. You won&apos;t
              need to worry about lots selling out or our prices going up. And if
              you change your mind later, we&apos;ll give you a full refund within the
              initial 90 days. Imagine if your home insurance policy gave you a
              full refund after 3 months… it would be unheard of. That&apos;s
              essentially 3 months of free coverage.
            </p>
            <p>
              But we&apos;re not an insurance company - we&apos;re concerned preppers &
              freedom lovers, just like you. So, our top priority is that everyone
              at Voluntaria is here voluntarily!
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