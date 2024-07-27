import Link from 'next/link'

import { CheckIcon } from '@/components/CheckIcon'
import { Container } from '@/components/Container'
import {PortableText, PortableTextReactComponents} from '@portabletext/react'

export function Introduction({ data }: { data: any }) {

  const components:Partial<PortableTextReactComponents> = {
    block: {
      // Ex. 1: customizing common block types
      p: ({ children }) => <p className="text-xl text-slate-600">{children}</p>,
      undefined: ({ children }) => <p className="text-xl text-slate-600">{children}</p>,
      h1: ({ children }) => <h1 className="text-4xl font-extrabold text-green-800">{children}</h1>,
      h2: ({ children }) => <h2 className="text-2xl font-extrabold text-green-800">{children}</h2>,
      h3: ({ children }) => <h3 className="text-xl font-extrabold text-green-800">{children}</h3>,
      blockquote: ({ children }) => <blockquote className="border-l-purple-500">{children}</blockquote>,

      // Ex. 2: rendering custom styles
      customHeading: ({ children }) => (
        <h2 className="text-lg text-primary text-purple-700">{children}</h2>
      ),
    },
  }



  return (
    <section
      id="introduction"
      aria-label="Introduction"
      className="pb-16 pt-20 sm:pb-20 md:pt-36 lg:py-32"
    >
      <Container className="text-lg tracking-tight text-slate-700">

        <div className="mt-8 ">
          <PortableText value={data.introSectionOpeningLine} />              
        </div>
        <div className="mt-8 ">
          <PortableText value={data.introSectionBody} components={components} />              
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