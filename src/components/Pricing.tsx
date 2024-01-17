import clsx from 'clsx'

import { Button } from '@/components/Button'
import { CheckIcon } from '@/components/CheckIcon'
import { Container } from '@/components/Container'
import { GridPattern } from '@/components/GridPattern'
import { SectionHeading } from '@/components/SectionHeading'

function Plan({
  name,
  description,
  price,
  features,
  href,
  featured = false,
}: {
  name: string
  description: string
  price: string
  features: Array<string>
  href: string
  featured?: boolean
}) {
  return (
    <div
      className={clsx(
        'relative px-4 py-16 sm:rounded-5xl sm:px-10 md:py-12 lg:px-12',
        featured && 'bg-green-600 sm:shadow-lg',
      )}
    >
      {featured && (
        <div className="absolute inset-0 text-white/10 [mask-image:linear-gradient(white,transparent)]">
          <GridPattern x="50%" y="50%" />
        </div>
      )}
      <div className="relative flex flex-col">
        <h3
          className={clsx(
            'mt-7 text-lg font-semibold tracking-tight',
            featured ? 'text-white' : 'text-slate-900',
          )}
        >
          {name}
        </h3>
        <p
          className={clsx(
            'mt-2 text-lg tracking-tight',
            featured ? 'text-white' : 'text-slate-600',
          )}
        >
          {description}
        </p>
        <p className="order-first flex font-display font-bold">
          <span
            className={clsx(
              'text-[1.75rem] leading-tight',
              featured ? 'text-green-200' : 'text-slate-500',
            )}
          >
            $
          </span>
          <span
            className={clsx(
              'ml-1 mt-1 text-7xl tracking-tight',
              featured ? 'text-white' : 'text-slate-900',
            )}
          >
            {price}
          </span>
        </p>
        <div className="order-last mt-8">
          <ul
            role="list"
            className={clsx(
              '-my-2 divide-y text-base tracking-tight',
              featured
                ? 'divide-white/10 text-white'
                : 'divide-slate-200 text-slate-900',
            )}
          >
            {features.map((feature) => (
              <li key={feature} className="flex py-2">
                <CheckIcon
                  className={clsx(
                    'h-8 w-8 flex-none',
                    featured ? 'fill-white' : 'fill-slate-600',
                  )}
                />
                <span className="ml-4">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <Button
          href={href}
          color={featured ? 'white' : 'slate'}
          className="convertkit-button mt-8"
          aria-label={`Get notified when the ${name} plan for $${price} is available!`}
          data-commerce
        >
          Notify me!
        </Button>
      </div>
    </div>
  )
}

export function Pricing() {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-title"
      className="scroll-mt-14 pb-8 pt-16 sm:scroll-mt-32 sm:pb-10 sm:pt-20 lg:pb-16 lg:pt-32"
    >
      <Container>
        <SectionHeading number="3" id="pricing-title">
          Pricing PLACEHOLDER
        </SectionHeading>
        <p className="mt-8 font-display text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
          Pick your package
        </p>
        <p className="mt-4 max-w-xl text-lg tracking-tight text-slate-600">
          SafeHarbor membership is available in annual memberships, with heavy
          (partially refundable) discounts applied to mult-year purchases. so
          you can pick the one that&apos;s right for you.
        </p>
      </Container>
      <div className="mx-auto mt-16 max-w-5xl lg:px-6">
        <div className="grid bg-slate-50 sm:px-6 sm:pb-16 md:grid-cols-2 md:rounded-6xl md:px-8 md:pt-16 lg:p-20">
          <Plan
            name="Annual"
            description="Voluntaria's SafeHarbor Private Membership Emergency Support & Retreat Contract (billed annually)."
            price="1600"
            href="https://voluntaria.ck.page/products/voluntarias-safeharbor-private-newsletter"
            features={[]}
            />
          <Plan
            name="Quarterly"
            description="Voluntaria's SafeHarbor Private Membership Emergency Support & Retreat Contract (billed quarterly)."
            price="440"
            href="https://voluntaria.ck.page/products/voluntarias-safeharbor-private-newsletter"
            features={[]}
            />
          <Plan
            featured
            name="Monthly"
            description="Voluntaria's SafeHarbor Private Membership Emergency Support & Retreat Contract (billed monthly)."
            price="166"
            href="https://voluntaria.ck.page/products/voluntarias-safeharbor-private-newsletter"
            features={[]}
            />
          <Plan
            name="Multi-year"
            description="Voluntaria's SafeHarbor Private Membership Emergency Support & Retreat Contract (billed at end of term). 10% to 50% discount depending on number of membership years purchased in advance. "
            price="2880+"
            href="https://voluntaria.ck.page/products/voluntarias-safeharbor-private-newsletter"
            features={[]}
          />
        </div>
      </div>
    </section>
  )
}
