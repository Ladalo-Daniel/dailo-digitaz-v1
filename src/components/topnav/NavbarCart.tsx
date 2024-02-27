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
import { ShoppingCart } from "lucide-react"
import {Badge} from "@nextui-org/badge";
import Image from "next/image"
import { AspectRatio } from "../ui/aspect-ratio"

export function NavbarCart() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div  className=" flex flex-row h-[35px] gap-2 items-center  ring-white cursor-pointer">
          <Badge content="5" color="danger" placement="top-right" size='sm'>
           <ShoppingCart size={18} className=" text-gray-600" />
          </Badge>
          <span className=" text-gray-600">Cart</span>
        </div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Your Cart</SheetTitle>
          <SheetDescription className=" text-red-500 text-lg mt-5">
           Ooops, No Gadget in Cart yet!
          </SheetDescription>
        </SheetHeader>
        <div className=" mt-10">
          <AspectRatio ratio={16/12}>
            <Image src="/gallery/cart2.jpg" fill alt="cart image" className=" rounded-md" />
          </AspectRatio>
        </div>
          
      </SheetContent>
    </Sheet>
  )
}
