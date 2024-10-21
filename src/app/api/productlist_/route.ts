import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { product } from "@/db/schema";
import { asc, count } from "drizzle-orm";
//import Products from "@/models/productModel";
//import User from "@/models/userModel";
//import connectToDatabase from "@/lib/db";
//import { connect } from "@/dbConfig/dbConfig";



//connect();

export async function GET(req: NextRequest) {
  const params = req.nextUrl.searchParams;
  const url = new URL(req.url);
  // console.log(url)
  const searchParams = new URLSearchParams(url.searchParams);
  const currentPage = Number(searchParams.get("page")) || 1;
  const limit = Number(searchParams.get("limit")) || 4;
  let skip = (currentPage - 1) * limit;


  //console.log("limit------------ ", limit)

  // const pro = await db.select().from(products);

  const pro = await db
    .select()
    .from(product)
    // .orderBy(asc(products.id)) // order by is mandatory
    .limit(limit)
    .offset(skip);


   
    const total = await db.select({ count: count() }).from(product);

  //console.log("-------Product list in route handler-------",pro)

  return NextResponse.json({
    status: "success",
    data:{ products: pro, total }
});
}

// prisma

//  console.log(typeof currentPage )

// const pro = await Products.find({}).skip(skip).limit(limit);

// mongoose

//return NextResponse.json({ data: pro });
// const client = await connectToDatabase();
// const collection = client.db().collection("products");
// const result = await collection.find().toArray();
//  console.log(result)
//return NextResponse.json({ data: {name:"lkjk"} });
// return NextResponse.json({ data: result });
