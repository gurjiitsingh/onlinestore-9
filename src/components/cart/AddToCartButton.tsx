'use client'
import React from 'react'
import { Button } from '../ui/button'
import { useCartContext } from '@/store/CartContext';


 function AddToCartButton({children, product}) {

  const { cartData, addProductToCart } = useCartContext();
  //console.log(props)
  return (
    <Button onClick={() => addProductToCart(product)}>{children}</Button>
  );
}

export default AddToCartButton