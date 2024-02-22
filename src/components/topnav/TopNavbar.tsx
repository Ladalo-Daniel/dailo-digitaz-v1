import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import NavbarSearch from './NavbarSearch'

import {Avatar} from "@nextui-org/avatar";
import { NavbarCart } from './NavbarCart';

function TopNavbar() {
  return (
    <nav className=' flex max-w-7xl flex-col gap-2 top-0 z-50 sticky bg-white '>

     <div className=' flex flex-row justify-between gap-3 items-center bg-gray-50 h-[60px] px-5 md:px-14 py-1'>
      <Link href="/">
        <Image alt='Logo' src="/logos/logo2.png" width={100} quality={100} height={100} className=' rounded-md md:w-[150px] md:h-[50px]' />
      </Link>
      
      <div className=' hidden md:block '>
       <NavbarSearch />
      </div>

      <div className=' flex flex-row gap-2 items-center'>
         <Link href="" className=' flex flex-row gap-2 items-center'>
            <Avatar alt='profile image' src='' size="sm" />
            <span className=' text-sm md:text-lg'>Hi Ladalo</span>
         </Link>
         <NavbarCart />
      </div>
     </div>

     <div className=' flex flex-row gap-2 md:hidden items-center justify-center w-[90vw] px-5 md:px-14 py-1 ' >
        <NavbarSearch />
     </div>

    </nav>
  )
}

export default TopNavbar