import { Container } from './Container'
import { SectionHeading } from './SectionHeading'

export const PricingTable = () => {
  return (
    <section className=" py-8 sm:py-16 lg:py-32" id="pricing">
      <Container size="lg">
        {/* Early Membership Benefits */}
        <div className="mb-8">
          <SectionHeading number="5">
            You'll Have Even More Say When You Get In on the Ground Floor
          </SectionHeading>

          <p className="mb-6 text-base text-gray-700 md:text-lg">
            The sooner you join Voluntaria, the more say you'll have on what we
            build next. When you're one of just a handful of members, you'll
            have maximum input, because you won't be competing with other
            members' priorities. We can give maximum attention to the projects
            that are most important to you.
          </p>
          <p className="text-base text-gray-700 md:text-lg">
            You've had a rough 4 years, navigating the collapse of Western
            civilization. So, enjoy a country vacation - on us.
          </p>
        </div>

        {/* Vacation Offer */}
        <div className="mb-8 rounded-lg bg-white p-6 shadow-md">
          <h3 className="mb-4 text-2xl font-semibold text-gray-900">
            Enjoy a Country Vacation - On Us
          </h3>
          <p className="mb-4 text-base text-gray-700 md:text-lg">
            You've been under massive stress these last 4 years. The lockdowns,
            your friends calling you a tin foil hat wearing conspiracy theorist,
            the financial stress, and the constant psychological torture. You
            need a vacation!
          </p>
          <p className="mb-4 text-base text-gray-700 md:text-lg">
            As part of your membership, we're inviting you to enjoy a week stay
            at Voluntaria (up to a week per quarter). Bring your RV, stay at the
            property, help us with a project, and use our community kitchen.
            Brainstorm with us on what to do next and how to do it. Perhaps you
            have some skills in a certain area that you would like to
            contribute? We are open to anything that is a win-win and helps us
            move the project forward.
          </p>
          <p className="mb-4 text-base text-gray-700 md:text-lg">
            For your one-week getaway, bring your trailer, or if you don’t have
            an RV, there is a small hotel about a 5-minute drive away.
          </p>
          <p className="text-base text-gray-700 md:text-lg">
            Imagine… you’ll start your day with the natural beauty of the forest
            and meadows. You’ll go for a walk and breathe fresh country air.
            Take your kids to spot turtles by the pond or play fetch with your
            dog in the acres of open meadow. When you feel like some excitement,
            take a day trip to Crescent Lake and go fishing or borrow our kayaks
            and see the lake from the water. Then you’ll end the day roasting
            marshmallows with your kids by the fire, after a community meal you
            helped with.
          </p>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="mb-4 text-2xl font-semibold text-gray-900">
            Are You Ready to Join Us?
          </h3>
          <p className="mb-6 text-base text-gray-700 md:text-lg">
            First, choose your Voluntaria Safe Harbor Membership length. Your
            membership gets you a spot for your RV or tiny house at Voluntaria.
          </p>
          {/* Insert Pricing Table */}
          {/* <div className="mb-8 rounded-lg bg-white p-6 shadow-md">
            <h4 className="mb-4 text-xl font-semibold text-gray-900">
              Membership Pricing
            </h4>
            <div className="text-center">

              [Insert pricing table here - see separate file]
            </div>
          </div> */}
          <a
            href="#contact"
            className="inline-block rounded-lg bg-green-500 px-3 py-3 text-white shadow-md hover:bg-green-600 sm:px-6"
          >
            Talk to Us About Joining Voluntaria
          </a>
        </div>
      </Container>
    </section>
  )
}
