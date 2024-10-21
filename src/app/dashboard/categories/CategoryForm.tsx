'use client'
import { onSubmitNewCategory } from '@/app/actions/categories/categoryFormAction';
import { SubmitButton } from "@/components/ui/submitButton"
import { useFormState } from 'react-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from "@/components/ui/button";
import { toast } from 'react-hot-toast';
import { stat } from 'fs';

const initialState = {
  message: '',
}
const CategoryForm = () => {


  const [state,  formAction] = useFormState(onSubmitNewCategory, initialState)


  let allmessages =""

for (const [key, value] of Object.entries(state?.message)) {
  // console.log(`${value}`);
  // allmessages += `  ${value} <br/>`
  toast.success(value);
}


    return (
        <Card className='w-[500px] m-auto mt-[5%]'>
          <CardHeader>
            <CardTitle className="flex justify-center">Product Form</CardTitle>
            <CardDescription className="flex justify-center">
              Add new product
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form action={formAction}>
              <div className="flex flex-col mx-auto gap-5 justify-center items-center">
                <label className="w-full flex">
                  <div className="text-left w-[200px]">Category Name</div>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    defaultValue=""
                    className="border-2"
                  />
                </label>
                <label className="w-full flex">
                  <div className="text-left w-[200px]"> Description </div>
                  <input
                    type="text"
                    name="desc"
                    id="desc"
                    className="border-2"
                    defaultValue=""
                  />
                </label>
                <SubmitButton />
              </div>
             
            </form>
          </CardContent>
        </Card>
      );
}

export default CategoryForm