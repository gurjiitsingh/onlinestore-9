'use client'

import { useFormState } from 'react-dom'
//import { SubmitHandler } from "@/app/actions/products/ProductFormAciton"
import { SubmitButton } from "@/components/ui/submitButton"
import { useEffect, useState } from 'react';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import ImagePicker from './ImagePicker';
import { env } from "process";

const initialState = {
  message: '',
}

const ProductForm = () => {
//const [state, formAction] = useFormState(SubmitHandler, initialState)
const [categories, setCategories ] = useState([]);
useEffect(()=>{
 // console.log("response")

  const fetchCategory = async () =>{
   
    const response = await fetch("http://localhost:3000/api/categories")
    const result = await response.json();
  //  console.log(result.data)
  setCategories(result.data)

  }

  fetchCategory();

},[])

function dorpDownHandle(event:any){
console.log(event)
console.log("event.target.value")
//const file = (event!.target as HTMLInputElement)!.files[0];
}

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-center">Product Form</CardTitle>
        <CardDescription className="flex flex-col justify-center">
        {/* {state?.message?.price[0]?<div></div> :<div>Price are required</div> }
      {state?.message?.name[0]  &&<div>Product Name is required</div> }
      {state?.message?.image[0]  &&<div>Image is required</div> } */}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={formAction}>
          <div className="flex flex-col mx-auto gap-4 justify-center items-center">
            <label className="w-full flex">
              <div className="text-left w-[200px]">Product Name</div>
              <input
                type="text"
                name="name"
                id="name"
                defaultValue=""
                className="border-2"
                required
              />
            </label>
            <label className="w-full flex">
              <div className="text-left w-[200px]"> Price </div>
              <input
                type="text"
                name="price"
                id="price"
                className="border-2"
                defaultValue=""
                required
                
              />
            </label>


            <label className="w-full flex">
              <div className="text-left w-[200px]"> Category </div>


              <select className="border-2" id="category" name="category">
  
  {categories.map((item)=>{
      return(<option  key={item._id} value={item.name}>{item.name}</option>)
    })}
</select>

              {/* <DropdownMenu >
  <DropdownMenuTrigger  onChange={(e) => dorpDownHandle(e.target.value)} name="secat" className="border-2 w-[200px] p-1" >Select Category</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Category List</DropdownMenuLabel>
    <DropdownMenuSeparator />
   
    {categories.map((item)=>{
      return( <DropdownMenuItem key={item._id} value={item.name}>{item.name}</DropdownMenuItem>)
    })}
  </DropdownMenuContent>
</DropdownMenu> */}

            </label>


         

            <ImagePicker name="image" label={"Select Image"} />
            <SubmitButton />
          </div>
          <p aria-live="polite" className="sr-only">
        {/* {state?.message} */}
       
      </p>
        </form>
      </CardContent>
    </Card>
  );
};

export default ProductForm;
