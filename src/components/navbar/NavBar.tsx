'use client'
import React from 'react'
import CartLink from '@/components/navbar/CartLink'
import { SessionProvider } from "next-auth/react"


//import CartProvider from '@/store/CartProvider'
import Container from '../globals/Container'
import Link from 'next/link'
import Menu from './Menu';

const NavBar = () => {
 
  return (
    <SessionProvider>
        <div className='bg-blue-500'>
   <Container className='flex flex-row items-center  justify-between'>
   <Menu />
   <CartLink />
   </Container>
   </div>
    </SessionProvider>
  )
}

export default NavBar