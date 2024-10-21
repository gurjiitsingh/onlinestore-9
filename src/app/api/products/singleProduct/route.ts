import { NextRequest, NextResponse } from "next/server";
import { db } from '@/db'
import { product } from '@/db/schema'
import { sql } from "drizzle-orm";

export async function GET(req: NextRequest){

const searchParams = req.nextUrl.searchParams; 
const id = searchParams.get("id");
const productData = await db.select().from(product).where(sql`${product.productId} = ${id}`);

if(!productData){
    NextResponse.json({
        status:"error",
    message:  "Data not found",
    })
}

console.log("-------- inside single record-----",productData[0])

return NextResponse.json({
    status:"success",
    data:  productData[0],
})
}



// app.get('/api/books/:id', (req, res) => {
//     try {
//       const bookId = req.params.id;
  
//       // Retrieve book from the database
//       const book = database.getBookById(bookId);
  
//       // Check if the book exists
//       if (!book) {
//         // Return a 404 Not Found error
//         res.status(404).json({
//           error: 'Book not found',
//         });
//         return;
//       }
  
//       // Return the book details
//       res.json(book);
//     } catch (error) {
//       // Handle any unexpected errors
//       console.error('Error occurred:', error);
  
//       // Return a generic 500 Internal Server Error with a meaningful message
//       res.status(500).json({
//         error: 'An unexpected error occurred',
//       });
//     }
//   });











//     //alternaive way to fetch query string
// const url = new URL(req.url);
// const searchParams = new URLSearchParams(url.searchParams);
// const productId = searchParams.get('id') ;