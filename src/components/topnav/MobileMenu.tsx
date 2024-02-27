import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Apple, Menu } from "lucide-react"
import { brandsCategories } from "../home/homeUtils"
import Link from "next/link"

export function MobileMenu({isNeeded}:{isNeeded?:boolean}) {
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
      <SheetContent side="left" >
        <SheetHeader>
          <SheetTitle>Gadgets Categories</SheetTitle>
        </SheetHeader>
        <div className=' p-3 md:flex gap-3 flex-col '>
            {brandsCategories.map((cat, idx) => (
                <div key={idx} className=' flex  gap-9 justify-between'>
                    <Link href={cat.link} className=' flex flex-row gap-3'>
                        <Apple />
                        <p className=''>{cat.name}</p>
                    </Link>
                </div>
            ))}
        </div>
      </SheetContent>
    </Sheet>
  )
}
