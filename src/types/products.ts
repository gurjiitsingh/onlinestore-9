import { z } from 'zod';

export const TodoSchema = z.object({
    id: z.number().optional(),
    content: z
    .string()
    .trim()
    .min(1, {
        message: "Todo content must not be empty",
    }).max(100,{
        message: "Todo content must be at most 100 character long.",
    }),
})


export type Todo = z.infer<typeof TodoSchema>




export type TProduct ={
    product:{
  name:string,
  _id: string,
  image: string,
  category: string,
    }
  }



