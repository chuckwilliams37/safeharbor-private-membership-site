import { Container } from './Container'
import { SectionHeading } from './SectionHeading'

export const PerfectBalance = () => {
  return (
    <section id="balance" className="bg-green-900 py-16 sm:py-24 lg:py-32">
      <Container size="lg">
        <SectionHeading number="4" className="text-white">
          Your perfect balance of easy accessibility - and remote, rural privacy
        </SectionHeading>

        <div className="mt-8 lg:mt-12">
          <h2 className="text-xl font-semibold leading-7 text-green-400 mb-6">
            Close enough for you to get to in a crisis &hellip;remote enough to escape
            The Zombies!
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <BalanceCard
              title="Carefully Chosen Location"
              description="We&apos;ve carefully chosen this land for its proximity to like-minded people, and its distance from &ldquo;The Zombies&rdquo; - not just at the state-level, but also in the community and immediate surrounding area."
            >
              <li>
                The neighbors are all like-minded conservatives or
                libertarians who are{' '}
                <b className="italic">
                  like the government just as much as you!
                </b>
              </li>
            </BalanceCard>

            <BalanceCard
              title="Privacy and Freedom"
              description="Even if the neighbors change, the layout of the property gives you all the privacy and freedom you&apos;ll need."
            >
              <li>
                The land is shaped in a massive square, so there&apos;s plenty of
                privacy from onlookers (unlike other properties, that are long
                and skinny)
              </li>
              <li>
                The main road is over 500 meters away from the property,
                offering plenty of privacy (in the unlikely event that Florida
                decides to turn into a full surveillance police state)
              </li>
              <li>
                The main road isn&apos;t even a major road - it&apos;s a simple 2-lane
                country road with no shoulder and a low speed limit
              </li>
            </BalanceCard>

            <BalanceCard
              title="Easy Accessibility"
              description="While we&apos;ve been careful to find a place that is isolated enough to be safe, we&apos;ve made sure that the property is easy for you and your family to access during a crisis or lockdown situation."
            >
              <li>
                We&apos;re easily accessible within a 1.5-hour drive from major
                urban centers like St. Augustine, Orlando, and Jacksonville
              </li>
              <li>
                You&apos;ll be close enough to major centers that you can access
                whatever is needed
              </li>
              <li>
                You&apos;ll be far enough from the cities that there&apos;s low risk of
                rioting or looting affecting you or your family
              </li>
            </BalanceCard>
          </div>
        </div>
      </Container>
    </section>
  )
}

interface BalanceCardProps {
  title: string
  description: string
  children: React.ReactNode
}

const BalanceCard: React.FC<BalanceCardProps> = ({ title, description, children }) => {
  return (
    <div className="bg-green-800 rounded-lg p-6 shadow-lg">
      <h3 className="text-lg font-semibold text-green-300 mb-3">{title}</h3>
      <p className="text-base text-white mb-4">{description}</p>
      <ul className="list-disc list-inside text-sm text-green-100 space-y-2">
        {children}
      </ul>
    </div>
  )
}