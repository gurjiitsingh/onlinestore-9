'use client'
import React from 'react'
import { SessionProvider } from "next-auth/react"

interface Props {
    children: React.ReactNode;
  }
const Layout: React.FC<Props> = ({children}) => {
  return (


    
<SessionProvider>
      
         <div> {children}</div>
         </SessionProvider>
  
  
  )
}

export default Layout