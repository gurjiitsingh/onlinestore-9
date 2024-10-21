
import  Container  from "@/components/globals/Container";
import ProductBox from "@/components/products/ProductBox"

//import ProductWrapper from "@/components/products/ProductWrapper";
import { TProduct } from "@/lib/types";
import Counter from "@/components/counter"

import { useContext } from "react";
import Link from "next/link";
// import CartContent from "@/components/cart/cartcontent";
// import CartContext from "@/store/CartContext";


export default async function Home() {

  // const { cartData } = useContext(CartContext);

  // console.log(cartData)
  const currentPage = 1;
  const limit = 4; 
  let products = [{}];
  let total;

const response = await fetch(process.env.NEXTAUTH_URL+`/api/products/fetchAllProducs?page=${currentPage}&limit=${limit}`,{
  cache: 'no-cache',
  next:{
    tags:["products"],
  }

  });

if(response.ok){
  const result = await response.json(); 
   products = result.data.products; 
  total = result.data.total
  console.log(products)

}
//console.log(products)

  return (
  
  <>
   
  <Container className="my-[7%]">
  <Link href="/products">Shop</Link>
  <div className="grid grid-cols-4 gap-4 ">
{/* <ProductWrapper products={products} /> */}


   
    {products && products.map((product:TProduct)=>{
 
 return(
   <ProductBox key={product.name} product={product} />
 )

})}
   
 
</div>
  </Container>
  </>
  );
}
