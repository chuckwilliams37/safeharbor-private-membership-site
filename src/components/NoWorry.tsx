import { NextImage } from '@/utils/NextImage'
import { Container } from './Container'

export const NoWorry = () => {
  return (
    <section className="bg-gray-50 py-8 md:py-16 lg:py-32">
      <Container size="lg" className="mx-auto max-w-6xl">
        {/* Connectivity and Peace of Mind */}
        <div className="mb-12 overflow-hidden rounded-2xl bg-white shadow-xl lg:flex">
          <div className="w-full flex-shrink-0 lg:w-1/2">
            <NextImage
              src="https://via.placeholder.com/800x600?text=Connectivity"
              alt="Connectivity and peace of mind"
              className="h-64 w-full object-cover lg:h-full"
            />
          </div>
          <div className="p-6 lg:w-1/2 lg:p-12">
            <h2 className="mb-6 text-3xl font-bold text-gray-900">
              You&apos;ll Never Have to Worry About Your Neighbors Snitching on You
            </h2>
            <div className="space-y-4 text-base text-gray-700 md:text-lg">
              <p>
                ...for having a birthday party, praying, gardening, or whatever
                they try to make illegal next. At Voluntaria, you&apos;re safe from
                intrusive neighbors and unnecessary interference.
              </p>
              <p>
                We have cell and internet connectivity, so you can still phone
                home during the crisis. We&apos;re remote but not too remote. Cell
                phones work well out here, and we have stable (but not terribly
                fast) internet service. Fiber is on the horizon.
              </p>
              <p>
                Unless there&apos;s an EMP strike or a massive internet outage, you&apos;ll
                stay connected. When the SHTF, you can call your family and
                friends or post updates like &ldquo;Marked safe from the latest
                government shenanigans&rdquo;.
              </p>
              <p>
                After a long trip, relax on your bed and text updates, rather than
                needing to leave the property just to get a signal. During local
                unrest, you can send your family to safety at Voluntaria
                immediately and stay in touch daily while you handle things back
                home.
              </p>
              <p>
                With Voluntaria&apos;s internet connection, you&apos;ll stay informed about
                your situation back home and any urgent news, so you can be
                updated on when it&apos;s safe to return.
              </p>
            </div>
          </div>
        </div>

        {/* Membership Benefits */}
        <div className="rounded-2xl bg-white p-6 shadow-xl lg:p-12">
          <h2 className="mb-8 text-3xl font-bold text-gray-900">
            Everything Included in Voluntaria&apos;s Safe Harbor Membership
          </h2>
          <div className="mb-8">
            <NextImage
              src="https://via.placeholder.com/1200x600?text=Membership+Benefits"
              alt="Membership Benefits"
              className="h-auto w-full rounded-lg"
            />
          </div>
          <div className="space-y-4 text-base text-gray-700 md:text-lg">
            <p>
              Your Voluntaria Safe Harbor Membership grants you a stay of up to 3
              months on our 52-acre property when/if the SHTF. Whether it&apos;s a
              local threat or a nationwide crisis, Voluntaria is here as a refuge.
            </p>
            <p>Your membership includes:</p>
            <ul className="list-inside list-disc space-y-2 pl-4">
              <li>A lot to park your RV, camper, or tiny home</li>
              <li>
                A 3-month supply of survival food from My Patriot Supply, packed
                in Mylar and good for up to 25 years
              </li>
            </ul>
            <p>You&apos;ll also have shared access to:</p>
            <ul className="list-inside list-disc space-y-2 pl-4">
              <li>
                The community house, with a large kitchen, bathroom, and patio
              </li>
              <li>The community pole barn</li>
              <li>52 acres of lush meadow and extensive forest</li>
              <li>The beautiful 3/4 acre pond</li>
              <li>Ability to hunt and trap game on the property</li>
              <li>As much firewood as you can chop, from the on-site forests</li>
              <li>Thecommunity house well, and the South-side well</li>
              <li>
                Filtered drinking water, available at the community house
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
            <p>
              And remember, you won&apos;t be alone. You&apos;ll join a pre-vetted community
              of like-minded preppers and freedom lovers, ready to help and
              support you through whatever comes our way.
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