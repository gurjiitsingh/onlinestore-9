'use client'
import React from 'react'

const Paginaiton = ({currentPage=0, limit=4,onPageChange}:{currentPage:number, limit:number,onPageChange:()=>void}) => {

const one = currentPage;
const two = currentPage+1;
const three = currentPage+2;



  return (
   <div className='flex gap-3'>
   <div className='p-3 bg-slate-400 rounded-md'><button onClick={()=>onPageChange()}>{one}</button></div>
   <div className='p-3 bg-slate-400 rounded-md'><button onClick={()=>onPageChange()}>{two}</button></div>
   <div className='p-3 bg-slate-400 rounded-md'>{three}</div>
   <div className='p-3 bg-slate-400 rounded-md'><button onClick={()=>onPageChange()}>Next</button></div>
   </div>
  )
}

export default Paginaiton