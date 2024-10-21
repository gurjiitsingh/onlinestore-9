"use client";
import BackButton from "@/components/BackButton";
import React, { useEffect, useState } from "react";
import { TProduct } from "@/types/products";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";

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
import { SubmitButton } from "@/components/ui/submitButton";

const formSchema = z.object({
  // id: z.number().optional(),
  name: z
    .string()
    .trim()
    .min(2, { message: "Product name is very short" })
    .max(30, { message: "Product name is very long" }),
  // price: z.string().min(1, { message: "Product must have price" }),
  price: z
    .string()
    .refine((value) => /^\d+$/.test(value), "Invalid product price"), // Refinement
  porductCat: z.string(),
  //  .min(1,{message:"Category is required"}),
  porductDesc: z.string(),
  company:z.string(),
  featured:z.string(),
  //file: z.instanceof(FileList).optional(),
  file: typeof window === 'undefined' ? z.any() : z
  .any()
  
  // image:z.object({
  //   size: z.number(),
  // type: z.string(),
  // name: z.string(),
  // lastModified: z.number(),
  //  }),
});

interface ProductEditPageProps {
  params: {
    id: string;
    product: TProduct;
  };
}

const ProductEditPage = ({ params, product }: ProductEditPageProps) => {
  const [categories, setCategories] = useState<any>([{}]);

  useEffect(() => {
    // console.log("response")

    const fetchCategory = async () => {
      const response = await fetch("http://localhost:3000/api/categories");
      const result = await response.json();

      //  console.log(result.data)
      setCategories(result.data);
    };

    fetchCategory();
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      price: "",
      //porductCat: "",
      porductDesc: "",
      company:"",
      porductCat: "",
      featured:"No",
      file:"",
    },
  });

  //const { register, handleSubmit } = useForm();

  const hadleSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };

  return (
    <div className=" lg:w-[50%]  p-10 rounded-lg my-10">
      <BackButton
        text="Back To All Products"
        link="/dashboard/products/allproducts"
      />
      <h3 className="text-2xl mb-4">Edit Product</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(hadleSubmit)} className="space-y-8">
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
            name="porductDesc"
            render={({ field }) => (
              <FormItem>
                <FormLabel
                  className="uppercase text-xs font-bold text-zinc-500
        dark:text-white"
                >
                  Procuct Desc
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
            name="porductCat"
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
                    {categories.map((category) => (
                      <SelectItem key={category.name} value={category.name}>
                        {category.name}
                      </SelectItem>
                    ))}
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
  name="file"
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

export default ProductEditPage;
