import React from "react";
import { Input as InputFieldNextUI } from "@nextui-org/react";

type InputFieldProps = {
  label: string;
  name: string;
  type: string;
  value: string;
  placeholder: string;
  message: string;
};

const Input = ({}) => {
  return (
    <>
      <div className="flex flex-col gap-1">
       
        <InputFieldNextUI
          className="flex h-9 w-full rounded-md border-input px-3 py-1
       text-sm shadow-sm transition-colors file:border-0 
       file:bg-transparent file:text-sm file:font-medium 
       placeholder:text-muted-foreground focus-visible:outline-none
        focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50
         bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0
          text-black dark:text-white focus-visible:ring-offset-0"
        
        />
      
      </div>
    </>
  );
};

export default Input;
