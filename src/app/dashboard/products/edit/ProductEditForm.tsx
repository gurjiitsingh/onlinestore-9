'use client'
import { onSubmitNewCategory } from '@/app/actions/products/categoryFormAction';
import React, { useActionState } from "react";
import Input from "@/components/formComponents/Input";
import BackButton from "@/components/BackButton";
import { Dropdown, Button, Menu } from "@nextui-org/react";
import { SubmitButton } from "@/components/ui/submitButton"
import { useFormState } from 'react-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ProductEditForm = () => {

  const initialState = {
  message: '',
}

// async function onSubmitNewCategory(){
//   'use server'


// }

  const [state,  formAction] = useFormState(onSubmitNewCategory, initialState)


  

  return (
    <div className=" lg:w-[50%]  p-10 rounded-lg my-10">
      <BackButton
        text="Back To All Products"
        link="/dashboard/products/allproducts"
      />
      <h3 className="text-2xl mb-4">Edit Product</h3>
      <form action={formAction}>
        <div className="flex w-full flex-col gap-8  my-15">
       

<Input label={"Product Name"} type="text"  name={"name"} value={"dsfs"}  placeholder={"Enter"} message={"Name is requied"} />

<Input label={"Description"} type="text"  name={"desc"} value={"dssdf"}  placeholder={"Enter"} message={"Name is requied"} />
{/* <Input label={"Product Picture"} type="file"  name={"image"} value={""}  placeholder={"Enter"} message={"Name is requied"} /> */}


<input type='hidden' name='productId' value={"ijsonoqpwmsawnx"} />

<SubmitButton />

        </div>
      </form>
    </div>
  );
};

export default ProductEditForm;
