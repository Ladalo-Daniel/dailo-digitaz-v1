"use client"

import React from 'react'
import { ArrowRight, Menu } from 'lucide-react'
import { Button, Button as ShadButton } from '@/components/ui/button'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from '@/components/ui/sheet'
import { side_bar_links } from '@/lib/utility'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import Image from 'next/image'
import { User } from '../../../../supabase/user'


const MobileSidebar = ({profile, isNeeded}: {profile: User, isNeeded?: boolean}) => {
    const path = usePathname()

    const isRootRouteActive = path.startsWith('/dashboard');


  return (
    <Sheet>
       <div className=" flex items-center justify-center">
        <SheetTrigger asChild className={`bottom-2 fixed md:hidden ${isNeeded === false && "hidden"}`}>
            <Button variant="outline" className=" flex flex-row gap-1 items-center bg-red-400 text-white rounded-full">
            <Menu size={18} />
            <span>Menu</span>
            </Button>
        </SheetTrigger>
        </div>
      <SheetContent className='md:hidden min-h-screen overflow-auto mt-0 pt-0 bg-white' side={'left'}>
        <SheetHeader className='flex flex-col flex-1 items-start pt-0 mt-3 '>
          <SheetTitle>
          <Link href={'/'} className={'md:hidden'}>
          <Image alt='Logo' src="/logos/logo2.png" width={100} quality={100} height={100} className=' rounded-md md:w-[150px] md:h-[50px]' />
          </Link>
          </SheetTitle>
        </SheetHeader>
        <div className='flex flex-col gap-6 overflow-auto custom-scrollbar mt-5'>
           {side_bar_links.map(link => (
            <Link key={link.tooltip} href={link.href} className={cn("flex items-center hover:bg-red-500 hover:text-red-50 transition-all gap-2 p-2 rounded-md", {
              "bg-red-400 text-green-50 shadow-sm transition-all": isRootRouteActive && link.href.startsWith('/dashboard/posts') || path === link.href,
              "hidden": !(profile?.role === "admin" || profile?.role === "staff") && link.hidden,
            })}>
              {link.icon}
              <span>{link.tooltip}</span>
          </Link>
          ))}
        </div>
      </SheetContent>
      </Sheet>
  )
}

export default MobileSidebar