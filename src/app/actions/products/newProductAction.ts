"use server";
import { newPorductSchema, TnewProductSchema } from "@/lib/types";
import { features } from "process";
import { z } from "zod";
import { upload } from "@/lib/cloudinary";
import { db } from '@/db'
import { product } from '@/db/schema'

//import Products from "@/models/productModel";

export async function newProductAction(formData: FormData) {
  // console.log(formData.get("name"));
  // console.log(formData.get("price"));
  // console.log(formData.get("company"));
  // console.log(formData.get("productCat"));
  // console.log(formData.get("productDesc"));
  // console.log(formData.get("image"));
  // console.log(formData.get("featured"));

  const receivedData = {
    name: formData.get("name"),
    price: formData.get("price"),
    company: formData.get("company"),
    productCat: formData.get("productCat"),
    productDesc: formData.get("productDesc"),
    image: formData.get("image"),
    featured: formData.get("featured"),
  };

  const result = newPorductSchema.safeParse(receivedData);

  let zodErrors = {};
  if (!result.success) {
    result.error.issues.forEach((issue) => {
      zodErrors = { ...zodErrors, [issue.path[0]]: issue.message };
    });

    return Object.keys(zodErrors).length > 0
      ? { errors: zodErrors }
      : { success: true };
  }

  const image = formData.get("image");
  let imageUrl="klkjk";
  try {
    imageUrl = await upload(image);
    console.log(imageUrl);
  } catch (error) {
    //  throw new Error("error")
    return { errors: "image cannot uploaded" };
  }

  const name = formData.get("name");
  const price = formData.get("price");
  const company = formData.get("company");
  const productCat = formData.get("productCat");
  const productDesc = formData.get("productDesc");
  const featured = formData.get("featured");

try {


  const result = await db.insert(product).values({
    name: name,
    price: price,
    company: company,
    productCat: productCat,
    productDesc: productDesc,
    image:imageUrl,  
    featured: featured, 

  }).returning({id:product.productId});


//   const newEmp = await db.insert(employees).values({
   
//     employeeName:"Manjit",  
//     employeeRole:"clark",    
//     employeeDepartment:"produciton"
// }).returning({id:employees.id});



} catch (error) {
  console.log(error)
//  return { error: error };
}


  // try {
  //   const newProduct = new Products({
  //     name: name,
  //     price: price,
  //     category: productCat,
  //     image: imageUrl,
  //   });
  // //  const savedProduct = await newProduct.save();
  //  // console.log(savedProduct);
  // } catch (error) {
  //   return { error: error };
  // }

  return { message: "Product saved" };
}
