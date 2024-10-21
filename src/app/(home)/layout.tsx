import React from 'react'

import NavBar from '@/components/navbar/NavBar';
import Hero from '@/components/Hero';
interface Props {
    children: React.ReactNode;
  }
const Layout: React.FC<Props> = ({children}) => {
  return (

<>
    
      
         <NavBar />
         <Hero />
         <div> {children}</div>
      
  
    </>
  )
}

export default Layout