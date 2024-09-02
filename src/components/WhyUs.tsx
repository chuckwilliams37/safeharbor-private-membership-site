import Image from 'next/image'
import React from 'react'
import { Container } from './Container'
import { SectionHeading } from './SectionHeading'
import campingScene from '@/images/camping-in-the-oaks.png'
import { NextImage } from '@/utils/NextImage'

export const WhyUs = () => {
  return (
    <section
      id="whyus"
      aria-labelledby="whyus-title"
      className="scroll-mt-14 py-12 sm:scroll-mt-32 sm:py-16 "
    >
      <Container size="lg">
        <SectionHeading number="2">
          Why Voluntaria is the ideal bugout location when/if the SHTF
        </SectionHeading>
        <div className="mt-6 overflow-hidden rounded-3xl bg-white">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="relative">
                <NextImage
                  src={'/assets/images/water-security.jpg'}
                  alt="water-security"
                  className="absolute h-full w-full object-cover shadow-xl ring-1 ring-gray-400/10"
                  width={2432}
                  height={1442}
                />
              </div>
              <div className=" px-6 py-16 lg:px-8">
                <div className="max-w-lg">
                  <h2 className="text-base font-semibold leading-7 text-green-600">
                    Excellent water security with FOUR redundant sources of
                    fresh water
                  </h2>

                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    Your water source is the most essential element of survival.
                    <br />
                    Any solid emergency preparedness plan includes a source of
                    fresh water, and at least one back-up source.
                  </p>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    At Voluntaria, we've got you covered with multiple
                    redundant, off-grid sources of fresh drinking water:
                  </p>

                  <ol className="my-6 list-decimal space-y-3 text-lg">
                    <li>
                      <span className="font-bold">The Farmhouse Well</span>
                      <ul className="list-roman ml-2 text-gray-600">
                        <li>
                          The first well is located by the community farmhouse,
                          in the South-middle part of the property.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <span className="font-bold">The South-Side Well</span>
                      <ul className="list-roman ml-2 text-gray-600">
                        <li>
                          There is a second well located on the South edge of
                          the property
                        </li>
                      </ul>
                      <p className="font-semibold text-gray-600">
                        No need to worry about the well pumps breaking when you
                        need them - the pumps are quite new and are estimated to
                        last another 15 - 18 years.
                      </p>
                    </li>
                    <li>
                      <span className="font-bold">The Fresh Water Spring</span>
                      <ul className="list-roman ml-2 text-gray-600">
                        <li>
                          A spring runs through the property from the West side
                          to the North-middle, exiting at the North end of the
                          property
                        </li>
                        <li>
                          It creates a decent-sized stream; 3 - 4 feet wide
                        </li>
                      </ul>
                    </li>
                    <li>
                      <span className="font-bold">The Pond</span>
                      <ul className="list-roman ml-2 text-gray-600">
                        <li>
                          You'll also find water in the property's 3/4 acre pond
                        </li>
                        <li>The pond can easily be stocked with fish</li>
                      </ul>
                      <p className="font-semibold text-gray-600">
                        We have plenty of water on the property.
                      </p>
                    </li>
                  </ol>
                  <h2 className="mb-3  text-lg font-bold leading-7">
                    Our Brand New Off-Grid Water Filtration System
                  </h2>
                  <ul className="list-decimal text-lg text-gray-600">
                    <li>
                      Crescent Lake is just 1 mile from the property, easily
                      accessible by walking, bike, or car
                    </li>
                    <li>
                      No matter what happens, you'll always have access to water
                    </li>
                    <li>
                      Not to mention - the abundance of fish! (More on that
                      later…)
                    </li>
                  </ul>
                  <h2 className="mb-3 mt-6 text-lg font-bold leading-7 ">
                    We're walking distance from Florida's 3rd largest lake!
                  </h2>
                  <ul className="list-decimal text-lg text-gray-600">
                    <li>
                      We just installed the new water filtration system, in
                      November of 2023
                    </li>
                    <li>
                      Unlike Reverse-Osmosis (RO) systems, this system returns
                      calcium and magnesium back into your water, instead of
                      leeching out minerals
                    </li>
                    <li>
                      No power is needed to run the system, except for the water
                      pump
                    </li>
                    <li>
                      The water pump has backup power from solar panels - so
                      you'll never lose access to water purification
                    </li>
                    <li>
                      The filtered water is available from the taps at the
                      community farmhouse - just fill up a few jugs of water as
                      needed, or drive your RV over to the house
                    </li>
                  </ul>
                  <h2 className="mb-3 mt-6 text-lg font-bold leading-7 ">
                    You'll enjoy abundant game for hunting and trapping -
                    without even leaving the land
                  </h2>
                  <p className="text-lg font-medium text-gray-600">
                    We've spotted all sorts of game animals on the property,
                    including:
                  </p>
                  <ul className="list-decimal text-lg text-gray-600">
                    <li>Wild turkeys</li>
                    <li>Deer</li>
                    <li>Black bears</li>
                    <li>Alligators</li>
                  </ul>
                  <p className="text-lg font-semibold text-gray-600">
                    While everyone else is eating bugs and Bill Gates' fake
                    meat, you'll be eating fresh, wild meat and fish that you've
                    caught yourself. Unless you are a vegetarian/vegan and in
                    that case we have excellent soil and you can help grow all
                    sorts of fruits and vegatables.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
