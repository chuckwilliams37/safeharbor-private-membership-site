import { Button } from '@/components/ui/Button'
import { NextImage } from '@/utils/NextImage'
import React from 'react'

export const Hero = () => {
  return (
    <section className="p-3">
      <div className="container">
        <div className="rounded-2xl bg-green-300 p-10">
          <div className="flex justify-between ">
            <div className="flex max-w-[500px] flex-col items-start justify-center gap-3">
              <h1 className="text-4xl font-bold">
                Join Voluntaria's Safe Harbor Membership: Your Path to Freedom
                and Security
              </h1>
              <p>
                Struggling with the challenges of creating a bug-out plan?
                Voluntaria's Safe Harbor Membership provides the land, water,
                and community you need—just bring your RV or Tiny Home.
              </p>

              <Button className="!rounded-full px-10 ">Get Started</Button>
            </div>

            <NextImage
              src="/assets/images/hero.png"
              width={1000}
              height={10000}
              priority
              className="h-auto w-[500px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
