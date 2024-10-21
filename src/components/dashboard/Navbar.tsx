// 'use client'
// import { usePathname } from 'next/navigation'
// import React from 'react'

// const Navbar = () => {
// const pathname = usePathname();

//   return (
//     <div className='box-border w-full p-3 my-5 rounded-lg flex flex-row bg-blue-950 text-white'>
      
      
//   <div className='uppercase'> {pathname.split("/").pop()}</div>  
//       </div>
//   )
// }

// export default Navbar



'use client'
import { usePathname } from 'next/navigation'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
const Navbar = () => {
const pathname = usePathname();

  return (
    <div className='box-border w-full  px-4 py-2 my-2 rounded-lg flex flex-row justify-between items-center bg-primary dark:bg-slate-700 text-white'>
      
      
  <div className='uppercase'> {pathname.split("/").pop()}</div>
  
  
    <div>



<DropdownMenu>
  <DropdownMenuTrigger className='focus:outline-none'>
    

  <Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>


  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem>Team</DropdownMenuItem>
    <DropdownMenuItem>Subscription</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>






  </div>
      </div>
  )
}

export default Navbar