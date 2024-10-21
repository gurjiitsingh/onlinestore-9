import { request } from "http"
import { NextRequestWithAuth, withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(request:NextRequestWithAuth) {
    console.log(request.nextauth.token)

    if(request.nextUrl.pathname.startsWith("/dashboard")
     && request.nextauth.token?.role !== "admin")
   return NextResponse.rewrite(
     new URL("/", request.url)
   )
   if(request.nextUrl.pathname.startsWith("/user")
     && request.nextauth.token?.role !== "admin"
   && request.nextauth.token?.role !== "user")
   return NextResponse.rewrite(
     new URL("/", request.url)
   )


  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  },
)

export const config = { matcher: ["/dashboard", "/user"] }


// export { default } from "next-auth/middleware"

// export const config = {
//      matcher: ["/dashboard(.*)"]
//      }



// import { useSession } from "next-auth/react";
// import { NextRequest, NextResponse }  from "next/server";

// export function middleware(req:NextRequest){
   
//     const {data: session } = useSession();


// console.log(req.url)
// return NextResponse.redirect(new URL('/auth/login',req.url ))

// }


// export const config = {

//     matcher: ['/dashboard', 'user']
// }