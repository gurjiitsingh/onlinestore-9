"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import * as z from "zod";
import { address } from "@/db/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { addressSchima, TaddressSchema } from "@/lib/types";
import { addUserAddress } from '@/app/actions/user/userAddressFormAction'

import { useEffect, useState } from "react";



const AddressForm = ({userId}:{userId:String}) => {






  const {
    register,
    formState: { errors },
    setError,
    handleSubmit,
    watch,
  } = useForm<TaddressSchema>({
    resolver: zodResolver(addressSchima),
  });

  console.log("--------",userId);
  async function onSubmit(data: TaddressSchema) {
   console.log("teat");
      console.log(data)

    await  addUserAddress(data)
   
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex w-full flex-col gap-8  my-15 md:w-2/3 lg:w-1/2">
        <input
            {...register("userId", { value: userId  })}
            type="hidden"
          />
          
        <div className="flex flex-col gap-1">
          <label className="label-style">Address line 1</label>
          <input {...register("addressline1")} className="input-style" />
          <p className="text-[0.8rem] font-medium text-destructive">
            {errors.addressline1?.message && (
              <p>{errors.addressline1?.message}</p>
            )}
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <label className="label-style">Address line 2</label>
          <input {...register("addressline2")} className="input-style" />
          <p className="text-[0.8rem] font-medium text-destructive">
            {errors.addressline2?.message && (
              <p>{errors.addressline2?.message}</p>
            )}
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <label className="label-style">City</label>
          <input {...register("city")} className="input-style" />
          <p className="text-[0.8rem] font-medium text-destructive">
            {errors.city?.message && <p>{errors.city?.message}</p>}
          </p>
        </div>
 
        <div className="flex flex-col gap-1">
          <label className="label-style">State</label>
          <input {...register("state")} className="input-style" />
          <p className="text-[0.8rem] font-medium text-destructive">
            {errors.state?.message && <p>{errors.state?.message}</p>}
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <label className="label-style">Zip</label>
          <input {...register("zip")} className="input-style" />
          <p className="text-[0.8rem] font-medium text-destructive">
            {errors.zip?.message && <p>{errors.zip?.message}</p>}
          </p>
        </div> 
       

        <Button type="submit">Add address </Button>
      </div>
    </form>
  );
};

export default AddressForm;
