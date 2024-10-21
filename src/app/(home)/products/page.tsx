
//import ProductWrapper from "@/components/products/ProductWrapper";
import { TProduct } from "@/lib/types";
import ProductBox from "@/components/products/ProductBox"
import  Container  from "@/components/globals/Container";
import BackButton from "@/components/BackButton";
import ProductsPagination from "@/components/products/ProductsPagination";
import Paginaiton from "@/components/pagination/usePaginaiton";
import PageButton from "@/components/pagination/pageButton";
//import PaginationComponentCustom from '@/components/PaginationComponentCustom'
import PaginationComponentServer from "@/components/paginationComponentServer";
import Link from "next/link";


interface SearchParamsProps {
  searchParams: {
    page: string;
  };
}

export default async function Products({ searchParams }: SearchParamsProps) {

  const pageNumber = Number(searchParams.page ?? 1);



//console.log("pageNumber ",pageNumber)

let products = [{}];
let limit = 2;
let total;
   const response = await fetch(process.env.NEXTAUTH_URL+`/api/products/fetchAllProducs?page=${pageNumber}&limit=${limit}`,{
    cache: 'no-cache',
    next:{
      tags:["products"],
    }
  
    });
    if(response.ok){
  const result = await response.json(); 
   products = result.data.products; 
   total = result.data.total[0].count
  //console.log(products)
  
    }

  
  

  

  
 return (
  <>
  
  
   
   <Container className="my-[7%]">
   <BackButton link={'/'} text="Back" />
   <div className="grid grid-cols-4 gap-4 ">
 {/* <ProductWrapper products={products} /> */}
 
 
    
     {products && products.map((product, i)=>{
  
  return(
    <ProductBox key={i} product={product} />
  )
 
 })}
    
  
 </div><div className="flex justify-center p-2 my-4">
   {/* <ProductsPagination /> */}
   {/* <Paginaiton currentPage={1} limit={5} onPageChange={onPageChange} /> */}
   {/* <PageButton  /> */}

 
<div className="flex gap-4">
{/* {showPrev && <Link href={`/products?page=${prevPage}&limit=${limit}`}>Prev</Link>}
<Link href={`/products?page=${2}&limit=${limit}`}>2</Link>
{showNext && <Link href={`/products?page=${nextPage}&limit=${limit}`}>Next</Link>} */}

<PaginationComponentServer limit={limit} total={total} currentPage={pageNumber} />
  
</div>
   
 </div>
   </Container>
   </>
  
  
  
 
)
}
