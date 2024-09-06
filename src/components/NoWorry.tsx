import { NextImage } from '@/utils/NextImage'
import { Container } from './Container'

export const NoWorry = () => {
  return (
    <section className="py-8 md:py-16 lg:py-32">
      <Container size="lg" className="mx-auto max-w-6xl">
        {/* Connectivity and Peace of Mind */}
        <div className="mb-8 flex flex-col items-center gap-5 rounded-lg bg-white p-6 shadow-md lg:flex-row">
          <div className="mb-6 w-full flex-shrink-0 md:mb-0 lg:w-1/2">
            <NextImage
              src="https://via.placeholder.com/500x300?text=Connectivity"
              alt="Connectivity and peace of mind"
              className="h-auto w-full rounded-lg object-cover"
            />
          </div>
          <div className="md:pl-6 lg:w-1/2">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              You'll Never Have to Worry About Your Neighbors Snitching on You
            </h2>
            <p className="mb-4 text-base text-gray-700 md:text-lg">
              ...for having a birthday party, praying, gardening, or whatever
              they try to make illegal next. At Voluntaria, you’re safe from
              intrusive neighbors and unnecessary interference.
            </p>
            <p className="mb-4 text-base text-gray-700 md:text-lg">
              We have cell and internet connectivity, so you can still phone
              home during the crisis. We're remote but not too remote. Cell
              phones work well out here, and we have stable (but not terribly
              fast) internet service. Fiber is on the horizon.
            </p>
            <p className="mb-4 text-base text-gray-700 md:text-lg">
              Unless there's an EMP strike or a massive internet outage, you'll
              stay connected. When the SHTF, you can call your family and
              friends or post updates like "Marked safe from the latest
              government shenanigans".
            </p>
            <p className="mb-4 text-base text-gray-700 md:text-lg">
              After a long trip, relax on your bed and text updates, rather than
              needing to leave the property just to get a signal. During local
              unrest, you can send your family to safety at Voluntaria
              immediately and stay in touch daily while you handle things back
              home.
            </p>
            <p className="text-base text-gray-700 md:text-lg">
              With Voluntaria's internet connection, you'll stay informed about
              your situation back home and any urgent news, so you can be
              updated on when it's safe to return.
            </p>
          </div>
        </div>

        {/* Membership Benefits */}
        <div className="rounded-lg bg-white p-6 shadow-md">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            Everything Included in Voluntaria's Safe Harbor Membership
          </h2>
          <div className="mb-6">
            <NextImage
              src="https://via.placeholder.com/600x400?text=Membership+Benefits"
              alt="Membership Benefits"
              className="h-auto w-full rounded-lg"
            />
          </div>
          <p className="mb-4 text-base text-gray-700 md:text-lg">
            Your Voluntaria Safe Harbor Membership grants you a stay of up to 3
            months on our 52-acre property when/if the SHTF. Whether it's a
            local threat or a nationwide crisis, Voluntaria is here as a refuge.
          </p>
          <p className="mb-4 text-base text-gray-700 md:text-lg">
            Your membership includes:
          </p>
          <ul className="mb-4 list-inside list-disc text-base text-gray-700 md:text-lg">
            <li>A lot to park your RV, camper, or tiny home</li>
            <li>
              A 3-month supply of survival food from My Patriot Supply, packed
              in Mylar and good for up to 25 years
            </li>
          </ul>
          <p className="mb-4 text-base text-gray-700 md:text-lg">
            You'll also have shared access to:
          </p>
          <ul className="mb-4 list-inside list-disc text-base text-gray-700 md:text-lg">
            <li>
              The community farmhouse, with a large kitchen, bathroom, and patio
            </li>
            <li>The community pole barn</li>
            <li>52 acres of lush meadow and extensive forest</li>
            <li>The beautiful 3/4 acre pond</li>
            <li>Ability to hunt and trap game on the property</li>
            <li>As much firewood as you can chop, from the on-site forests</li>
            <li>The farmhouse well, and the South-side well</li>
            <li>
              Filtered drinking water, available at the community farmhouse
              (with an off-grid solar powered backup)
            </li>
            <li>
              The on-site freshwater spring, perfect for bathing and relaxing
            </li>
            <li>
              Just 1 mile away from Crescent Lake, with an abundance of fish
              like salmon, trout, and bass
            </li>
          </ul>
          <p className="text-base text-gray-700 md:text-lg">
            And remember, you won’t be alone. You’ll join a pre-vetted community
            of like-minded preppers and freedom lovers, ready to help and
            support you through whatever comes our way.
          </p>
          <div className="mt-6 text-center">
            <a
              href="#contact"
              className="inline-block rounded-lg bg-green-600 px-6 py-3 text-white shadow-md hover:bg-green-700"
            >
              Talk to Us About Joining Voluntaria
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}
