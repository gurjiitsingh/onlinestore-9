import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Sidbar = () => {
  return (
    <div>
        <div className="h-screen flex flex-col bg-blue-950 text-white px-2 py-[30px] text-[.9rem] font-semibold gap-2">
        
        <div className='flex gap-5 my-10'>
         <div className=''><Image src='/images/avitar.jpg' className="rounded-[100%] h-[70px] w-[70px]" width={100} height={100} alt="avitar" /></div>
<div className='flex flex-col gap-3'>
  <div>Jim</div>
  <div>Admin</div>
</div>
          
        </div>
        
        <div className=''>


              <Link href={"/"}>Home</Link>
            </div>
            <div className='p-2 bg-blue-950 rounded-lg'>
              <Link href={"/dashboard"}>Dashboard</Link>
            </div>
            <div className='p-2 bg-blue-950 rounded-lg'>
              <Link href={"/dashboard/products"}>Add Products</Link>
            </div>
            <div className='p-2 bg-blue-950 rounded-lg'>
              <Link href={"/dashboard/products"}>Show Products</Link>
             </div>
            <div className='p-2 bg-blue-950 rounded-lg'>
              <Link href={"/dashboard/categories"}>Add Category</Link>
            </div>
            <div className='p-2 bg-blue-950 rounded-lg'>
              <Link href={"/dashboard/users"}>Users</Link>
              </div>
              
            
            </div>
          </div>
  )
}

export default Sidbar