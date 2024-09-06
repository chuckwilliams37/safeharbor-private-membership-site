import { Container } from './Container'
import { SectionHeading } from './SectionHeading'

export const PerfectBalance = () => {
  return (
    <section id="balance" className=" bg-green-900 py-16 sm:py-32">
      <Container size="lg">
        <SectionHeading number="4" className="text-white">
          Your perfect balance of easy accessibility - and remote, rural privacy
        </SectionHeading>

        <div className="mt-6">
          <h2 className="text-base font-semibold leading-7 text-green-400">
            Close enough for you to get to in a crisis …remote enough to escape
            The Zombies!
          </h2>
          <div className="my-6 grid grid-cols-1 gap-8  lg:grid-cols-3">
            <div className="text-base text-white">
              <p className="text-base font-medium">
                We've carefully chosen this land for its proximity to
                like-minded people, and its distance from "The Zombies" - not
                just at the state-level, but also in the community and immediate
                surrounding area.
              </p>
              <ul className="mt-3  font-light">
                <li>
                  The neighbors are all like-minded conservatives or
                  libertarians who are{' '}
                  <b className="italic">
                    like the government just as much as you!
                  </b>{' '}
                </li>
              </ul>
            </div>
            <div className="text-base text-white">
              <p className="text-base font-medium">
                Even if the neighbors change, the layout of the property gives
                you all the privacy and freedom you'll need.
              </p>
              <ul className="mt-3  font-light">
                <li>
                  The land is shaped in a massive square, so there's plenty of
                  privacy from onlookers (unlike other properties, that are long
                  and skinny)
                </li>
                <li>
                  The main road is over 500 meters away from the property,
                  offering plenty of privacy (in the unlikely event that Florida
                  decides to turn into a full surveillance police state)
                </li>
                <li>
                  The main road isn't even a major road - it's a simple 2-lane
                  country road with no shoulder and a low speed limit
                </li>
              </ul>
            </div>
            <div className="text-base text-white">
              <p className="text-base font-medium">
                While we've been careful to find a place that is isolated enough
                to be safe, we've made sure that the property is easy for you
                and your family to access during a crisis or lockdown situation.
              </p>
              <ul className="mt-3  font-light">
                <li>
                  We're easily accessible within a 1.5-hour drive from major
                  urban centers like St. Augustine, Orlando, and Jacksonville
                </li>
                <li>
                  You'll be close enough to major centers that you can access
                  whatever is needed
                </li>
                <li>
                  You'll be far enough from the cities that there's low risk of
                  rioting or looting affecting you or your family
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
