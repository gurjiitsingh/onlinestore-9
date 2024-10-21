'use client'
import BackButton from '@/components/BackButton';
import React from 'react';
import { TProduct } from '@/types/products'
import * as z from 'zod';
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { Link, useNavigate } from 'react-router-dom';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from "@/components/ui/button";
import { SubmitButton } from '@/components/ui/submitButton';

const formSchema = z.object({
    // id: z.number().optional(),
    name: z
    .string()
    .trim()
    .min(2, { message: "Product name is very short" })
    .max(30, { message: "Product name is very long" }),
  price: z.number().min(1, { message: "Product must have price" }),
  porductCat: z.string()
  .min(1,{message:"Category is required"}),
  image:z.object({
    size: z.number(),
  type: z.string(),
  name: z.string(),
  lastModified: z.number(),
   }),   
})


interface ProductEditPageProps {
params: {
    id: string;
    product: TProduct;
}
}

const ProductEditPage = ({params, product}:ProductEditPageProps) => {
 // const post = posts.find((post)=> post.id===params.id)

const form = useForm<z.infer<typeof formSchema>>({
  resolver: zodResolver(formSchema),
  defaultValues:{
name:  "",
_id:  "",
image: "",
category: "",
  }
})


//const { register, handleSubmit } = useForm();

const hadleSubmit = (data: z.infer<typeof formSchema>) =>{
console.log(data);
}


    return (
    
    <div className=' lg:w-[50%]  p-10 rounded-lg my-10'>
    <BackButton text='Back To All Products' link='/dashboard/products/allproducts' />
    <h3 className='text-2xl mb-4'>Edit Product</h3>
    <Form {...form}>
<form onSubmit={ form.handleSubmit(hadleSubmit)} 
className='space-y-8'>


  <FormField
    control={form.control}
    name="name"
    render={({field}) => (
      <FormItem>
        <FormLabel className='uppercase text-xs font-bold text-zinc-500
        dark:text-white'>Procuct Name</FormLabel>
        <FormControl>
          <Input  className='bg-slate-100 dark:bg-slate-500 border-0 
          focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0' 
         placeholder='Enter'
          {...field}
          />
        </FormControl>
        <FormMessage />
       </FormItem>
    )}
  />


<FormField
    control={form.control}
    name="Price"
    render={({field}) => (
      <FormItem>
        <FormLabel className='uppercase text-xs font-bold text-zinc-500
        dark:text-white'>Price</FormLabel>
        <FormControl>
          <Input  className='bg-slate-100 dark:bg-slate-500 border-0 
          focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0' 
         placeholder='Enter'
          {...field}
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
  )
}

export default ProductEditPage