"use client";
import BackButton from "@/components/BackButton";
import React, { useEffect, useState } from "react";


import { TProduct } from "@/types/products";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import { useSearchParams } from 'next/navigation'
import { SubmitHandler } from "@/app/actions/products/ProductFormAcitonuseForm"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Select, SelectContent, SelectTrigger } from "@/components/ui/select";
import { SelectItem, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import productSchema from '@/lib/schemas/productSchema';
import { useRouter } from "next/router";



interface EditProductFormProps {
  params: {
    id: string;
    product: TProduct;
  };
}

const EditProductForm = () => {
  const [categories, setCategories] = useState<any>([{}]);

  const searchParams = useSearchParams()

//   const router = useRouter();
//     const { query } = router;

  console.log(params)


  useEffect(() => {
    // console.log("response")

    const fetchData = async () => {

      const response = await fetch("http://localhost:3000/api/categories");
      const result = await response.json();

        console.log(result.data)
      setCategories(result.data);

      const productDataRes = await fetch(`http://localhost:3000/api/productById?id=${"66b0e6473fb411742b4605be"}`);

      const productData = await productDataRes.json();

      console.log(productData.data)
    };

    fetchData();




  }, []);

 
  type ProductSchema = z.infer<typeof productSchema>

  const form = useForm<ProductSchema>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      name: "",
      price: "",
      //porductCat: "",
      productDesc: "This is good product",
      company:"XYZ",
      productCat: "",
      featured:"No",
      image:"",
    },
  });

  //const { register, handleSubmit } = useForm();

  const handlerSubmit = async (data:ProductSchema) => {
    console.log(data);

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("price", data.price);   
    formData.append("productCat", data.productCat);  
    formData.append("productDesc", data.productDesc);  
    formData.append("featured", data.featured);
    formData.append("company", data.company);
    formData.append("image", data.image);
   const response = await  SubmitHandler(formData);

   console.log(response)

  };

  return (
    <div className=" lg:w-[50%]  p-10 rounded-lg my-10">
      <BackButton
        text="Back To All Products"
        link="/dashboard/products/allproducts"
      />
      <h3 className="text-2xl mb-4">Edit Product</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handlerSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel
                  className="uppercase text-xs font-bold text-zinc-500
        dark:text-white"
                >
                  Procuct Name
                </FormLabel>
                <FormControl>
                  <Input
                    className="bg-slate-100 dark:bg-slate-500 border-0 
          focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0"
                    placeholder="Enter"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel
                  className="uppercase text-xs font-bold text-zinc-500
        dark:text-white"
                >
                  Procuct Price
                </FormLabel>
                <FormControl>
                  <Input
                    className="bg-slate-100 dark:bg-slate-500 border-0 
          focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0"
                    placeholder="Enter"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="productDesc"
            render={({ field }) => (
              <FormItem>
                <FormLabel
                  className="uppercase text-xs font-bold text-zinc-500
        dark:text-white"
                >
                  Prodcuct Desc
                </FormLabel>
                <FormControl>
                  <Textarea
                    className="bg-slate-100 dark:bg-slate-500 border-0 
          focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0"
                    placeholder="Enter"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

<FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel
                  className="uppercase text-xs font-bold text-zinc-500
        dark:text-white"
                >
                  Company
                </FormLabel>
                <FormControl>
                  <Textarea
                    className="bg-slate-100 dark:bg-slate-500 border-0 
          focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0"
                    placeholder="Enter"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="productCat"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a product Category" />
                    </SelectTrigger>
                  </FormControl>

                  <SelectContent>

                   {/* {categories.map((category) => (
                      <option key={category.name} value={category.name}>
                        {category.name}
                      </option>
                    ))} */}


                  <SelectItem  value="LED TV">LED TV </SelectItem>
                    {/* {categories.map((category) => (
                      <SelectItem key={category.name} value={category.name}>
                        {category.name}
                      </SelectItem>
                    ))} */}
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />

<FormField
          control={form.control}
          name="featured"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Featured Product</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="No" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      No
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="Yes" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Yes
                    </FormLabel>
                  </FormItem>
                 </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

<FormField
  control={form.control}
  name="image"
  render={({ field: { value, onChange, ...fieldProps } }) => (
    <FormItem>
      <FormLabel>Picture</FormLabel>
      <FormControl>
        <Input
          {...fieldProps}
          placeholder="Picture"
          type="file"
          accept="image/*, application/pdf"
          onChange={(event) =>
            onChange(event.target.files && event.target.files[0])
          }
        />
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>

          {/* <SubmitButton>Update Product</SubmitButton> */}
          <Button>Update Product</Button>
        </form>
      </Form>
    </div>
  );
};

export default EditProductForm;
