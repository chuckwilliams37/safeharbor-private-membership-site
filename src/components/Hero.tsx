import Image from 'next/image'

import { Button } from '@/components/Button'
import { GridPattern } from '@/components/GridPattern'
import { StarRating } from '@/components/StarRating'
import coverImage from '@/images/chuck_williams_Aerial_view_of_a_serene_oak_forest_camping_retre_b1dbc57f-666a-41d9-955e-6bd0157e9770.png';

function Testimonial() {
  return (
    <figure className="relative mx-auto max-w-md text-center lg:mx-0 lg:text-left">
      <div className="flex justify-center text-green-600 lg:justify-start">
        <StarRating />
      </div>
      <blockquote className="mt-2">
        <p className="font-display text-xl font-medium text-slate-900">
          “Voluntaria is redefining my understanding of community. It&apos;s the
          sanctuary where I truly connect with the land and others who share my
          vision of freedom. Safeharbor is one way we can share this with others.”
        </p>
      </blockquote>
      <figcaption className="mt-2 text-sm text-slate-500">
        <strong className="font-semibold text-green-600 before:content-['—_']">
          Chuck Williams
        </strong>
        , Co-Founder of Voluntaria
      </figcaption>
    </figure>
  )
}

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
            <Image className="w-full" src={coverImage} alt="" priority />
          </div>
        </div>
        <div className="relative px-4 sm:px-6 lg:col-span-7 lg:pb-14 lg:pl-16 lg:pr-0 xl:pl-20">
          <div className="hidden lg:absolute lg:-top-32 lg:bottom-0 lg:left-[-100vw] lg:right-[-100vw] lg:block lg:bg-slate-100" />
          <Testimonial />
        </div>
        <div className="bg-white pt-16 lg:col-span-7 lg:bg-transparent lg:pl-16 lg:pt-0 xl:pl-20">
          <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
            <h1 className="font-display text-5xl font-extrabold text-slate-900 sm:text-6xl">
              Fortify Your Freedom
            </h1>
            <p className="mt-4 text-3xl text-slate-600">
              In moments of crisis when the future seems unsure, Voluntaria's SafeHarbor Private Membership Emergency Support Plan
              emerges as your Florida oak forest retreat to gather together and
              support one another.
            </p>
            <div className="mt-8 flex gap-4">
              <Button href="#join-today" color="green">
                Join SafeHarbor Today
              </Button>
              <Button
                href="#newsletter-sign-up"
                variant="outline"
                color="green"
              >
                Newsletter Sign-up
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
