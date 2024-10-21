'use client'

import { useSearchParams } from 'next/navigation'
import AddressForm from "./AdressForm"
import AdressFrom from "./AdressForm"
import { useSession } from "next-auth/react";
const page = () => {
  const searchParams = useSearchParams()
 
  const userId = searchParams.get('userId')
//console.log(userId)
 
  

  return (
    {userId} && <AddressForm userId={userId} />    
   
  )
}

export default page