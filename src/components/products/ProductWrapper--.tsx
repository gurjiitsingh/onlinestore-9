'use client'
import React from 'react'
import ProductBox from './ProductBox'
//import CartProvider from '@/store/CartProvider'

const ProductWrapper = ({products}) => {
  return (
    // <CartProvider>
    {products.map((product:TProduct)=>{
 
 return(
   <ProductBox key={product.name} product={product} />
 )

})}
    // </CartProvider>
  )
}

export default ProductWrapper