'use client'

import { Card } from "../../../../components/ui/card"
import { FormEvent } from "react"
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const SignIn = () => {

  // const { data: session, status } = useSession();
  // console.log(session)

  const router = useRouter();

async function submitHandler(event:FormEvent<HTMLFormElement>){

event.preventDefault();
const formData = new FormData(event.currentTarget);

const response  = await signIn('credentials', {
  redirect: false,
  id: "kjlkjl",
  email: formData.get('email'),
  password: formData.get('password'),
});

//console.log({response})

if(!response?.error){
router.push('/');
router.refresh();

}

}


//console.log("session")

  return (
    
    <Card className="  lg:w-[70%] m-auto p-12" >
   
    <form onSubmit={submitHandler}>
      <div className="flex w-full flex-col gap-8  my-15 ">

        {/* register your input into the hook by invoking the "register" function */}
        <div className="flex flex-col gap-1">
          <label className="label-style">Email</label>
          <input 
          type="email" name="email" id="email"  defaultValue='g@mail.com'
          className="input-style" />
          <p className="text-[0.8rem] font-medium text-destructive">
          
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <label className="label-style">Password</label>
          <input
           type="password" name="password" id="password"  defaultValue='123456'
            className="input-style"
          />

          <p className="text-[0.8rem] font-medium text-destructive">
           
          </p>
        </div>

      
       
        <Button type="submit">Add Product </Button>
      </div>
    </form>


    </Card>

 
  )
}

export default SignIn