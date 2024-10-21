"use client";
import { OrderType } from "@/types/orders";

import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableCaption,
} from "@/components/ui/table";

import orders from "@/data/orders";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

type OrderTableProps = {
  limit?: number;
  title?: string;
};
const OrdersDetail = () => {
  const [ordersDetail, setOrdersDetail] = useState([]);
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderHeaderId");
//     //process.env.NEXTAUTH_URL
  useEffect(() => {
  //  console.log("props", searchParams.get("orderHeaderId"));
    async function fetch_order() {
      const res = await fetch(
        `http://localhost:3000/api/order/display/${orderId}`
      );
      const result = await res.json();

      if (result.status === "success") {
      //  console.log("order ",result.data.orders);
        setOrdersDetail(result.data.orders);
      } else {
        console.log(result.message);
      }

    }
    fetch_order();
  //  console.log("ordersDetail ",ordersDetail);
  }, []);




  return (
    <>
      <div className="mt-10 p-2">
        {/* <h3 className='text-2xl mb-4 font-semibold'>{title ? title: 'Orders'}</h3> */}
        <Table>
          <TableCaption>Order Detail</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="hidden md:table-cell">Order Detail Id</TableHead>
               <TableHead className="hidden md:table-cell">
                Order Id
              </TableHead>
              <TableHead className="hidden md:table-cell">
               Product Id
              </TableHead>
              <TableHead className="hidden md:table-cell">
                Quantity
              </TableHead>
              <TableHead className="hidden md:table-cell">
                Sub Total
              </TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="hidden md:table-cell">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {ordersDetail && ordersDetail.map((order:OrderType)=>{
return(
    <TableRow key={order.orderDetailId}>
        <TableCell>{order.orderDetailId}</TableCell>
        <TableCell>{order.orderId}</TableCell>
        <TableCell>{order.productId}</TableCell>
        <TableCell>{order.quantity}</TableCell>
        <TableCell>{order.subtotal}</TableCell>
        <TableCell>{order.orderDate}</TableCell>
        <TableCell><Link href={{
            pathname: '/dashboard/detail'
        }}><Button>Detail</Button></Link></TableCell>
    </TableRow>
)
})}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default OrdersDetail;
