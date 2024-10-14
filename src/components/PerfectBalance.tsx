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
              description="We&apos;ve carefully chosen this land for its proximity to like-minded people, and its distance from large cities and other large population centers (&ldquo;The Zombies&rdquo;) - not just at the state-level, but also in the community and immediate surrounding area."
            >
              <p>
                The average local is a fairly like-minded non-leftist who {' '}
                <b className="italic">
                  dislike the tyranny of government!
                </b>
              </p>
            </BalanceCard>

            <BalanceCard
              title="Privacy and Freedom"
              description="Even if the neighbors change, the layout of the property gives you all the privacy and freedom you&apos;ll need."
            >
              <p>
                The land is shaped in a massive square, so there&apos;s plenty of
                privacy from onlookers 
              </p>
              <p>
                The 2-lane road that goes through the nearby small town is over 500 meters away from the property,
                offering plenty of privacy.
              </p>
              <p>
                The main road isn&apos;t even a major road - it&apos;s a simple 2-lane
                country road with no shoulder and a 55-35 mph speed limit going through town.
              </p>
            </BalanceCard>

            <BalanceCard
              title="Easy Accessibility"
              description="While we&apos;ve been careful to find a place that is isolated enough to be safe, we&apos;ve made sure that the property is easy for you and your family to access during a crisis or lockdown situation."
            >
              <p>
                We&apos;re easily accessible within a 1.5-hour drive from major
                urban centers like St. Augustine, Orlando, and Jacksonville
              </p>
              <p>
                You&apos;ll be close enough to major centers that you can access
                whatever is needed
              </p>
              <p>
                You&apos;ll be far enough from the cities that there&apos;s low risk of
                rioting or looting affecting you or your family
              </p>
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
      <div className="text-base text-white mb-4">{description}</div>
      <ul className="list-disc list-inside text-sm text-green-100 space-y-2 [&>p]:py-2 [&>p]:px-0 [&>p]:text-green-50 [&>p]:font-semibold">
        {children}
      </ul>
    </div>
  )
}