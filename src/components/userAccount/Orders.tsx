"use client"
import { OrderType } from '@/types/orders';
import { PaginationComponent } from '@/components/PaginationComponent'
import { PaginationComponentClient } from '@/components/PaginationComponentClient'
import React, { useEffect, useState } from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
    TableCaption,
  } from "@/components/ui/table"

import orders from '@/data/orders';
import { Button } from '../ui/button';
import Link from 'next/link';


type OrderTableProps ={
       currentPage?: number;
       limit?: number;
       title?: string;
    }

const Orders = ({ currentPage, limit=10, title}: OrderTableProps) => {
   
// Sort posts in dec order based on date
// const sortedOrders: OrderType[] = [...orders].sort((a,b)=>{
//     return new Date(b.date).getTime() - new Date(a.date).getTime() 
// })

//console.log(currentPage, limit)
const [ orders, setOrders ] = useState([]);
const [ totalPages, setTotalRecors] = useState(10)


useEffect(()=>{
    //process.env.NEXTAUTH_URL
    const page= 1;
  async function fetch_order(){
    const res = await fetch(`http://localhost:3000/api/order/display?page=${page}&limit=10`)
    const result = await res.json();
    
if(result.status === "success"){
    console.log("total orders",result.data.total[0].count)
    setOrders(result.data.orders)
    setTotalRecors(result.data.total[0].count/limit)
}
else{

    console.log(result.message)
}

//console.log((totalPages/limit)-1)
    }
  fetch_order();  
  //console.log("orders ",orders)
    
    },[])

    useEffect(()=>{
        //process.env.NEXTAUTH_URL
        
      async function fetch_order(){
        const res = await fetch(`http://localhost:3000/api/order/display?page=${currentPage}&limit=${limit}`)
        const result = await res.json();
        
    if(result.status === "success"){
       // console.log(result.data.orders)
        setOrders(result.data.orders)
    }
    else{
    
        console.log(result.message)
    }
    
        
        }
      fetch_order();  
      //console.log("orders ",orders)
        
        },[currentPage])

  return (<>
   <div className='mt-10 p-2'>
    <h3 className='text-2xl mb-4 font-semibold'>{title ? title: 'Orders'}</h3>
    <PaginationComponent pageCount={totalPages} />
    <PaginationComponentClient pageCount={totalPages} />
<Table>
    <TableCaption>Order Detail</TableCaption>
    <TableHeader>
        <TableRow>
        <TableHead className='hidden md:table-cell'>Order Id</TableHead>
            <TableHead className='hidden md:table-cell'>Status</TableHead>
            <TableHead className='hidden md:table-cell'>Shipment Id</TableHead>
            <TableHead className='hidden md:table-cell'>Shipment Address Id</TableHead>
            <TableHead className='hidden md:table-cell'>Order Amount</TableHead>
            <TableHead >Date</TableHead>
            <TableHead className='hidden md:table-cell'>Action</TableHead>
        </TableRow>
    </TableHeader>
    <TableBody>
{orders.map((order:OrderType)=>{
return(
    <TableRow key={order.orderHeaderId}>
        <TableCell>{order.orderHeaderId}</TableCell>
        <TableCell>{order.orderStatus}</TableCell>
        <TableCell>{order.shipingID}</TableCell>
        <TableCell>{order.ShippingAddressID}</TableCell>
        <TableCell>{order.totalAmount}</TableCell>
        <TableCell>{order.orderDate}</TableCell>
        <TableCell><Link href={{
            pathname: '/dashboard/order/orderdetail',
            query:{orderHeaderId:order.orderHeaderId,userId:order.userId,ShippingAddressID:order.ShippingAddressID,orderStatus:order.orderStatus}
        }}><Button>Detail</Button></Link></TableCell>
    </TableRow>
)
})}

    </TableBody>
</Table>


   </div></>
  )
}

export default Orders

 
