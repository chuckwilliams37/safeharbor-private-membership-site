import Image from 'next/image'

import { GridPattern } from '@/components/GridPattern'
import coverImage from '@/images/newsletter_cover_photo.png'

// export function Hero({ data }: { data: any }) {
export function Hero() {
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
  // const components: Partial<PortableTextReactComponents> = {
  //   block: {
  //     // Ex. 1: customizing common block types
  //     p: ({ children }) => <p className="text-xl text-slate-600">{children}</p>,
  //     undefined: ({ children }) => (
  //       <p className="text-xl text-slate-600">{children}</p>
  //     ),
  //     h1: ({ children }) => (
  //       <h1 className="text-4xl font-extrabold text-green-800">{children}</h1>
  //     ),
  //     h2: ({ children }) => (
  //       <h2 className="text-2xl font-extrabold text-green-800">{children}</h2>
  //     ),
  //     h3: ({ children }) => (
  //       <h3 className="text-xl font-extrabold text-green-800">{children}</h3>
  //     ),
  //     blockquote: ({ children }) => (
  //       <blockquote className="border-l-purple-500">{children}</blockquote>
  //     ),

  //     // Ex. 2: rendering custom styles
  //     customHeading: ({ children }) => (
  //       <h2 className="text-primary text-lg text-purple-700">{children}</h2>
  //     ),
  //   },
  // }

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
          <p className="mt-4 text-xl text-slate-600">
            Calling all freedom-lovers, redpilled preppers, libertarians &
            voluntaryists…
          </p>
        </div>
        <div className="bg-white pb-8 pt-16 sm:pb-16 lg:col-span-7 lg:bg-transparent lg:pb-0 lg:pl-16 lg:pt-0 xl:pl-20">
          <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
            <h3 className="text-xl font-extrabold text-green-800">
              <strong>
                Is creating a bug-out plan too expensive, confusing and
                overwhelming…
              </strong>
            </h3>
            <h3 className="text-lg font-extrabold text-green-800 md:text-xl">
              …<strong>not to mention, impossible to do alone? </strong>
            </h3>{' '}
            <br />
            <br />
            <h1 className="text-3xl font-extrabold text-green-800 lg:text-4xl">
              <strong>
                With Voluntaria's Safe Harbor Membership, there's no need to buy
                your own land…
              </strong>
            </h1>
            <h3 className="text-lg font-extrabold text-green-800 md:text-xl">
              …
              <strong>
                Just bring your RV or Tiny Home - we'll provide the land,
                drinking water, and freedom minded community...{' '}
              </strong>
            </h3>
            {/* <PortableText
              value={data.initialPromptHeading}
              components={components}
            />
            <div className="mt-8 ">
              <PortableText value={data.heroHeading} components={components} />
            </div> */}
          </div>
        </div>
      </div>
    </header>
  )
}
{
  /* ************************************** ABOVE THIS LINE IS COMPLETE 2024.05.21.2314 ******************************************* */
}
