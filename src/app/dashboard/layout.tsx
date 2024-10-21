import React from 'react'
import Sidebar from '@/components/dashboard/Sidbar';
import Navbar from '@/components/dashboard/Navbar';
interface Props {
    children: React.ReactNode;
  }
const Layout: React.FC<Props> = ({children}) => {
  return (

<>
    <div className="mt-0 flex flex-col gap-4 bg-slate-800">
    <div className="flex flex-row">
      <div className="w-[15%] h-screen flex flex-col   text-[1.3rem] font-semibold gap-5">
         <Sidebar />
      </div>
      <div className="w-[85%] flex flex-col p-5 text-slate-200">
         <Navbar />
         <div> {children}</div>
      </div>
    </div>
  </div>
 </>
  )
}

export default Layout