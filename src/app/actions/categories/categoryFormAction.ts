"use server";
import { z } from "zod";
import { insertCategory } from '@/lib/categories'; 
import { CategoryType } from '@/utils/types'
import { CategorySchema } from '@/lib/types';
import { categorySchema } from '@/lib/types';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function onSubmitNewCategory(prevState: any, formData: FormData) {
  const newCategoryData: CategoryType = {
    name: formData.get("name") as string,
    desc: formData.get("desc") as string,
  };
  const result = categorySchema.safeParse(newCategoryData);

if(!result.success){
  return {
    message:result.error.flatten().fieldErrors,
  }

  
}



const response = await insertCategory(newCategoryData); 

if(response?.status){
  return {
    message: {sucess:"Category Created"}
  }
}else{
  return {
    message: {fail:"Faild to create category"}
  }
}

// redirect to the signin page
// const path = '/login';
// revalidatePath(path);
// redirect(path);


}
