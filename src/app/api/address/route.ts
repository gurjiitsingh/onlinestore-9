import { NextRequest, NextResponse } from "next/server"
import { db } from '@/db';
import { address } from '@/db/schema'
import { eq, like, sql } from "drizzle-orm";

export async function GET(req:NextRequest){

    const searchParams = req.nextUrl.searchParams; 
  //  console.log(searchParams)
    const  userId:string | null  =  searchParams.get("userId");
  //  console.log(userId)

    const result = await db.select().from(address).where(sql`${address.userId} = ${userId}`);
   // await db.selectDistinct({ id: users.id }).from(users).orderBy(usersTable.id);
   // const result = await db.select().from(address).where(sql`${users.name} = 'Dan'`)
    //    const userAdd = result.map((item)=>{
//     return item.userId === userId
//    })
   //   console.log(result[0])
     return NextResponse.json({"data":result})
} 