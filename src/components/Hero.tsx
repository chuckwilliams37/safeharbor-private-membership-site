import Image from 'next/image'
import { GridPattern } from '@/components/GridPattern'
import coverImage from '@/images/newsletter_cover_photo.png'
import Link from 'next/link'

export function Hero() {
  return (
    <header className="overflow-hidden bg-slate-100 lg:bg-transparent lg:px-5">
      <div className="mx-auto grid max-w-6xl grid-cols-1 grid-rows-[auto_1fr] gap-y-16 pt-16 md:pt-20 lg:grid-cols-12 lg:gap-y-20 lg:px-3 lg:pb-36 lg:pt-20 xl:py-32">
        <div className="relative flex items-end lg:col-span-5 lg:row-span-2">
          <div className="absolute -bottom-12 -top-20 left-0 right-1/2 z-10 rounded-br-6xl bg-green-600 text-white/10 md:bottom-8 lg:-inset-y-32 lg:left-[-100vw] lg:right-full lg:-mr-40">
            <GridPattern
              x="100%"
              y="100%"
              patternTransform="translate(112 64)"
            />
          </div>
          <div className="relative z-10 mx-auto flex w-64 rounded-xl bg-slate-600 shadow-xl md:w-80 lg:w-auto">
            <Link href="https://voluntaria.community/" target="_blank" rel="noopener noreferrer">
              <Image className="w-full rounded-xl" src={coverImage} alt="Voluntaria Safe Harbor" priority />
            </Link>
          </div>
        </div>

        <div className="relative px-4 sm:px-6 lg:col-span-7 lg:pb-2 lg:pl-16 lg:pr-0 xl:pl-20">
          <p className="mt-4 text-4xl text-slate-700 font-black">
            Calling all freedom-lovers, redpilled preppers, libertarians &amp;
            voluntaryists&hellip;
          </p>
        </div>
        <div className="bg-white pb-24 pt-0 sm:pb-16 lg:col-span-7 lg:bg-transparent lg:pb-0 lg:pl-16 lg:pt-0 xl:pl-20">
          <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
            <h3 className="text-xl font-bold text-green-800 mb-4">
              If you&apos;re the kind of person who &hellip;
            </h3>
            <h3 className="text-lg font-bold text-green-800 md:text-xl mb-8">
              &hellip;wants to live a life of freedom and self sovereignty&hellip;
            </h3>
            <h3 className="text-lg font-bold text-green-800 md:text-xl mb-8">
              &hellip;believes in the sovereignty of nature and human rights&hellip;
            </h3>
            <h3 className="text-lg font-bold text-green-800 md:text-xl mb-8">
              &hellip;prefers the choice to teach their own family or grow their own food&hellip;
            </h3>
            <h1 className="text-3xl font-extrabold text-green-800 lg:text-4xl mb-6">
            &hellip; We&apos;re offering Voluntaria&apos;s Safe Harbor Emergency &amp; Retreat Access Membership to kick-start your peace of mind&hellip;
            </h1>
            <h3 className="text-lg font-bold text-green-800 md:text-xl">
              Just bring your RV or Tiny Home - we&apos;ll provide the land,
              drinking water, and freedom-minded community&hellip;
            </h3>
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
    </header>
  )
}