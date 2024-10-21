'use server'
import { TaddressSchema } from "@/lib/types";
import { address } from '@/db/schema'
import { db } from '@/db'
import { cookies } from 'next/headers'

export async function addUserAddress(data: TaddressSchema){

    // const cookieStore = await cookies()
    // const userData = await cookieStore.get('user_session')
    // console.log("user cookie data", userData)

//console.log(data.addressline1,data.addressline2,data.city,data.state,data.zip,data.userId)

try {

    const result = await db.insert(address).values({
        userId: data.userId,
        addressLine1: data.addressline1,
      addressLine2: data.addressline2,
      city: data.city,
      state: data.state,
      zipcode: data.zip, 
    })

   // console.log(result)

} catch (error) {
    console.log(error)
}





}