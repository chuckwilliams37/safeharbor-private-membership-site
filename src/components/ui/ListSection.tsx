import { ReactNode } from 'react'
import { Container } from '../Container'

export const ListSection = ({
  heading,
  description,
  bullets,
  descriptionAfterBullets,
}: {
  heading?: string | ReactNode
  description?: string | ReactNode
  bullets?: string[]
  descriptionAfterBullets?: string | ReactNode
}) => {
  return (
    <section className="bg-white py-8 sm:py-16 lg:py-32">
      <Container size="lg">
        {heading && (
          <h2 className="text-xl font-semibold leading-7 text-green-600 py-10">
            {heading}
          </h2>
        )}
        {description && (
          <div className="text-base text-gray-700 md:text-lg">{description}</div>
        )}
        {bullets && (
          <ul className="my-6 text-base text-gray-700 md:text-lg [&>li]:flex [&>li]:items-center [&>li]:gap-3 [&>li]:before:h-2 [&>li]:before:w-2 [&>li]:before:rounded-full [&>li]:before:bg-green-600">
            {bullets?.map((data, i) => (
              <li key={data + heading + i}>{data}</li>
            ))}
          </ul>
        )}
        {descriptionAfterBullets && (
          <div className="text-base text-gray-700 md:text-lg">
            {descriptionAfterBullets}
          </div>
        )}
      </Container>
    </section>
  )
}
