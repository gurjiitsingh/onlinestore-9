import { useSearchParams } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req:NextRequest,{params}:{params:{orderid: String}}){
    
// json data
const data1 = await req.json();
console.log(data1)

 
const searchParams = req.nextUrl.searchParams;
    const productid = searchParams.get("productid")
    console.log("query string", productid)
 

//Dynamic url string
const { orderid } = params;
console.log("dynamic url string", orderid)


const data ={
    name:"in cat id"
}

return new NextResponse(JSON.stringify(data),{
    headers:{
        "Content-Type":"application/json"
    },
    status: 200,
});








// query string
// const { searchParams } = new URL(req.url)  
// const productid = searchParams.get("productid");
// console.log("Query strings ", productid)



// const data ={
//     name:"in cat id"
// }
// return new Response(JSON.stringify(data),{
//     headers:{
//         "Content-Type":"application/json"
//     },
//     status: 200,
// });


}

