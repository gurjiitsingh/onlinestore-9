"use client";
import React, { useRef } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from "@nextui-org/dropdown";

import BackButton from "@/components/BackButton";
import { Controller, useForm } from "react-hook-form";
import Input from "@/components/formComponents/Input-s";
import { useParams, useSearchParams } from "next/navigation";
import { editProductFields } from "@/app/actions/products/editProductAction";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@nextui-org/react";
const ProductEditForm = () => {
  const inputRef = useRef();

  const searchParams = useSearchParams() || "";
  const productId = searchParams.get("pid") || "";
  const productName = searchParams.get("prodcuctName") || "";
  const productPrice = searchParams.get("productPrice") || "";
  const productCategory = searchParams.get("productCategory") || "";

  console.log("id", productId);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    console.log(data);

    const formData = new FormData();
    formData.append("productId", data.productId);
    formData.append("name", data.name);
    formData.append("price", data.price);
    formData.append("productCat", data.productCat);
    formData.append("productDesc", data.productDesc);
    formData.append("featured", data.featured);
    formData.append("company", data.company);
    formData.append("image", data.image);

    const response = await editProductFields(formData);
  };

  console.log(watch("productId")); // watch input value by passing the name of it

  // console.log({...register})
  return (
    <div className=" lg:w-[50%]  p-10 rounded-lg my-10">
      <BackButton
        text="Back To All Products"
        link="/dashboard/products/allproducts"
      />
      <h3 className="text-2xl mb-4">Edit Product</h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex w-full flex-col gap-8  my-15">
          {/* register your input into the hook by invoking the "register" function */}
          <div className="flex flex-col gap-1">
            <label className="label-style">Product Name</label>
            <input
              defaultValue={productName}
              {...register("name")}
              className="input-style"
            />
            <p className="text-[0.8rem] font-medium text-destructive">
              {errors.price && <span>This field is required</span>}
            </p>
          </div>

          <div className="flex flex-col gap-1">
            <label className="label-style">Product price</label>
            <input
              defaultValue={productPrice}
              {...register("price", { required: true })}
              className="input-style"
            />

            <p className="text-[0.8rem] font-medium text-destructive">
              {errors.price && <span>This field is required</span>}
            </p>
          </div>
          <textarea
            defaultValue="This is text"
            {...register("productDesc", { required: true })}
            className="textarea-style"
          />

          <input
            defaultValue="XYZ"
            {...register("company", { required: true })}
            className="input-style"
          />

          {/* <input {...register("image", { required: true })} type="file"  className="flex h-9 w-full rounded-md border-input px-3 py-1
       text-sm shadow-sm transition-colors file:border-0 
       file:bg-transparent file:text-sm file:font-medium 
       placeholder:text-muted-foreground focus-visible:outline-none
        focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50
         bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0
          text-black dark:text-white focus-visible:ring-offset-0" /> */}

          <select {...register("category")} className="input-style">
            <option key="klkj" value="TV">
              TV LED
            </option>
            {/* {options.map((value) => (
        <option key={value} value={value}>
          {value}
        </option> */}
          </select>

          {/* <Controller
  control={control}
  name="test"
  render={({
    field: { onChange, onBlur, value, name, ref },
    fieldState: { invalid, isTouched, isDirty, error },
    formState,
  }) => (
    <Checkbox
      onBlur={onBlur} // notify when input is touched
      onChange={onChange} // send value to hook form
      checked={value}
      inputRef={ref}
    />
  )}
/> */}

          <input
            {...register("productId", { value: productId })}
            type="hidden"
          />

          <Button type="submit">Update Product </Button>
        </div>
      </form>
    </div>
  );
};

export default ProductEditForm;
