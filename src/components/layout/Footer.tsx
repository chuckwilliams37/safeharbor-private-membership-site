import { NextImage } from '@/utils/NextImage'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/Button'

const footerMenuItems = [
  {
    label: 'section1',
    path: '#section1',
  },
  {
    label: 'section2',
    path: '#section2',
  },
  {
    label: 'section3',
    path: '#section3',
  },
  {
    label: 'section4',
    path: '#section4',
  },
  {
    label: 'section5',
    path: '#section5',
  },
]
export const Footer = () => {
  return (
    <footer className="bg-white py-10 shadow-sm">
      <div className="container">
        <div className="flex flex-col items-center justify-center gap-4">
          <Link href={'/'}>
            <NextImage
              src="/assets/images/VoluntariaLogo_DropShadow.png"
              width={500}
              height={500}
              className="h-28 w-28 object-contain"
              priority
            />
          </Link>
          <ul className="flex gap-4">
            {footerMenuItems.map((data, i) => (
              <li
                key={data?.label + i}
                className="rounded px-4 py-2 font-semibold uppercase duration-300 hover:bg-slate-300"
              >
                <Link href={data?.path}>{data?.label}</Link>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex w-full items-center justify-between">
            <div className="flex overflow-hidden rounded-full bg-slate-300">
              <input
                className="grow border-0 bg-transparent px-4 !outline-none placeholder:text-black "
                placeholder="Email Address"
              />
              <Button color="green" className="!rounded-full">
                Subscribe
              </Button>
            </div>
            <div>© 2024 All rights reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
