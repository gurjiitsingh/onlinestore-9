"use client";
import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { newProductAction } from "@/app/actions/products/newProductAction";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { newPorductSchema, TnewProductSchema } from "@/lib/types";

const ProductForm = () => {
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
  
  type Terror ={

   name: string | null
   price: string | null;
   featured: string | null;
   company: string | null;
   productCat: string | null;
   productDesc: string | null;
   image: string | null;
  }

  // console.log(categories)
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    reset,
    getValues,
    setError,
  } = useForm<TnewProductSchema>({
    resolver: zodResolver(newPorductSchema),
    defaultValues: {
      featured:'false'
    }
  });

  //data:React.FormEvent<HTMLFormElement> // not work
  async function onSubmit(data: TnewProductSchema) {
    console.log(data);

    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("price", data.price);
    formData.append("featured", data.featured);
    formData.append("company", data.company);

    formData.append("productCat", data.productCat);
    formData.append("productDesc", data.productDesc);
    formData.append("image", data.image[0]);
    //  console.log(formData.get('checkbox'));

    const result = await newProductAction(formData);


    // if(!result.ok){// it mean some network error not 200 range but other
    //   alert('Form submit fails');
    //   return;
    //   }

    if (result.errors) {
      // not network error but data validation error
      const errors:Terror = result.errors;
       
      if (errors.name) {
        setError("name", {
          type: "server",
          message: errors.name,
        });
      } else if (errors.price) {
        setError("price", {
          type: "server",
          message: errors.price,
        });
      } else if (errors.productCat) {
        setError("productCat", {
          type: "server",
          message: errors.productCat,
        });
      }
      if (errors.productDesc) {
        setError("productDesc", {
          type: "server",
          message: errors.productDesc,
        });
      }
      if (errors.image) {
        setError("image", {
          type: "server",
          message: errors.image,
        });
      }
      if (errors.company) {
        setError("company", {
          type: "server",
          message: errors.company,
        });
      }
       else {
      //  alert("Something went wrong");
      }
    }

    console.log(result);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex w-full flex-col gap-8  my-15 md:w-2/3 lg:w-1/2">
        {/* register your input into the hook by invoking the "register" function */}
        <div className="flex flex-col gap-1">
          <label className="label-style">Product Name</label>
          <input {...register("name")} className="input-style" />
          <p className="text-[0.8rem] font-medium text-destructive">
            {errors.name?.message && <p>{errors.name?.message}</p>}
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <label className="label-style">Product price</label>
          <input
            {...register("price", { required: true })}
            className="input-style"
          />

          <p className="text-[0.8rem] font-medium text-destructive">
            {errors.price?.message && <p>{errors.price?.message}</p>}
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <label className="label-style">Product description</label>

          <textarea
            {...register("productDesc", {
              validate: {
                pattern: (value: string) => !/[!]/.test(value),
              },
            })}
            className="textarea-style"
          />
          <p className="text-[0.8rem] font-medium text-destructive">
            {errors.productDesc && <span>Product description is required</span>}
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <label className="label-style">Product company</label>
          <input
            defaultValue="XYZ"
            {...register("company", { required: true })}
            className="input-style"
          />
          <p className="text-[0.8rem] font-medium text-destructive">
            {errors.company?.message && <p>{errors.company?.message}</p>}
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <label className="label-style">Product category</label>
          <select {...register("productCat")} className="input-style">
            <option key="wer" value="Mobile">
              Select Product Category
            </option>
            {categories.map((category:{name:string}, i:number) => {
              return (
                <option key={i} value={category.name}>
                  {category.name}
                </option>
              );
            })}
          </select>

          <p className="text-[0.8rem] font-medium text-destructive">
            {errors.productCat && <span>This field is required</span>}
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <label className="label-style">Product Image</label>
          <input
            {...register("image", { required: true })}
            type="file"
            className="input-image-style"
          />

          <p className="text-[0.8rem] font-medium text-destructive">
            {errors.image && <span>Select product image</span>}
          </p>
        </div>

        
     


        <div className="flex  items-center gap-4 ">
          <label className="label-style">Normal Product</label>
          <input {...register("featured")} type="radio" value="false" />
          {/* <p className="text-[0.8rem] font-medium text-destructive">
            {errors.featured?.message && <p>{errors.featured?.message}</p>}
          </p> */}
        </div>

        <div className="flex    items-center gap-4">
          <label className="label-style">Featured Product</label>
          <input {...register("featured")} type="radio" value="true"  />
          {/* <p className="text-[0.8rem] font-medium text-destructive">
            {errors.featured?.message && <p>{errors.featured?.message}</p>}
          </p> */}
        </div>

        
        {/* <div className="flex flex-col gap-1 items-start">
          <label className="label-style">Featured Product</label>
          <input {...register("featured")} type="checkbox" value="true" />

          <p className="text-[0.8rem] font-medium text-destructive">
            {errors.featured?.message && <p>{errors.featured?.message}</p>}
          </p>
        </div> */}

       
        <Button type="submit">Add Product </Button>
      </div>
    </form>
  );
};

export default ProductForm;
