import { NextImage } from '@/utils/NextImage'
import { Container } from './Container'
import { SectionHeading } from './SectionHeading'
import Link from 'next/link'

export const WhyUs = () => {
  return (
    <section
      id="shtf"
      aria-labelledby="shtf-title"
      className="scroll-mt-12 py-16 sm:scroll-mt-12 sm:py-20 lg:py-32 bg-gray-50"
    >
      <Container size="lg">
        <SectionHeading number="3">
          Why Voluntaria is the ideal bugout location when/if the SHTF
        </SectionHeading>
        <div className="mt-6 overflow-hidden rounded-3xl bg-white shadow-lg">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
              <div className="relative h-80 lg:h-full">
                <NextImage
                  src={'/assets/images/water-security.jpg'}
                  alt="water-security"
                  className="absolute h-full w-full object-cover ring-1 ring-gray-400/10"
                  width={2432}
                  height={1442}
                />
              </div>
              <div className="px-6 py-8 lg:px-8">
                <div className="max-w-lg">
                  <h2 className="text-xl font-semibold leading-7 text-green-600 mb-4">
                    Excellent water security with FOUR redundant sources of
                    fresh water
                  </h2>

                  <p className="mt-4 text-base leading-7 text-gray-600 md:text-lg">
                    Your water source is the most essential element of survival.
                    Any solid emergency preparedness plan includes a source of
                    fresh water, and at least one back-up source.
                  </p>
                  <p className="mt-4 text-base leading-7 text-gray-600 md:text-lg">
                    At Voluntaria, we&apos;ve got you covered with multiple
                    redundant, off-grid sources of fresh drinking water:
                  </p>

                  <ol className="mt-6 space-y-4 text-base md:text-lg">
                    {[
                      {
                        title: "The Community House Well",
                        description: "The first well is located by the community house, in the South-middle part of the property."
                      },
                      {
                        title: "The South-Side Well",
                        description: "There is a second well located on the South edge of the property",
                        note: "No need to worry about the well pumps breaking when you need them - the pumps are quite new and are estimated to last another 15 - 18 years."
                      },
                      {
                        title: "The Fresh Water Spring",
                        description: [
                          "A spring runs through the property from the West side to the North-middle, exiting at the North end of the property",
                          "It creates a decent-sized stream; 3 - 4 feet wide"
                        ]
                      },
                      {
                        title: "The Pond",
                        description: [
                          "You'll also find water in the property's 3/4 surface acre pond",
                          "The pond can easily be stocked with fish"
                        ],
                        note: "We have plenty of water on the property."
                      },
                      {
                        title: "The Sky",
                        description: [
                          "Rainwater is collected in the property's 3/4 acre pond",
                          "Other slated collection projects include a 55 gallon drum collection system and a 1000 gallon cistern"
                        ]
                      },
                      {
                        title: "The 3rd Largest Freshwater Lake in Florida",
                        description: [
                          "Crescent Lake is the 3rd largest freshwater lake in Florida",
                          "The lake is a major source of drinking water for the region"
                        ],
                        note: "We have plenty of water on the property ;-)"
                      }
                    ].map((item, index) => (
                      <li key={index} className="ml-4">
                       
                        <ul className="mt-2 ml-4 space-y-1 text-gray-600">
                          <li><span className="-ml-8 font-bold">{item.title}:</span> <ul className='list-disc inline' >{Array.isArray(item.description) 
                            ? item.description.map((desc, i) => <li key={i}>{desc}</li>)
                            : <li>{item.description}</li>
                          }
                          </ul>
                          </li>
                        </ul>
                        {item.note && <p className="mt-2 text-gray-600">{item.note}</p>}
                      </li>
                    ))}
                  </ol>

                  <h2 className="mt-8 mb-4 text-xl font-bold leading-7 text-green-600">
                    Our Brand New Off-Grid Water Filtration System
                  </h2>
                  <ul className="ml-4 list-disc space-y-2 text-base text-gray-600 md:text-lg">
                    <li>We just installed the new water filtration system, in November of 2023</li>
                    <li>Unlike Reverse-Osmosis (RO) systems, this system returns calcium and magnesium back into your water, instead of leeching out minerals</li>
                    <li>No power is needed to run the system, except for the water pump</li>
                    <li>The water pump has backup power from solar panels - so you&apos;ll never lose access to water purification</li>
                    <li>The filtered water is available from the taps at the community house - just fill up a few jugs of water as needed, or drive your RV over to the community house</li>
                  </ul>

                  <h2 className="mt-8 mb-4 text-xl font-bold leading-7 text-green-600">
                    We&apos;re walking distance from Florida&apos;s 3rd largest lake!
                  </h2>
                  <ul className="ml-4 list-disc space-y-2 text-base text-gray-600 md:text-lg">
                    <li>Crescent Lake is just 1 mile from the property, easily accessible by walking, bike, or car</li>
                    <li>No matter what happens, you&apos;ll always have access to water</li>
                    <li>Not to mention - the abundance of fish! (More on that later…)</li>
                  </ul>

                  <h2 className="mt-8 mb-4 text-xl font-bold leading-7 text-green-600">
                    You&apos;ll enjoy abundant game for hunting and trapping - without even leaving the land
                  </h2>
                  <p className="mb-2 text-base font-medium text-gray-600 md:text-lg">
                    We&apos;ve spotted all sorts of game animals on the property, including:
                  </p>
                  <ul className="ml-4 list-disc space-y-2 text-base text-gray-600 md:text-lg">
                    <li>Wild turkeys</li>
                    <li>Deer</li>
                    <li>Black bears</li>
                    <li>Alligators</li>
                    <li>Ducks</li>
                  </ul>
                  <p className="mt-4 text-base font-semibold text-gray-600 md:text-lg">
                    While everyone else is eating bugs and Bill Gates&apos; fake
                    meat, you&apos;ll be eating fresh, wild meat and fish that you&apos;ve
                    caught yourself. Unless you are a vegetarian/vegan and in
                    that case we have excellent laboratory tested, chemical free soil where we have grown potatoes, tomatoes, and other vegetables.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
                <div className="mt-12 text-center">
          <Link
            href="https://voluntaria.kit.com/666e05e5c0"
            className="inline-block rounded-lg bg-green-600 px-6 py-3 text-lg font-semibold text-white transition-colors hover:bg-green-700"
            data-uid="666e05e5c0"
            target="_blank"
          >
            Get our updates straight to your inbox
            <span aria-hidden="true" className="ml-2">&rarr;</span>
          </Link>
        </div>
      </Container>
    </section>
  )
}