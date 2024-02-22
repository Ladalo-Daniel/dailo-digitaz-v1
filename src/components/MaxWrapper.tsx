import { cn } from '@/lib/utils'
import React, { ReactNode } from 'react'

const MaxWrapper = ({ children, className, noOverflow, ...style }: { children: ReactNode, className?: string, noOverflow?: boolean, style?: any}) => {
  return (
    <div className={cn('md:py-16 p-6 md:px-14 max-w-5xl px-5 min-h-screen h-full ', className, {
      "common-containe": !noOverflow,
    })} {...style}>
      {children}
    </div>
  )
}

export default MaxWrapper