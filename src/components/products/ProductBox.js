'use client'
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Suspense } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import { useContext } from "react";
import CartContext from "@/store/CartContext";
 //import Loading from "@/components/globals/Loading"
import { TProduct } from "@/lib/types";
import Link from "next/link";

const ProductBox = ({product}) => {
const { productId } = product;
  const CartCTX = useContext(CartContext);

 
  console.log(product)
   function addToCartHandler(product){
    console.log(product)
    CartCTX.addProductToCart(product)
  }

  return (
    // <Suspense fallback={<Loading />}>
    <Card key={product.name} className="p-3 bg-white">
     <Link href={{
pathname:`/products/${productId}`,
     }} >
  
    <CardContent className="flex justify-center h-[150px] overflow-hidden bg-slate-500">
  
    <Image 
    src={product.image}
    width="0"
    height="0"
    sizes="100vw"
    loading="eager" priority={true}
    className="w-full h-[150px]"
      alt={product.name} />
  
    </CardContent>
    
    <CardFooter className="flex flex-col gap-3 bg-slate-50 rounded-md p-2">
    <CardDescription className="w-full flex flex-col justify-between ">{product.name}</CardDescription>
    <CardDescription className="w-full flex flex-col justify-between ">${product.price}</CardDescription>
    </CardFooter>
    </Link> 
    {/* <CardFooter className="flex flex-col gap-3 bg-slate-50 rounded-md p-2"> */}
      <Button onClick={addToCartHandler.bind(null,product)}>Add to cart</Button>
    {/* </CardFooter> */}
  </Card>
  // </Suspense>
  )
}

export default ProductBox