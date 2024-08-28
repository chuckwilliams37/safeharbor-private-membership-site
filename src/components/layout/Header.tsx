import React from 'react'
import { NextImage } from '@/utils/NextImage'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

const headerMenuItems = [
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
export const Header = () => {
  return (
    <header className="sticky top-0 z-30 border-b bg-white shadow-sm">
      <div className="container">
        <nav className="flex items-center gap-6 py-6">
          <Link href={'/'}>
            <NextImage
              src="/assets/images/VoluntariaLogo_DropShadow.png"
              width={500}
              height={500}
              className="h-16 w-16"
              priority
            />
          </Link>

          <ul className="flex gap-4">
            {headerMenuItems.map((data, i) => (
              <li
                key={data?.label + i}
                className="rounded px-4 py-2 font-semibold uppercase duration-300 hover:bg-slate-300"
              >
                <Link href={data?.path}>{data?.label}</Link>
              </li>
            ))}
          </ul>
          <Button color="green" className="ms-auto uppercase">
            Get Started
          </Button>
        </nav>
      </div>
    </header>
  )
}
