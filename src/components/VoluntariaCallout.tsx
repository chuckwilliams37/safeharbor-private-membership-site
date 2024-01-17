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

import dynamic from 'next/dynamic'

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
                <span className="text-stone-300">{question.name}</span>
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
              className="text-indigo-300 hover:text-indigo-400 focus:outline-none focus:ring focus:ring-indigo-300"
            >
              *{' '}
            </button>
          </h2>
        </div>

        {/* Side Effects */}
        <div className="mt-10 text-sm leading-6">
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="text-gray-300 hover:text-gray-400 focus:outline-none focus:ring focus:ring-gray-300"
          >
            *Side effects may include:{' '}
            {isCollapsed ? (
              <ChevronDownIcon className="inline-block h-4 w-4" />
            ) : (
              <ChevronUpIcon className="inline-block h-4 w-4" />
            )}
          </button>
          <ul
            className={`${isCollapsed ? 'hidden' : 'block'} mt-4 text-gray-500`}
          >
            {sideEffects.map((effect, index) => (
              <li key={index} className="py-1">
                {effect}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Modal */}
      <Dialog
        open={isOpen}
        onClose={closeModal}
        className="fixed inset-0 z-10 overflow-y-auto"
      >
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
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
                className="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
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
