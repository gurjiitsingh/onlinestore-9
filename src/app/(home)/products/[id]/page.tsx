
import Container from '@/components/globals/Container';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react'
import AddToCartButton from '@/components/cart/AddToCartButton';
//import { useParams } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

type TProductDB ={
productId: String,
    name: String,
    price: String,
    company: String,
    productCat: String,
    productDesc: String,
    image: String,
    featured: String,
}
const page = async ({params}:{params:String}) => {
let product;
try {
let res = await fetch(process.env.NEXTAUTH_URL+`/api/products/singleProduct?id=${params.id}`,{
  cache: 'no-store'
})
if(res.status === 200){

 let result = await res.json();
  if(result.status === 'success'){
    product = result.data;
  }
}


} catch (error) {
  console.log(error)
}
console.log("data ------", product)
function addToCart(id){
  console.log("this is", id)
}
const id = product.productId
  return (
   <Container className='mt-[20px]'>


<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/products">All products</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>{product.name}</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>




    {product && 

       
      <div className='flex flex-col md:flex-row gap-10 w-full mx-auto my-12 border-2 rounded-md p-6'>
<div className='flex flex-col '>
<Image src={product.image} alt={product.name} 
width={550} height={550}
//sizes='(max-width:768px) 100vw,(max-width:1200px) 50vw, 33vw'
priority


/>
</div>
<div className='flex flex-col gap-3'>
<div className='flex flex-col gap-3'>
  <h1 className='text-[2rem] font-semibold'>{product.name}</h1>
  <p className='text-[1rem] bg-muted'>{product.productDesc} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet non perspiciatis possimus neque consequuntur hic eveniet error dolorum voluptate voluptates.</p>
  <p className='text-[1rem] font-semibold'> ${product.price}</p>
  <div><AddToCartButton product={product}>Add to cart</AddToCartButton> </div>
</div>
</div>
  
      </div>
      
     

    }
    
    </Container>
  )
}

export default page