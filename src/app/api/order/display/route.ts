import { NextRequest, NextResponse } from "next/server";
import { orderHeader } from '@/db/schema'
import { db } from '@/db'
import { asc, count } from "drizzle-orm";

export  async function GET(req:NextRequest){

    const searchParams = req.nextUrl.searchParams;

try {
  //  console.log("thsi is curent pages",searchParams.get('page'),searchParams.get('limit'))
const curentPage = Number(searchParams.get('page'));
const recordLimit = Number(searchParams.get('limit'))
const offSet = (curentPage -1)*recordLimit

    const result = await db.select()
    .from(orderHeader)
    .orderBy(asc(orderHeader.orderHeaderId)) // order by is mandatory
    .limit(recordLimit) // the number of rows to return
    .offset(offSet); // the number of rows to skip

   const total = await db.select({ count: count() }).from(orderHeader);

     return NextResponse.json({
        "status": "success",
        "data":{"orders": result,total}
    })
   
    
} catch (error) {
    console.log(error)
    return NextResponse.json({
        "status": "error",//"status" : "fail",
        "message" : "Unable to communicate with database"
    })
}

    return NextResponse.json({
        "status": "error",//"status" : "fail",
        "message" : "Something went wrong"
    })
}