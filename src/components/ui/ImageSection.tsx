import { NextImage } from '@/utils/NextImage'
import { ReactNode } from 'react'
import { Container } from '../Container'

export const ImageSection = ({
  isReverse,
  invertBg,
  heading,
  description,
  imageSrc,
}: {
  isReverse: boolean
  invertBg: boolean
  heading: ReactNode
  description: ReactNode
  imageSrc: string
}) => {
  return (
    <section className={`py-8 sm:py-16 lg:py-32 ${invertBg ? 'bg-white' : ''}`}>
      <Container size="lg">
        <div
          className={`flex ${isReverse ? 'lg:flex-row-reverse' : 'lg:flex-row'}  flex-col gap-[24px]`}
        >
          <NextImage
            src={imageSrc}
            alt=""
            width={1000}
            height={1000}
            className="w-2/4"
          />
          <div className="py-[24px]">
            <h2 className="text-lg font-bold leading-7 text-green-600">
              {heading}
            </h2>
            <p className="text-base text-gray-600 md:text-lg">{description}</p>
          </div>
        </div>
      </Container>
    </section>
  )
}
