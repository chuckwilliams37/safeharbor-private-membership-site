import placeholderImage from '@/images/VoluntariaLogo_DropShadow.png' // Replace with your actual image path
import { NextImage } from '@/utils/NextImage'
import { Container } from './Container'

export const Membership = () => {
  return (
    <section className="bg-gray-100 py-12 sm:py-16 lg:py-24">
      <Container size="lg">
        {/* Introduction */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
            And We&apos;re Not Stopping There!
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-700">
            We&apos;re developing the property into a fully equipped off-grid
            sanctuary&hellip; and YOU get to help decide what we upgrade next.
          </p>
        </div>

        {/* Current Status */}
        <div className="mb-12 overflow-hidden rounded-xl bg-white shadow-lg">
          <div className="p-6 sm:p-8">
            <h3 className="mb-4 text-2xl font-bold text-gray-900">
              Current Status
            </h3>
            <p className="mb-6 text-lg text-gray-700">
              Our current infrastructure is basic, boondocks, emergency camping.
              This is a budget bugout solution for an emergency SHTF situation.
            </p>
          </div>
          <NextImage
            src={placeholderImage}
            alt="Current Infrastructure"
            className="h-64 w-full object-cover sm:h-80"
          />
          <div className="p-6 sm:p-8">
            <p className="text-lg text-gray-700">
              If the Sh!t were to hit the fan right now, we have the essentials of
              survival - food, water, shelter, community, and a safe place to go. But we
              don&apos;t have conveniences like water hookups direct to each plot.
            </p>
          </div>
        </div>

        {/* Our Commitment */}
        <div className="mb-12 rounded-xl bg-white p-6 shadow-lg sm:p-8">
          <h3 className="mb-4 text-2xl font-bold text-gray-900">
            Our Commitment
          </h3>
          <p className="text-lg text-gray-700">
            We&apos;re reinvesting 25% of membership revenue into Voluntaria
            upgrades. Buying & maintaining 52 acres of land was &amp; is a massive expense for the three of us.
          </p>
        </div>

        {/* You Decide What's Next */}
        <div className="mb-12 rounded-xl bg-white p-6 shadow-lg sm:p-8">
          <h3 className="mb-4 text-2xl font-bold text-gray-900">
            You Decide What&apos;s Next
          </h3>
          <p className="text-lg text-gray-700">
            As we sell memberships, our members - will drive the
            decision-making on what we build / upgrade next.
          </p>
        </div>

        {/* Poll Options */}
        <div className="strawpoll-embed" id="strawpoll_Dwyo3kGKDyA"
        style={{
          height: '836px',
          maxWidth: '640px',
          width: '100%',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
        }}
        >
          <iframe
            title="StrawPoll Embed"
            id="strawpoll_iframe_Dwyo3kGKDyA"
            src="https://strawpoll.com/embed/Dwyo3kGKDyA"
            style={
              { position: 'static', visibility: 'visible', display: 'block', width: '100%', flexGrow: '1' }
            }
            allowFullScreen
          >Loading...</iframe>
          <script async src="https://cdn.strawpoll.com/dist/widgets.js" />
        </div>
      </Container>
    </section>
  )
}