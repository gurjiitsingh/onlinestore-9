'use client'
import React from 'react'
import { TProduct } from '@/types/products'
import { useEffect,useState } from 'react'
import ProductBox from "@/components/products/ProductBox"
import  Container  from "@/components/globals/Container";
import BackButton from "@/components/BackButton";
import ProductsPagination from "@/components/products/ProductsPagination";
import Paginaiton from "@/components/pagination/usePaginaiton";
import PageButton from "@/components/pagination/pageButton";




const ProductWrapper = () => {
const [productData, setProductData ] = useState();

useEffect(() => {
  console.log("in useEffect")
  fetch('http://localhost:3000/api/productlist_')
    .then((res) => res.json())
    .then((data) => {
      setProductData(data.data)
      console.log("in fetch")  
    console.log(data)
    })
}, [])

//   useEffect(()=>{
//     console.log("in useEffect")

//     async function fetchData(){
//       console.log("in fetch")
//          let currentPage =1
//  let limit = 4;
//     const response = await fetch(process.env.NEXTAUTH_URL+`/api/productlist_?page=${currentPage}&limit=${limit}`,{
//      cache: 'no-cache',
//      next:{
//        tags:["products"],
//      }
   
//      });
//    const result = await response.json(); 
//    const products = result.data; 
//    console.log(products)
//    setProductData(products)
   
//    console.log(result)
//      }
 
   
//      fetchData();
 
//  },[])


 async function onPageChange(){

  console.log("currentPage")
  const limit = 4;
  const currentPage = 9;
  fetch('http://localhost:3000/api/productlist_'+`/api/productlist_?page=${currentPage}&limit=${limit}`)
  .then((res) => res.json())
  .then((data) => {
    setProductData(data.data)
    console.log("in fetch")  
  console.log(data)
  })
  // const response = await fetch(process.env.NEXTAUTH_URL+`/api/productlist_?page=${currentPage}&limit=${limit}`,{
  //   cache: 'no-cache',
  //   next:{
  //     tags:["products"],
  //   }
  
  //   });
  // const result = await response.json(); 
  // const products = result.data; 

}

  return (
    <>
    
    
     
     <Container className="my-[7%]">
     <BackButton link={'/allposts'} text="Back" />
     <div className="grid grid-cols-4 gap-4 ">
   {/* <ProductWrapper products={products} /> */}
   
   
      
       {productData && productData.map((product, i)=>{
    
    return(
      <ProductBox key={product.name} product={product} />
    )
   
   })}
      
    
   </div><div className="flex justify-center p-2 my-4">
     {/* <ProductsPagination /> */}
     <Paginaiton currentPage={1} limit={5} onPageChange={onPageChange} />
     {/* <PageButton  /> */}
   </div>
     </Container>
     </>
    
    
    
   
  )
}

export default ProductWrapper
