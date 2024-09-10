import Link from 'next/link'

import { Container } from '@/components/Container'

// export function Introduction({ data }: { data: any }) {
export function Introduction() {
  // const components:Partial<PortableTextReactComponents> = {
  //   block: {
  //     // Ex. 1: customizing common block types
  //     p: ({ children }) => <p className="text-xl text-slate-600">{children}</p>,
  //     undefined: ({ children }) => <p className="text-xl text-slate-600">{children}</p>,
  //     h1: ({ children }) => <h1 className="text-4xl font-extrabold text-green-800">{children}</h1>,
  //     h2: ({ children }) => <h2 className="text-2xl font-extrabold text-green-800">{children}</h2>,
  //     h3: ({ children }) => <h3 className="text-xl font-extrabold text-green-800">{children}</h3>,
  //     blockquote: ({ children }) => <blockquote className="border-l-purple-500">{children}</blockquote>,

  //     // Ex. 2: rendering custom styles
  //     customHeading: ({ children }) => (
  //       <h2 className="text-lg text-primary text-purple-700">{children}</h2>
  //     ),
  //   },
  // }

  return (
    <section
      id="introduction"
      aria-label="Introduction"
      className="py-8 sm:py-16 lg:py-32"
    >
      <Container className="text-base tracking-tight text-slate-700 md:text-lg [&>div>h3]:font-bold">
        <div className="mt-8 ">
          <h3 className="text-2xl">
            Are you struggling with any of these prepping challenges?
          </h3>
          <h3>You don't have enough money to invest in land…</h3>
          <p>
            …or you do, but you don't want to put such a big portion of your
            savings into real estate
          </p>
        </div>
        <div className="mt-8 ">
          <h3>You don't have good credit for a mortgage</h3>
          <p>
            …or maybe you do, but the banks are such evil scammers, the thought
            of a mortgage makes you nauseous
          </p>
          <p>
            Or you're afraid that if you do buy land, it'll be confiscated by
            the government…
          </p>
        </div>
        <div className="mt-8 ">
          <h3>
            You're not sure where you want to live permanently - and a land
            purchase ties you down
          </h3>
          <p>
            You're a digital nomad, and you don't want to commit to one place
          </p>
          <p>
            You don't want to be alone in the middle of nowhere <br />
            …or worse, surrounded by neighbors who snitch on you, just for
            living your life
          </p>
          <p>
            You don't even want to live a rural lifestyle…
            <br />
            …you just need a bug-out plan in case SHTF
          </p>
        </div>

        <div className="mt-8 ">
          <h3>You don't know how to vet land…</h3>
          <p>…you don't even know what to look for</p>
          <p>
            …or you just don't have the time to drive around the country,
            shopping for land
          </p>
        </div>

        <div className="mt-8 ">
          <h3>
            You've already tried looking for land, but there's always something
            wrong…
          </h3>
          <p>
            …maybe it's so undeveloped, there isn't even a road into the
            property…
          </p>
          <p>
            …or, it's too accessible to the road and neighbors, so if the SHTF,
            it won't offer any protection or privacy…
          </p>
          <p>Or, you're struggling to find land with reliable off-grid water</p>

          <p className="font-bold">
            Or…you're just completely overwhelmed and you don't know where to
            start
          </p>
        </div>

        <div className="mt-8 ">
          <p className="font-bold">If any of this sounds like you…</p>
          <h3 className="text-2xl">
            Are you struggling with any of these prepping challenges?
          </h3>
          <p>…don't worry - you're not alone.</p>
          <p>
            We designed Voluntaria's Safe Harbor Membership to give you the
            assurance of a safe place to go, when the SHTF. Without the expense
            or stress of buying land - or trying to do it all on your own.
          </p>
        </div>

        <div className="mt-8 ">
          <h3 className="text-2xl">
            You are ALREADY BEHIND on everything you need to do to defend
            yourself from the Globalists…
          </h3>
          <h3 className="text-2xl">
            …We're here to handle your emergency bug-out plan.
          </h3>
          <p className="text-xl">Let's just get it done…</p>
          <p>
            This is the easiest, most affordable emergency bug-out in America.
          </p>
          <p>
            If/When the SHTF, you'll join us on our 52 acres in Florida's
            beautiful (and to easy-to-survive!) climate.
          </p>
          <p>
            We've got you covered with food, water, and a community of
            like-minded freedom lovers - just like you.
          </p>
          <p>
            When crisis strikes, just bring your RV or tiny home. You can stay
            for a few weeks - or up to 3 months if you need it. No need to buy
            land or commit long term - you can cancel your membership, anytime.
          </p>
        </div>

        <p className="mt-10">
          <Link
            href="https://voluntaria.ck.page/products/voluntarias-safeharbor-private-newsletter"
            className="text-base font-medium text-green-600 hover:text-green-800"
            data-commerce
          >
            Get our updates straight to your inbox{' '}
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </p>
      </Container>
    </section>
  )
}
