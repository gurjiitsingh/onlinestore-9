"use client";
import React from "react";
import Sidebar from "@/components/userAccount/Sidbar";
import Navbar from "@/components/userAccount/Navbar";
import { SessionProvider } from "next-auth/react";
interface Props {
  children: React.ReactNode;
}
const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      {" "}
      <SessionProvider>
        <div className="mt-0 flex flex-col gap-4 bg-slate-800">
          <div className="flex flex-row">
            <div className="w-[15%] h-screen flex flex-col   text-[1.3rem] font-semibold gap-5">
              <Sidebar />
            </div>
            <div className="w-[85%] flex flex-col p-5">
              <Navbar />

              <div> {children}</div>
            </div>
          </div>
        </div>
      </SessionProvider>
    </>
  );
};

export default Layout;
