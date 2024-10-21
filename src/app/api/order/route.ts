import { db } from "@/db";
import { orderHeader } from "@/db/schema";
import { orderDetail } from "@/db/schema";
import { NextResponse } from "next/server";
export async function POST(req: Request) {
  const {
    cartData,
    userId,
    totalAmount,
    shipingID,
    ShippingAddressID,
    BillingAddressID,
    orderStatus,
  } = await req.json();

  //console.log("orderData", userId, total)

  if (!userId) {
    throw new Error("Please login");
  }

  let insertedId;

  try {
    insertedId = (
      await db
        .insert(orderHeader)
        .values({
          userId,
          totalAmount,
          shipingID,
          ShippingAddressID,
          BillingAddressID,
          orderStatus,
        })
        .returning({ insertedId: orderHeader.orderHeaderId })
    )[0].insertedId;

    // const resultId = (await Database.insert(UsersTable).values(userInsert).returning())[0].id
  } catch (error) {
    console.log(error);
  }

 // console.log(insertedId);
  let values = []; //if place {} object inside array it insert null record to table
  // so to remove error if you add empty object first clear array before add elemnet to array
  if (insertedId) {
  //  console.log("order full record ", cartData);

    cartData.forEach((element) => {
     // console.log("indiual", element);
      values.push({
        orderId: insertedId,
        productId: "6532710a-2edb-45c5-beb1-41a4052eb753", //element._id,
        quantity: 34, //element.count,
        subtotal: 345, //element.price*element.count,
      });
    });

    try {
      const res1 = await db.insert(orderDetail).values(values);

      // console.log(res1)
    } catch (error) {
      console.log(error);
    }
  }


  return NextResponse.json({
    "status":200,
    "data":{"insertedId":insertedId }
  })
  
    

  // return new Response(
  //   JSON.stringify({
  //     data: insertedId,
  //   }),
  //   {
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     status: 200,
  //   }
  // );


}
