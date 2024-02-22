import React from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Search } from 'lucide-react'

function NavbarSearch() {
    return (
        <div className=" w-full max-w-sm items-center space-x-2 flex gap-2 md:flex">
          <Input 
          type="search" 
          placeholder="Search products and brands"  
          className=' md:w-[230px] lg:w-[400px] outline-none ' />
          <Button type="submit" className=' bg-red-400 text-white'>Search</Button>
        </div>
      )
}

export default NavbarSearch