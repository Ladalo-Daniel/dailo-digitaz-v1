"use client"

import React from 'react'
import { User } from '../../../../supabase/user'
import Image from 'next/image'
import Link from 'next/link'
import { side_bar_links } from '@/lib/utility'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

function LeftSidebar({ profile }: { profile?: User }) {
  const path = usePathname()

  const isRootRouteActive = path.startsWith('/dashboard');

  return (
    <nav className='leftsidebar bg-gray shadow-sm z-50 min-h-screen border border-r-gray-100 relative'
    >
     <div className="fixed h-full overflow-auto z-50 bg-white flex flex-col gap-4 min-h-screen left-0 min-w-[200px]">
     <Link href={'/'} className={'mt-3'}>
     <Image alt='Logo' src="/logos/logo2.png" width={100} quality={100} height={100} className=' rounded-md md:w-[150px] md:h-[50px]' />
     </Link> 
      <div className='flex flex-col gap-6 overflow-auto custom-scrollbar w-full p-2'>
        {side_bar_links.map(link => (
            <Link key={link.tooltip} href={link.href} className={cn("flex items-center hover:bg-red-500 hover:text-red-50 transition-all gap-2 p-2 rounded-md", {
              "bg-red-400 text-green-50 shadow-sm transition-all": isRootRouteActive && link.href.startsWith('/dashboard/posts') || path === link.href,
              "hidden": !(profile?.role === "admin" || profile?.role === "seller") && link.hidden,
            })}>
              {link.icon}
              <span>{link.tooltip}</span>
          </Link>
          ))}
        </div>
     </div>
    </nav>
  )
}

export default LeftSidebar