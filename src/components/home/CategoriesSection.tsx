"use client"

import React from 'react'
import MaxWrapper from '../MaxWrapper'
import { Card } from '../ui/card'
import { AspectRatio } from '../ui/aspect-ratio'
import Image from 'next/image'
import { categoriesData } from './homeUtils'
import Link from 'next/link'

function CategoriesSection() {

  return (
    <MaxWrapper className='py-5 bg-slate-100 max-w-7xl md:py-14 px-0 md:px-14'>
        <Card className=' flex flex-row px-2 md:px-4 transition-all  bg-white  py-6 overflow-x-auto custom-scrollbar-track custom-scrollba'>
            <div className=' flex flex-row gap-4 '>

            {categoriesData.map((slide, idx) => (
              <Link key={idx} href={slide.link}>
                <Card  className=' flex  p-4 flex-col gap-2  w-[60vw] h-[300px] md:w-[200px] bg-gray-200 hover:translate-x-1 hover:transition-all  '>
                    <div className=' h-[260px] self-center '>
                    {/* <AspectRatio ratio={16/5}> */}
                        <Image src={slide.Image} height={1000} width={1000} quality={100} alt='slides image' className=' object-cover w-[150px]' />
                    {/* </AspectRatio> */}
                    </div>
                    <h1 className=' text-red-500 text-center'>{slide.name}</h1>
                </Card>
              </Link>
            ))}

            </div>
        </Card>
    </MaxWrapper>
  )
}

export default CategoriesSection