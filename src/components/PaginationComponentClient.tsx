import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DotsHorizontalIcon,
} from "@radix-ui/react-icons"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { Button } from "@/components/ui/button";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

//import { usePathname } from 'next/navigation'
import http from 'url';
const myURL = new URL('https://localhost:3000'); 

export const PaginationComponentClient = ({pageCount}) => {
  
 const searchParams = useSearchParams()
 const pathname = usePathname()
 const router = useRouter()

 let currentPage = Number(searchParams.get("page")) | 1;

 function nextPage(){
   console.log(searchParams.get("page"))
 currentPage = Number(currentPage) + 1;
  router.push(`http://localhost:3000/${pathname}?page=${currentPage}`)
 }

 

  return (
    <div className="flex flex-row px-3 items-center"><Pagination>   
    <Button 
       ><ChevronLeftIcon className="h-4 w-4" /><span>Previous</span></Button>   
       {currentPage}
    <Button
     onClick={()=>{nextPage()}}
    ><span>Next</span><ChevronRightIcon className="h-4 w-4" /></Button> 
    </Pagination>
    </div>
  )
}

