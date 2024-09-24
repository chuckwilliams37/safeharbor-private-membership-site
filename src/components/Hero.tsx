import Image from 'next/image'
import { GridPattern } from '@/components/GridPattern'
import coverImage from '@/images/newsletter_cover_photo.png'

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
            <Image className="w-full rounded-xl" src={coverImage} alt="Voluntaria Safe Harbor" priority />
          </div>
        </div>

        <div className="relative px-4 sm:px-6 lg:col-span-7 lg:pb-14 lg:pl-16 lg:pr-0 xl:pl-20">
          <p className="mt-4 text-xl text-slate-700 font-semibold">
            Calling all freedom-lovers, redpilled preppers, libertarians &
            voluntaryists&hellip;
          </p>
        </div>
        <div className="bg-white pb-8 pt-16 sm:pb-16 lg:col-span-7 lg:bg-transparent lg:pb-0 lg:pl-16 lg:pt-0 xl:pl-20">
          <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
            <h3 className="text-xl font-bold text-green-800 mb-4">
              Is creating a bug-out plan too expensive, confusing and
              overwhelming&hellip;
            </h3>
            <h3 className="text-lg font-bold text-green-800 md:text-xl mb-8">
              &hellip;not to mention, impossible to do alone?
            </h3>
            <h1 className="text-3xl font-extrabold text-green-800 lg:text-4xl mb-6">
              With Voluntaria&apos;s Safe Harbor Membership, there&apos;s no need to buy
              your own land&hellip;
            </h1>
            <h3 className="text-lg font-bold text-green-800 md:text-xl">
              Just bring your RV or Tiny Home - we&apos;ll provide the land,
              drinking water, and freedom minded community&hellip;
            </h3>
          </div>
        </div>
      </div>
    </header>
  )
}