import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { product } from "@/db/schema";
import { asc, count } from "drizzle-orm";

export async function GET(req: NextRequest) {
  //const params = req.nextUrl.searchParams;
  console.log("--------- fetchSIngle")
  try {
    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.searchParams);
    const currentPage = Number(searchParams.get("page")) || 1;
    const limit = Number(searchParams.get("limit")) || 4;
    let skip = (currentPage - 1) * limit;
    const products = await db
      .select()
      .from(product)
      // .orderBy(asc(products.id)) // order by is mandatory
      .limit(limit)
      .offset(skip);

    const total = await db.select({ count: count() }).from(product);

  //  console.log(total)
    return NextResponse.json({
      status: "success",
      data: { products: products, total },
    });
  } catch (error) {
  //  console.log(error)
    return NextResponse.json({
        status: "error",
        message: error,
      });
  }
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
