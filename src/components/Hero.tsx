import Image from 'next/image'

import { Button } from '@/components/Button'
import { GridPattern } from '@/components/GridPattern'
import { StarRating } from '@/components/StarRating'
import coverImage from '@/images/newsletter_cover_photo.png';
import {PortableText, PortableTextReactComponents} from '@portabletext/react'


export function Hero ({ data }: { data: any }) {

  // console.log("Hero.data", data.initialPromptHeading);

  // data.initialPromptHeading.map( (block, index) => {
    // console.log("block.children", block.children);
  // });
  // {
  //   span : ({children}) => (
  //     <div key={block.key} className="mt-4 text-2xl text-slate-600" children={children} />
  //   ),
  //   strong: ({children}) => (
  //     <h2 className="text-lg text-primary text-purple-700">{children}</h2>
  //   ),
  //   highlight: ({children}) => (
  //     <h2 className="text-lg text-primary text-purple-700">{children}</h2>
  //   )
  // }
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
    <header className="overflow-hidden bg-slate-100 lg:bg-transparent lg:px-5">
      <div className="mx-auto grid max-w-6xl grid-cols-1 grid-rows-[auto_1fr] gap-y-16 pt-16 md:pt-20 lg:grid-cols-12 lg:gap-y-20 lg:px-3 lg:pb-36 lg:pt-20 xl:py-32">
        <div className="relative flex items-end lg:col-span-5 lg:row-span-2">
          <div className="absolute -bottom-12 -top-20 left-0 right-1/2 z-10 rounded-br-6xl bg-green-600 text-white/10 md:bottom-8 lg:-inset-y-32 lg:left-[-100vw] lg:right-full lg:-mr-40">
            <GridPattern
              x="100%"
              y="100%"
              patternTransform="translate(112 64)"
            />
          </div>
          <div className="relative z-10 mx-auto flex w-64 rounded-xl bg-slate-600 shadow-xl md:w-80 lg:w-auto">
            <Image className="w-full" src={coverImage} alt="" priority />
          </div>
        </div>

        <div className="relative px-4 sm:px-6 lg:col-span-7 lg:pb-14 lg:pl-16 lg:pr-0 xl:pl-20">
          <div className="" />
          <p className="mt-4 text-xl text-slate-600">{data.pageOpeningLine}</p>
        </div>
        <div className="bg-white pt-16 lg:col-span-7 lg:bg-transparent lg:pl-16 lg:pt-0 xl:pl-20">
          <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
              <PortableText value={data.initialPromptHeading} components={components} />              
            <div className="mt-8 ">
              <PortableText value={data.heroHeading} components={components} />              
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
{/* ************************************** ABOVE THIS LINE IS COMPLETE 2024.05.21.2314 ******************************************* */}
