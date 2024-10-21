import { getAllCategories } from '@/lib/categories'; 
import { NextResponse } from "next/server";
import  connectToDatabase from "@/lib/db";


export async function GET(req:Request){

 
    const client = await connectToDatabase();
    const collection =  client.db().collection('categories');
    const result = await collection.find().toArray();
   
return NextResponse.json({ data: result });

}