import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { ProductType } from  '@/utils/types'
import { useCartContext } from '@/store/CartContext'
import Link from 'next/link';
//<ProductType[]>
const CartLink = () => {
const { cartData } = useCartContext();
const totalProcuts = cartData.length;
//console.log(totalProcuts)
  return (
    <Link href="/cart"><div className='flex flex-row gap-3 w-full justify-between items-center ml-3 text-white border-2 rounded-md px-2 py-1'><FaShoppingCart /><div>{totalProcuts}</div></div></Link>
  )
}

export default CartLink