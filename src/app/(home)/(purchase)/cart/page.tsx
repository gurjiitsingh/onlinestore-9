'use client'
import React from 'react'
import CartContent from '@/components/cart/cartcontent'
import  Container  from "@/components/globals/Container";
import Link from 'next/link';
import { useSession } from "next-auth/react";
import path from 'path';
const Cart = () => {

  const { data: session } = useSession();

  //console.log("seee", session)

  return (
    <Container className="my-[7%]">
      <Link
      href={{
        pathname: '/address',
        query:{ userId: session?.user?.id}
      }        
      }
     >Proceed to Buy</Link>
    <CartContent/>
    </Container>
  )
}

export default Cart