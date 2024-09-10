import Image, { type ImageProps } from 'next/image'

import { Container } from '@/components/Container'
import { StarRating } from '@/components/StarRating'
import { CirclePattern } from './GroupIconPattern'

export function Testimonial({
  id,
  author,
  children,
  hasStars = true,
}: {
  id: string
  author: { name: string; role: string; image: ImageProps['src'] }
  children: React.ReactNode
  hasStars?: boolean
}) {
  return (
    <aside
      id={id}
      aria-label={`Testimonial from ${author.name}`}
      className="relative bg-slate-100 py-8 sm:py-16 md:py-32"
    >
      <div className="text-slate-900/10">
        <CirclePattern x="50%" patternTransform="translate(0 100)" />
      </div>
      <Container size="xs" className="relative">
        <figure>
          {hasStars && (
            <div className="flex text-slate-900 sm:justify-center">
              <StarRating />
            </div>
          )}
          <blockquote className="mt-5 font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-center md:mt-10 md:text-4xl">
            {children}
          </blockquote>
          <figcaption className="mt-5 flex items-center sm:justify-center md:mt-10">
            <div className="overflow-hidden rounded-full bg-slate-200">
              <Image
                className="h-12 w-12 object-cover"
                src={author.image}
                alt=""
                width={56}
                height={56}
              />
            </div>
            <div className="ml-4">
              <div className="text-base font-medium leading-6 tracking-tight text-slate-900">
                {author.name}
              </div>
              <div className="mt-1 text-sm text-slate-600">{author.role}</div>
            </div>
          </figcaption>
        </figure>
      </Container>
    </aside>
  )
}
