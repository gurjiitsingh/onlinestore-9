"use server";

import * as  z from 'zod';
import { user } from "@/db/schema";
import { db } from "@/db";
import { signUpSchema } from '@/lib/types'
import { TsignUpSchema } from '@/lib/types'
import { hashPassword } from '@/lib/auth';

export async function registerUser(formData: FormData) {
  const userData = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  };

  console.log("action-auth-singup----", userData)

const result = signUpSchema.safeParse(userData);

let zodErrors = {};
if (!result.success) {
  result.error.issues.forEach((issue) => {
    zodErrors = { ...zodErrors, [issue.path[0]]: issue.message };
  });

  return Object.keys(zodErrors).length > 0
    ? { errors: zodErrors }
    : { success: true };
}


const hashedPassword = await hashPassword(formData.get("password"))


  try {
    const result = await db.insert(user).values({
      username: formData.get("username"),
      email: formData.get("email"),
      password: hashedPassword,
      isVerfied: "no",
      isAdmin: "no",
      forgotPasswordToken: "iii",
      verifyToken: "iuwer",
    });
  } catch (error) {
    console.log(error);
  }
  return {message: 'User Registered'}
}
