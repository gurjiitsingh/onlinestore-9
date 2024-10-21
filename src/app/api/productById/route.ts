import { NextRequest, NextResponse } from "next/server";
import { connect } from '@/dbConfig/dbConfig';
import Products from '@/models/productModel';
connect();

export async function GET(req:NextRequest) {

    const params = req.nextUrl.searchParams;
    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.searchParams);
    const productId = searchParams.get('id') ;
    

const response = await Products.find({_id:productId})


  return NextResponse.json({data:response});  
}