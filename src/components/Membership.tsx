import placeholderImage from '@/images/VoluntariaLogo_DropShadow.png' // Replace with your actual image path
import { NextImage } from '@/utils/NextImage'
import { Container } from './Container'

export const Membership = () => {
  return (
    <section className="bg-gray-100 py-8 sm:py-16 lg:py-32">
      <Container size="lg">
        {/* Introduction */}
        <div className="mb-8">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            And We're Not Stopping There!
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            We're developing the property into a fully equipped off-grid
            sanctuary…
            <br />
            …and YOU get to help decide what we upgrade next.
          </p>
        </div>

        {/* Current Status */}
        <div className="mb-8 rounded-lg bg-white p-6 shadow-md">
          <h3 className="mb-2 text-xl font-bold text-gray-900">
            Current Status
          </h3>
          <p className="mb-4 text-base text-gray-700 md:text-lg">
            Our current infrastructure is basic, boondocks, emergency camping.
            This is a budget bugout solution for an emergency SHTF situation.
          </p>

          <NextImage
            src={placeholderImage}
            alt="Current Infrastructure"
            className="mb-6 h-64 w-full rounded-lg object-cover"
          />

          <p className="text-base text-gray-700 md:text-lg">
            If the Sh!t were to hit the fan right now, we have the essentials of
            survival - food, water, community, and a safe place to go. But we
            don't have conveniences like water hookups direct to each plot, and
            we only have one bathroom.
          </p>
        </div>

        {/* Our Commitment */}
        <div className="mb-8 rounded-lg bg-white p-6 shadow-md">
          <h3 className="mb-2 text-xl font-bold text-gray-900">
            Our Commitment
          </h3>
          <p className="text-base text-gray-700 md:text-lg">
            We're reinvesting 25% of membership revenue into Voluntaria
            upgrades. Buying 52 acres of land is a massive expense. At this
            point, we've put everything we have just into buying the land and
            getting it functional.
          </p>
        </div>

        {/* You Decide What’s Next */}
        <div className="mb-8 rounded-lg bg-white p-6 shadow-md">
          <h3 className="mb-2 text-xl font-bold text-gray-900">
            You Decide What’s Next
          </h3>
          <p className="text-base text-gray-700 md:text-lg">
            As we sell memberships, we're putting 25% of membership revenue back
            into the property. And you - our members - will drive the
            decision-making on what we build next.
          </p>
        </div>

        {/* Poll Options */}
        <div className="rounded-lg bg-white p-6 shadow-md">
          <h3 className="mb-4 text-xl font-bold text-gray-900">
            What Is Most Important to You?
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { label: 'Chicken coops', icon: '🐔' },
              { label: 'More bathrooms', icon: '🚻' },
              { label: 'Solar panels', icon: '☀️' },
              { label: 'Propane for hot showers', icon: '🚿' },
              { label: 'A greenhouse', icon: '🌱' },
            ].map((item, index) => (
              <button
                key={index}
                className="flex items-center rounded-lg bg-green-500 px-4 py-2 text-white shadow-md hover:bg-green-600"
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="ml-2 text-base md:text-lg">{item.label}</span>
              </button>
            ))}
          </div>
          <p className="mt-6 text-base text-gray-700 md:text-lg">
            …or something else? This is a community-driven project, a community
            by the people for the people!...and the sky is the limit.
          </p>
        </div>
      </Container>
    </section>
  )
}
