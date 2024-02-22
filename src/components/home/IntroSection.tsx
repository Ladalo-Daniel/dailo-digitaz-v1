"use client"

import React, { useEffect, useState } from 'react'
import MaxWrapper from '../MaxWrapper'
import { Card } from '../ui/card'
import { brandsCategories, slidesData } from './homeUtils'
import Link from 'next/link'
import { Apple } from 'lucide-react'
import Image from 'next/image'
import { AspectRatio } from '../ui/aspect-ratio'

function IntroSection() {
    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(()=> {
        const interval = setInterval(() => {
         setCurrentSlide(prev => prev === slidesData.length - 1 ? 0 : prev + 1)
        }, 5000)
    
        return () => clearInterval(interval);
      }, [])


      const handleDotClick = (index: number) => {
        setCurrentSlide(index);
      };
    

  return (
    <MaxWrapper className=' md:py-5 bg-gray-200 max-w-7xl py-3 px-2 md:px-14 '>
      <div className=' flex flex-row gap-4 '>
        {/* CARD FOR QUICK PRODUCTS LINKS */}
        <Card className=' p-3 hidden md:flex gap-3 flex-col w-1/5 '>
            {brandsCategories.map((cat, idx) => (
                <div key={idx} className=' flex  gap-3 justify-between'>
                    <Link href={cat.link} className=' flex flex-row gap-3'>
                        <Apple />
                        <p className=''>{cat.name}</p>
                    </Link>
                </div>
            ))}
        </Card>
        {/* CARD FOR  SLIDER */}
        <Card className=' md:w-4/5 w-full flex flex-col border-none relative'>
             <div className={`flex flex-row gap-3 justify-between p-0 rounded-md transition-opacity ease-in-out duration-1000 opacity-100 bg-opacity-100} ${slidesData[currentSlide].bg}`}>
                   
                    <AspectRatio ratio={16/9} className=''>
                        <Image 
                        alt='slides Image' 
                        className={`object-cover w-full rounded-md bg-opacity-100 ease-in-out duration-1000 transition-opacity ${slidesData[currentSlide].bg}`}
                        src={slidesData[currentSlide].image} fill  quality={100} />
                    </AspectRatio>
            </div>

             {/* Dots Indicators */}
            <div className='flex justify-center absolute bottom-1 md:bottom-2 self-center'>
            {slidesData.map((_, index) => (
              <span
                key={index}
                onClick={() => handleDotClick(index)}
                className={`mx-2 cursor-pointer rounded-full h-2 w-2 md:h-4 md:w-4 ${
                  currentSlide === index ? 'bg-red-600 transition-all duration-1000' : 'bg-slate-900'
                }`}
              >
              </span>
            ))}
           </div>

        </Card>

         {/* <Card className=' md:hidden flex flex-row bg-transparent relative overflow-auto'>
            <div className=' flex flex-row gap-3'>

            {slidesData.map((slide, idx) => (
                <div key={idx} className=' flex flex-row  w-[80vw] '>
                    <AspectRatio ratio={16/9}>
                        <Image src={slide.image} height={100} width={100} quality={100} alt='slides image' className=' object-cover w-[80vw]' />
                    </AspectRatio>
                </div>
            ))}

            </div>
        </Card> */}
      </div>
    </MaxWrapper>
  )
}

export default IntroSection