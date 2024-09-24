import { Container } from '@/components/Container'
import { SectionHeading } from './SectionHeading'
import tallStarryNight001 from '@/images/tall-starry-night-002.png'
import Image from 'next/image'

export function Ethos() {
  return (
    <section
      id="ethos"
      aria-labelledby="ethos-title"
      className="scroll-mt-14 bg-gray-50 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container size="lg">
        <SectionHeading number="1">
          Turning Setbacks into Success: The Birth of Voluntaria
        </SectionHeading>

        <div className="relative mt-6 overflow-hidden rounded-3xl bg-white shadow-lg">
          <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
            <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
              <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
                <Image
                  className="absolute inset-0 h-full w-full object-cover"
                  src={tallStarryNight001}
                  alt="A group of people gathered around a campfire under a starry night sky in an oak forest."
                  layout="fill"
                />
              </div>
            </div>
            <div className="px-6 lg:contents">
              <div className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2">
                <p className="text-base font-semibold leading-7 text-green-600">
                  We thought that finding the land would be the easy part&hellip;yeah no...
                </p>
                <div className="mt-6 space-y-6 text-base leading-7 text-gray-700">
                  <p>
                    This project has been in existence since the craziness of 2020 happened.
                  </p>
                  <p>
                    Chuck and Santori co-founded Voluntaria with a couple friends. The others turned out to not be in alignment with where the project was going when I showed up and bought them out. Before I came on board, the crew spent months looking at dozens of properties before settling on this 52 acre paradise. You can ask them it&apos;s not an easy task to find the plot of land that ticks all the boxes and has a great vibe.
                  </p>
                  <p>
                    Finally the perfect location. Off-grid drinking water (2 wells), great soil quality (former organic fern farm), perfect climate&hellip;and strategic location. Finally the search was over and the deal got done in 2021.
                  </p>
                  <p>
                    But then as the project progressed a mere months after the property was acquired, their worst fears were realized. Just as they were ready to launch the community&hellip;it became apparent to all that 2 of the partners were not a fit. They wanted out and Chuck and Santori wanted them out. They owned a 1/3 of the property and it&apos;s hard to sell 1/3 of a property. So they put the whole thing on the market and figured the dream of a freedom based community was more than they could pull off. The land is huge - 52 acres. Chuck and Santori couldn&apos;t pull it off on their own especially with the property not producing any income. It was a big time and money suck for a dream that sputtered and failed to launch.
                  </p>
                  <p>
                    This is where I entered the picture. I have known Chuck for years and we have very similar takes on how we feel about freedom. The 3 of us got together and talked about what went wrong and how to keep it from not going wrong again. We worked out a deal and I bought out the 2 founding members and brought new life to the project. I had been working on a concept based on my experience living in community and my love for freedom and when the 3 of us came together it all just felt right. Merging what they had and what I had Voluntaria was born!
                  </p>
                  <p>
                    But I knew that with the current state of the world, we all need a safe haven for if/when the SHTF. In the end I sold my house bought out the previous partners and went all in on this project. It was a big stretch for me&hellip;but it just all felt right. I had the guys we had the property the 3 of us have great ideas&hellip;all the ingredients were there we just had to do it.
                  </p>
                  <p>
                    That was the biggest hurdle, but it wasn&apos;t the only one. The farmhouse and well were seriously run down.
                  </p>
                  <p>
                    The well had MAJOR problems. We had to redo EVERYTHING - the accumulation tank, the electrical, the water filter, and all the PVC piping. The well took us weeks and thousands of dollars to fix and more time than I care to count. Now we are dealing with $12,000+ property tax bill extortion racket, plus who knows how much for the existing farmhouse soon to be community house repairs and upgrades. Well over $20,000 to get it all in decent workable condition.
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