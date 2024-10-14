import { Container } from './Container'
import { SectionHeading } from './SectionHeading'

export const PricingTable = () => {
  return (
    <section className="bg-gray-50 py-12 sm:py-16 lg:py-24" id="pricing">
      <Container size="lg">
        {/* Early Membership Benefits */}
        <div className="mb-12">
          <SectionHeading number="5">
            Ground Floor Opportunity: Literally, You&apos;ll Have More Say in What We Build
          </SectionHeading>

          <p className="mb-6 text-base text-gray-700 md:text-lg">
            The sooner you join Voluntaria, the more say you&apos;ll have on what we
            build next. When you&apos;re one of just a handful of members, you&apos;ll
            have maximum input, because you won&apos;t be competing with other
            members&apos; priorities. We can give maximum attention to the projects
            that are most important to the group.
          </p>
          <p className="text-base text-gray-700 md:text-lg">
            You&apos;ve had a rough 4 years, navigating the collapse of Western
            civilization. So, enjoy a country vacation - on us.
          </p>
        </div>

        {/* Vacation Offer */}
        <div className="mb-12 rounded-lg bg-white p-6 shadow-lg sm:p-8">
          <h3 className="mb-6 text-2xl font-semibold text-gray-900">
            An additional benefit of membership: 3 weeks long stay at Voluntaria
          </h3>
          <div className="space-y-4 text-base text-gray-700 md:text-lg">
            <p>
              You&apos;ve been under massive stress these last 4 years. The lockdowns,
              your friends calling you a tin foil hat wearing conspiracy theorist,
              the financial stress, and the constant psychological torture. You
              need a vacation!
            </p>
            <p>
              As part of your membership, we&apos;re inviting you to enjoy a week stay
              at Voluntaria. Bring your RV, stay at the property, help us with a project,
              and use our community kitchen. Brainstorm with us on what to do next and how to do it. 
              Perhaps you have some skills in a certain area that you would like to
              contribute? We are open to anything that is a win-win and helps us
              move the project forward.
            </p>
            <p>
              For your 3 weeks annual stay, bring your trailer, car camp, or if you don&apos;t have
              an RV, there is a small hotel about a 5-minute drive away.
            </p>
            <p>
              Imagine&hellip; waking up to the serene beauty of the forest and
              meadows. You take a peaceful morning walk, breathing in the crisp,
              fresh air. With your family, you might spot turtles by the tranquil
              pond or enjoy a game of fetch with your dog in the spacious meadows.
              For a gentle adventure, you could visit nearby Crescent Lake for some
              relaxing fishing or borrow our kayaks to explore the calm waters.
              As evening falls, gather around a warm campfire with your loved ones,
              roasting marshmallows and reflecting on the day&apos;s simple joys,
              following a communal meal prepared together.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="mb-6 text-2xl font-semibold text-gray-900">
            Are You Ready to Join Us?
          </h3>
          <p className="mb-8 text-base text-gray-700 md:text-lg">
            First, choose your Voluntaria Safe Harbor Membership length. Your
            membership gets you a spot for your RV or tiny house at Voluntaria.
          </p>
          {/* Insert Pricing Table */}
          {/* <div className="mb-12 rounded-lg bg-white p-6 shadow-lg sm:p-8">
            <h4 className="mb-6 text-xl font-semibold text-gray-900">
              Membership Pricing
            </h4>
            <div className="text-center">
              [Insert pricing table here - see separate file]
            </div>
          </div> */}
          <a
            href="#contact"
            className="inline-block rounded-lg bg-green-600 px-6 py-3 text-lg font-semibold text-white shadow-md transition-colors hover:bg-green-700"
          >
            Talk to Us About Joining Voluntaria
          </a>
        </div>
      </Container>
    </section>
  )
}