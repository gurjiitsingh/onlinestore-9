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

const Input = ({
  label,
  type,
  name,
  value,
  placeholder,
  message,
}: InputFieldProps) => {
  return (
    <>
      <div className="flex flex-col gap-1">
        <label className="mb-2 peer-disabled:cursor-not-allowed peer-disabled:opacity-70 uppercase text-xs font-bold text-zinc-500 dark:text-white">
          {label}
        </label>
        <InputFieldNextUI
          className="flex h-9 w-full rounded-md border-input px-3 py-1
       text-sm shadow-sm transition-colors file:border-0 
       file:bg-transparent file:text-sm file:font-medium 
       placeholder:text-muted-foreground focus-visible:outline-none
        focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50
         bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0
          text-black dark:text-white focus-visible:ring-offset-0"
          type={type}
          name={name}
          defaultValue={value}
          placeholder={placeholder}
        />
        <p className="text-[0.8rem] font-medium text-destructive">{message}</p>
      </div>
    </>
  );
};

export default Input;
