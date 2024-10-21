import { NextRequest, NextResponse } from "next/server";
import { orderHeader } from '@/db/schema'
import { db } from '@/db'

export  async function GET(req:NextRequest){

    const currentPage = req.nextUrl.searchParams;

try {
    console.log("thsi is current page no.",currentPage)
    const result = await db.select().from(orderHeader)
     return NextResponse.json({
        "status": "success",
        "data":{"orders": result}
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