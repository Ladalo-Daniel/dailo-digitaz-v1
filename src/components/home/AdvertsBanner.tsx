import React from 'react'
import MaxWrapper from '../MaxWrapper'
import { Card } from '../ui/card'
import { AspectRatio } from '../ui/aspect-ratio'
import Image from 'next/image'

function AdvertsBanner() {
  return (
    <MaxWrapper  className='py-8 bg-red-100 max-w-7xl md:py-8 px-0 md:px-14'>
        <Card className=' p-2 md:p-4 bg-red-400'>
            <AspectRatio ratio={16/9}>
                <Image src="/slides/6.gif" alt='advert banner' fill quality={100} className=' rounded-md' />
            </AspectRatio>
        </Card>
    </MaxWrapper>
  )
}

export default AdvertsBanner