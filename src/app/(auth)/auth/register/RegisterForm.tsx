"use client";
import BackButton from "@/components/BackButton";
import React from "react";
import { useForm } from "react-hook-form";
import * as z from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { registerUser } from '@/app/actions/auth/singUp'
import { signUpSchema, TsignUpSchema } from '@/lib/types'
import { Button } from '@/components/ui/button'

const RegisterForm = () => {




  const { register, formState:{errors, isSubmitting}, handleSubmit, setError } = useForm<TsignUpSchema>({
    resolver: zodResolver(signUpSchema),
  });

async function onSubmitUserRegister(data:TsignUpSchema){
//console.log(data);

const formData = new FormData();



  formData.append("username",data.username)
  formData.append("email",data.email)
  formData.append("password",data.password)
  formData.append("confirmPassword",data.confirmPassword)

 const result = await registerUser(formData);

 if (result.errors) {
  // not network error but data validation error
  const errors = result.errors;
   
  if (errors.username) {
    setError("username", {
      type: "server",
      message: errors.username,
    });
  } else if (errors.email) {
    setError("email", {
      type: "server",
      message: errors.email,
    });
  } else if (errors.password) {
    setError("password", {
      type: "server",
      message: errors.password,
    });
  }
 
   else {
  //  alert("Something went wrong");
  }
}

//console.log(result);
}







  return (
    <div className=" lg:w-2/3 m-auto my-[10%]">
      <h3 className="text-2xl mb-4">New User Register</h3>
      <form onSubmit={handleSubmit(onSubmitUserRegister)}>
      <div className="flex w-full flex-col gap-8  my-15 md:w-2/3 lg:w-1/2">

      <div className="flex flex-col gap-1">
          <label className="label-style">User Name</label>
          <input 
           {...register('username')} 
                   
           type="text" 
           placeholder="Enter" 
          className="input-style" />
          <p className="text-[0.8rem] font-medium text-destructive">
            {errors?.username?.message && <p>{errors.username?.message}</p>}
          </p>
        </div>

      <div className="flex flex-col gap-1">
          <label className="label-style">Email</label>
          <input 
           {...register('email')} 
                   
           type="email" 
           placeholder="Enter" 
          className="input-style" />
          <p className="text-[0.8rem] font-medium text-destructive">
          {errors.email?.message && <p>{errors.email?.message}</p>}
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <label className="label-style">Password </label>
          <input
              {...register('password')}
                            type="password"
            className="input-style"
          />

          <p className="text-[0.8rem] font-medium text-destructive">
            {errors.password?.message && <p>{errors.password?.message}</p>}
          </p>
        </div>


        <div className="flex flex-col gap-1">
          <label className="label-style">Confirm Password</label>
          <input
            type="password"
            {...register('confirmPassword')}
            className="input-style"
          />

          <p className="text-[0.8rem] font-medium text-destructive">
            {errors.confirmPassword?.message && <p>{errors.confirmPassword?.message}</p>}
          </p>
        </div>


<Button type='submit'>Register</Button>
      </div>
      </form>
    </div>
  );
};

export default RegisterForm;
