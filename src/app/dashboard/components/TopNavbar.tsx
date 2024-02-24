import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MobileSidebar from './MobileSidebar'
import { ModeToggle } from '@/components/ModeToggle'
import { Avatar } from '@nextui-org/avatar'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { User, getProfile } from '../../../../supabase/user'
import { NavbarCart } from '@/components/topnav/NavbarCart'
import NavbarSearch from '@/components/topnav/NavbarSearch'




const TopNavbar = async () => {
  const profile = await getProfile()

  return (
    <nav className='bg-white  backdrop-blur-md  px-2 flex md:px-10 items-center justify-between  fixed top-0 w-full z-10 h-16'
    >
      <Link href={'/'} className={ 'md:block '}>
      <Image alt='Logo' src="/logos/logo2.png" width={100} quality={100} height={100} className=' rounded-md md:w-[150px] md:h-[50px]' />
      </Link>

      
      <div className='flex  items-center gap-2'>
        <Link href={'/dashboard/profile'} className=' md:block'>
          <Avatar src={profile?.data?.image_url || ""} size='sm' name={profile?.data?.username || ""} color='primary' />
        </Link>
        <h1 className=' text-slate-800 text-nowrap'>Hi, {profile?.data?.username || "Guest"}</h1>
        <NavbarCart />
      </div>

    </nav>
  )
}

export default TopNavbar