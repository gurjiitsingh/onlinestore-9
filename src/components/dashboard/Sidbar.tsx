import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  LayoutDashboard,
  Newspaper,
  Folders,
  CreditCard,
  Settings,
  User,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

const Sidbar = () => {
  return (
    <div>
      <div className="hidden  h-screen md:flex md:flex-col  bg-primary dark:bg-slate-700 text-white px-2 py-[30px] text-[.9rem] font-semibold gap-2">
        <Command className="bg-secondary">
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>
                <LayoutDashboard className="mr-2 h-4 w-4" />
                <Link href="/dashboard">Dashboard</Link>
              </CommandItem>
              <CommandItem>
                <Folders className="mr-2 h-4 w-4" />
                <Link href={"/dashboard/products/newproduct"}>Add Products</Link>
              </CommandItem>
              <CommandItem>
                <Newspaper className="mr-2 h-4 w-4" />
                <Link href={"/dashboard/products/allproducts"}>Show Products</Link>
              </CommandItem>
              <CommandItem>
                <Newspaper className="mr-2 h-4 w-4" />
                <Link href={"/dashboard/categories"}>Add Category</Link>
              </CommandItem>
              <CommandItem>
                <Newspaper className="mr-2 h-4 w-4" />
                <Link href={"/dashboard/users"}>Users</Link>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem>
                <User className="mr-2 h-4 w-4" />  
                <span>Profile</span>
                <CommandShortcut>XP</CommandShortcut>
              </CommandItem>

              <CommandItem>
                <CreditCard className="mr-2 h-4 w-4" />
                <span>Billing</span>
                <CommandShortcut>XP</CommandShortcut>
              </CommandItem>

              <CommandItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
                <CommandShortcut>XP</CommandShortcut>
              </CommandItem>
             
            </CommandGroup>
          </CommandList>
        </Command>

        <div className="">
          <Link href={"/"}>Home</Link>
        </div>

        <div className="p-2 bg-blue-950 rounded-lg">
          <Link href={"/user"}>Dashboard</Link>
        </div>
        <div className="p-2 bg-blue-950 rounded-lg">
          <Link href={"/user/address"}>Address </Link>
        </div>
        <div className="p-2 bg-blue-950 rounded-lg">
          <Link href={"/user/order"}>Your Orders</Link>
        </div>
      </div>
    </div>
  );
};

export default Sidbar;
