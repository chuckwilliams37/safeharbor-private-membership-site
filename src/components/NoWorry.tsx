import { NextImage } from '@/utils/NextImage'
import { Container } from './Container'
import markedSafeImg from '@/images/marked_safe.webp'
import membershipResourcesImg from '@/images/membership_resources.webp'
import { ConvertKitLaunchButton } from '@/components/ConvertKitLaunchButton'
import Link from 'next/link'
export const NoWorry = () => {
  return (
    <section className="bg-gray-50 py-8 md:py-16 lg:py-32">
      <Container size="lg" className="mx-auto max-w-6xl">
        {/* Connectivity and Peace of Mind */}
        <div className="mb-12 overflow-hidden rounded-2xl bg-white shadow-xl lg:flex">
          <div className="w-full flex-shrink-0 lg:w-1/2">
            <NextImage
              src={markedSafeImg}
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
                ...for having a birthday party, gardening, or whatever
                they try to make illegal next. At Voluntaria, you&apos;re safe from
                intrusive neighbors and unnecessary interference.
              </p>
              <p>
                We have cell and internet connectivity, so you can still phone
                home during the crisis. We&apos;re remote but not too remote. Cell
                phones work well out here, and we have available a stable, recently upgraded fiber internet service (300mbs download &amp; upload). 
              </p>
              <p>
                Unless there&apos;s an EMP strike or a massive internet outage, you&apos;ll
                stay connected. When the SHTF, you can call your family and
                friends or post updates like &ldquo;Marked safe from the latest
                government shenanigans&rdquo;.
              </p>
            </div>
          </div>
        </div>

               <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200 mx-auto max-w-4xl my-12">
                    <p className="text-base leading-7 text-gray-600">
                      Want to learn more about our vision for community building? Watch two of our founders Chad Cameron and Chuck Williams discuss reimagining community through voluntaryist principles with health advocate Amandha Vollmer. They explore how self-governance and natural law can create more joyful, liberated communities.
                    </p>
                    <p className="mt-2">
                      <Link 
                        href="https://yummy.doctor/video-list/amandha-vollmer-adv-discusses-community-building-with-chad-cameron-and-chuck-williams/"
                        target="_blank"
                        className="text-green-600 hover:underline font-medium"
                      >
                        Watch the full discussion here →
                      </Link>
          </p>
        </div>
       <div className="mt-8 text-center gap-3 flex flex-col sm:flex-row sm:justify-center">
            <a
              href="https://www.voluntaria.community/apply.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg bg-green-600 px-6 py-3 text-lg font-semibold text-white shadow-md transition-colors hover:bg-green-700"
            >
              Apply for Ownership
            </a>
            <ConvertKitLaunchButton href="https://connect.voluntaria.community/products/shm">
              <span className="inline-block mr-2">🏡</span>
              Become a Member
            </ConvertKitLaunchButton>
          </div>
        {/* Membership Benefits */}
        <div className="rounded-2xl bg-white p-6 shadow-xl lg:p-12 mt-4 sm:">
          <h2 className="mb-8 text-3xl font-bold text-gray-900">
            Everything Included in Voluntaria&apos;s Safe Harbor Membership
          </h2>
          <div className="mb-8">
            <NextImage
              src={membershipResourcesImg}
              alt="Membership Benefits"
              className="h-auto w-full rounded-lg"
            />
          </div>
          <div className="space-y-4 text-base text-gray-700 md:text-lg">
            <p>
              Your <Link href="https://safeharbor.voluntaria.community/Voluntaria_Emergency_Retreat_Access_Membership_Contract_v0.1.2025.01.10.0259CT.pdf" target="_blank" className="text-green-600 hover:underline">Voluntaria Safe Harbor Membership</Link> grants you a stay of up to 3
              months on our 52-acre property when/if the SHTF. Whether it&apos;s a
              local threat or a nationwide crisis, Voluntaria is here for you.
            </p>
            <p>Your membership includes:</p>
            <ul className="list-inside list-disc space-y-2 pl-4">
              <li>A lot to park your RV, Van, Car, camper, or tiny home</li>
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
              <li>300 Mbps fiber internet service</li>
              <li>52 acres of lush meadow and extensive forest</li>
              <li>The beautiful 3/4 acre pond</li>
              <li>Ability to hunt and trap game on the property</li>
              <li>As much firewood as you can chop, from the on-site forests</li>
              <li>The community house well, and the South-side well</li>
              <li>
                Filtered drinking water, available at the community house
                (with an off-grid solar powered backup)
              </li>
              <li>
                The on-site freshwater spring, where the banana stand thrives
              </li>
              <li>
                Just 1/4 mile away from Crescent Lake, with an abundance of fish
                like salmon, trout, and bass
              </li>
            </ul>
            <p>
              And remember, you won&apos;t be alone. You&apos;ll join a pre-vetted community
              of like-minded preppers and freedom lovers, ready to help and
              support you through whatever comes our way.
            </p>
          </div>
          <div className="mt-8 text-center gap-3 flex flex-col sm:flex-row sm:justify-center">
            <a
              href="https://www.voluntaria.community/apply.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg bg-green-600 px-6 py-3 text-lg font-semibold text-white shadow-md transition-colors hover:bg-green-700"
            >
              Apply for Ownership
            </a>
            <ConvertKitLaunchButton href="https://connect.voluntaria.community/products/shm">
              <span className="inline-block mr-2">🏡</span>
              Become a Member
            </ConvertKitLaunchButton>
          </div>
        </div>
      </Container>
    </section>
  )
}