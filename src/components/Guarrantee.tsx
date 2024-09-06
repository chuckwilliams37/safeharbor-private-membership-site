import { Container } from './Container'

export const Guarantee = () => {
  return (
    <section className="bg-gray-100 py-8 sm:py-16 lg:py-32">
      <Container size="lg">
        {/* Early-Bird Pricing */}
        <div className="mb-8 rounded-lg bg-white p-6 shadow-md">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            Subscribe Now for Early-Bird Pricing
          </h2>
          <p className="mb-4 text-base text-gray-700 md:text-lg">
            Right now, we're offering a basic boondocks solution at basic
            economy prices. As we raise money from membership sales, we'll be
            upgrading the property infrastructure. More solar power? A chicken
            coop? Greenhouses? We'll build out whatever our members prioritize.
          </p>
          <p className="mb-4 text-base text-gray-700 md:text-lg">
            Once we sell 25 annual memberships, we'll reinvest $10,000 into the
            property - and naturally, we'll increase the price to reflect those
            upgrades. Our pricing will increase once we sell 25 memberships, and
            it will only go up from there.
          </p>
          <p className="mb-4 text-base text-gray-700 md:text-lg">
            But our founding members will enjoy all infrastructure upgrades at
            current prices – locked in for 3 years. We don't know how long it
            will take to reach that level, but we're excited about Voluntaria
            and think the rest of the world will be too. We’re getting booked on
            a number of podcasts talking about our unique offering, so we don’t
            think it will be long before we are sold out.
          </p>
          <p className="text-base text-gray-700 md:text-lg">
            Lock in your price before we hit hyper-inflation. Depending on
            inflation and how fast the global economy devalues the dollar, we
            might need to raise prices substantially just to keep pace. But our
            members will lock in the price for 3 years, so even though our
            currency isn't stable, your bug-out plan is!
          </p>
          <div className="mt-6 text-center">
            <a
              href="#contact"
              className="inline-block rounded-lg bg-green-500 px-3 py-3 text-white shadow-md hover:bg-green-600 sm:px-6"
            >
              Talk to Us About Joining Voluntaria
            </a>
          </div>
        </div>

        {/* 90-Day Money Back Guarantee */}
        <div className="rounded-lg bg-white p-6 shadow-md">
          <h3 className="mb-4 text-2xl font-semibold text-gray-900">
            90-Day Money Back Guarantee
          </h3>
          <p className="mb-4 text-base text-gray-700 md:text-lg">
            We want you to be completely comfortable and at ease with your
            Voluntaria Safe Harbor Membership. The entire point of your
            membership is to put your mind at ease… we don’t want any of our
            members to have buyer’s remorse.
          </p>
          <p className="mb-4 text-base text-gray-700 md:text-lg">
            That’s why we’ll give you a full 90 days to change your mind. No
            problem - if you change your mind for any reason, we’ll give you a
            full refund on your membership AND your food supply (if unused) will
            be resold to an incoming party.
          </p>
          <p className="mb-4 text-base text-gray-700 md:text-lg">
            So, you can reserve your spot today at today’s prices. You won’t
            need to worry about lots selling out or our prices going up. And if
            you change your mind later, we’ll give you a full refund within the
            initial 90 days. Imagine if your home insurance policy gave you a
            full refund after 3 months… it would be unheard of. That’s
            essentially 3 months of free coverage.
          </p>
          <p className="text-base text-gray-700 md:text-lg">
            But we’re not an insurance company - we’re concerned preppers &
            freedom lovers, just like you. So, our top priority is that everyone
            at Voluntaria is here voluntarily!
          </p>
          <div className="mt-6 text-center">
            <a
              href="#contact"
              className="inline-block rounded-lg bg-green-500 px-3 py-3 text-white shadow-md hover:bg-green-600 sm:px-6"
            >
              Talk to Us About Joining Voluntaria
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}
