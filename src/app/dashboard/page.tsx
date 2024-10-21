import Container from "@/components/globals/Container";
import Link from "next/link";
import { Folder, MessageCircle, Newspaper, User } from "lucide-react";
import React from "react";
import CartContent from "@/components/cart/cartcontent";
import DashboardCard from "@/components/dashboard/DashboardCard";
import Orders from "@/components/userAccount/Orders";

import Analytics from "@/components/dashboard/Analytics";
import { useSearchParams } from "next/navigation";

const page = ({searchParams}:{searchParams:{page:number}}) => {

  //const searchParams = useSearchParams();
//console.log("this is searchParams ",searchParams.get('page'))
//console.log("this is searchParams ",searchParams.page)
  return (
    <div className="flex flex-col text-slate-300 ">
    
      <div className="flex flex-col md:flex-row justify-between gap-5 mb-5">
        <DashboardCard
          title="Posts"
          count={100}
          icon={<Newspaper className="text-slate-500" size={72} />}
        />
        <DashboardCard
          title="Categories"
          count={100}
          icon={<Folder className="text-slate-500" size={72} />}
        />
        <DashboardCard
          title="User"
          count={100}
          icon={<User className="text-slate-500" size={72} />}
        />
        <DashboardCard
          title="Comments"
          count={100}
          icon={<MessageCircle className="text-slate-500" size={72} />}
        />
      </div>
      {/* <Analytics /> */}
     {/* <PaginationComponent pageCount={3} />
      <Orders limit={10} title="Orders" currentPage={searchParams.page} />
      <PaginationComponent pageCount={3} /> */}
      <Orders limit={10} title="Orders"  currentPage={searchParams.page}  />
    </div>
  );
};

export default page;
