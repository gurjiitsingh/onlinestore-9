import { z } from 'zod';

export const categorySchema = z.object({
    name: z
      .string()
      .trim()
      .min(1, { message: "Category name is required" })
      .max(30, { message: "Category name is to long" }),
    desc: z
      .string()
      .min(4, { message: "Descrition of product is needed" })
      .max(100, { message: "Description is too long" }),
  });

  export type CategorySchema = z.infer<typeof categorySchema>