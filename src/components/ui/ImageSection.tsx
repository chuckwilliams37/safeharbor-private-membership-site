import React, { ReactNode } from 'react'
import { Container } from '../Container'
import { NextImage } from '@/utils/NextImage'

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
    <section className={`py-10 ${invertBg ? 'bg-white' : ''}`}>
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
            <h2 className="text-base font-semibold leading-7 text-green-600">
              {heading}
            </h2>
            <p>{description}</p>
          </div>
        </div>
      </Container>
    </section>
  )
}
