'use client';
import React, { useState } from 'react'
import { Dialog } from '@headlessui/react'
import {
  FaceSmileIcon,
  GlobeAltIcon,
  HomeIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@heroicons/react/20/solid'

import backgroundImage from '@/images/camping-in-the-oaks-002.png' 
import voluntariaLogo from '@/images/VoluntariaLogo_DropShadow.png'
import Image from 'next/image';

// const Dialog = dynamic(() => import('@headlessui/react'), {
//   ssr: false,
// })

const questions = [
  {
    name: 'Interested in a 52-acre Plan B sanctuary in case the SHTF?',
    icon: GlobeAltIcon,
  },
  {
    name: 'Want to unite with like-minded freedom seekers when it matters most?',
    icon: UserGroupIcon,
  },
  {
    name: 'Are you ready to BYO RV or Tiny House when an emergency strikes?',
    icon: HomeIcon,
  },
  {
    name: 'Prepared for self-reliance with arable land?',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Would you like to join a secure private-member community where you can actively participate?',
    icon: FaceSmileIcon,
  },
]


const sideEffects = [
  'A heightened sense of independence, causing spontaneous off-grid living.',
  'Allergic reactions to bureaucracy and overreach, resulting in self-governance.',
  'Increased production of personal responsibility enzymes.',
  'Uncontrollable urges to engage in voluntary interactions.',
  'An acute awareness of Natural Law, often leading to peace and harmony.',
  'Chronic symptoms of community spirit and mutual aid.',
  'Persistent development of practical skills, including but not limited to gardening, bartering, and DIY everything.',
  'Frequent episodes of starry night admiration and deep philosophical campfire discussions.',
  'Spontaneous manifestations of liberty and pursuit of happiness.',
  'A rare but serious condition known as "Permanent Grin," caused by excessive enjoyment of freedom.',
]

export default function VoluntariaCallout() {
  const [isOpen, setIsOpen] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(true)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <div className="relative isolate overflow-hidden bg-green-600 py-24 sm:py-32">
      {/* Background Image */}
      <div className="absolute inset-0 z-[-1] h-full w-full overflow-hidden">
        <Image
          src={backgroundImage}
          alt="Background"
          className="h-full w-full object-cover opacity-50 blur-sm" // Adds a blur effect to the image
        />
      </div>
      <div className="absolute right-8 top-0 mt-8 h-24 w-24 lg:right-24 lg:mt-36 lg:h-96 lg:w-96 ">
        <Image
          src={voluntariaLogo}
          alt="Voluntaria logo"
          className="object-cover"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Questions */}
        <div className="mx-auto max-w-2xl lg:mx-0">
          <div className="mt-6 text-xl font-black leading-8 text-gray-300">
            {questions.map((question, index) => (
              <div key={index} className="flex items-center gap-x-4 py-3">
                <question.icon
                  className="h-7 w-5 flex-none text-green-400"
                  aria-hidden="true"
                />
                <span className="text-white">{question.name}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Call to Action */}
        <div className="text-center text-lg leading-8 text-white sm:text-4xl">
          <h2 className="voluntaria-gradient-text mt-10 font-bold">
            If so, Voluntaria might be right for you!
            <button
              onClick={openModal}
              className="text-green-300 hover:text-green-400 focus:ring-green-300"
            >
              *{' '}
            </button>
          </h2>
        </div>

        {/* Side Effects */}
        <div className="mt-10 border border-slate-500 bg-slate-800 bg-opacity-50 text-sm leading-6 p-6">
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="text-white hover:text-green-400 focus:ring-gray-300"
          >
            *Side effects may include:{' '}
            {isCollapsed ? (
              <ChevronDownIcon className="inline-block h-4 w-4" />
            ) : (
              <ChevronUpIcon className="inline-block h-4 w-4" />
            )}
          </button>

          <div
            className={`${
              isCollapsed ? 'max-h-0' : 'max-h-[1000px]' // Set a max height large enough to contain the content
            } overflow-hidden transition-all duration-700 ease-in-out mt-4`}
          >
          <ul
            className='text-white'
          >
            {sideEffects.map((effect, index) => (
              <li key={index} className="py-1">
                {effect}
              </li>
            ))}
          </ul>
        </div>
        </div>
      </div>
      {/* Modal */}
      <Dialog
        open={isOpen}
        onClose={closeModal}
        className="fixed inset-0 z-10 overflow-y-auto"
      >
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 ">
          <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 w-full text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Side Effects May Include
                  </Dialog.Title>
                  <div className="mt-2">
                    <ul className="h-72 list-disc space-y-2 overflow-auto p-5">
                      {sideEffects.map((effect, index) => (
                        <li key={index}>{effect}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                className="inline-flex w-full justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  )
}
