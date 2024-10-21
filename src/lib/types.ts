import { z } from "zod";

const productSchema = z.object({
  // id: z.number().optional(),
  name: z
    .string()
    .trim()
    .min(2, { message: "Product name is very short" })
    .max(30, { message: "Product name is very long" }),
  price: z
    .string()
    .refine((value) => /^\d+$/.test(value), "Invalid product price"), // Refinement
  productCat: z.string().min(1, { message: "Please select category" }),

  productDesc: z.string().min(1, { message: "Please select category" }),
  company: z.string().min(1, { message: "Please select category" }),
  featured: z.string(),
  image: typeof window === "undefined" ? z.any() : z.any(),

  // image:z.object({
  //   size: z.number(),
  // type: z.string(),
  // name: z.string(),
  // lastModified: z.number(),
  //  }),
});

export type Timage = {
  size?: number;
  type?: string;
  name?: string;
  lastModified?: number;
};

const ImageSchema = z.object({
  size: z.number().optional(),
  type: z.string().optional(),
  name: z.string().optional(),
  lastModified: z.number().optional(),
});

// Now add this object into an array
const ImagesSchema = z.array(ImageSchema);

const MAX_FILE_SIZE = 1024 * 1024 * 6; // 3MB
// const ACCEPTED_IMAGE_TYPES = ['image/jpg','image/jpg','image/jpeg'];

function checkFileType(file: File) {
  if (file?.name) {
    const fileType = file.name.split(".").pop();
    if (fileType === "jpg" || fileType === "png") return true;
  }
  return false;
}
//image: ImageSchema.optional(),
export const newPorductSchema = z.object({
  name: z.string().min(4, { message: "Product name is required" }),
  price: z
    .string()
    .refine((value) => /^\d+$/.test(value), "Invalid product price"), // Refinement
  productCat: z.string().min(1, { message: "Please select category" }),
  productDesc: z
    .string()
    .min(2, { message: "Product description is required" }),
  company: z.string().min(1, { message: "Please select category" }),
  featured: z.string(),

  image: z.any().refine((file: File) => file?.length !== 0, "File is required"),
  // .refine((file) => file.size < MAX_FILE_SIZE, "Max size is 5MB.")
  // .refine(
  //   (file) => checkFileType(file),
  //   "Only .jpg, .jpeg formats are supported."
  // ),
});

export type TnewProductSchema = z.infer<typeof newPorductSchema>;

export default productSchema;

export type TProduct = {
  product: {
    name: string;
    _id: string;
    image: string;
    category: string;
  };
};

export const signUpSchema = z
  .object({
    username: z.string().min(2, { message: "User name is required" }),
    email: z.string().email().min(2, { message: "Email is required" }),
    password: z
      .string()
      .min(4, { message: "Password must be atleast 4 character long" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password must match",
    path: ["confirmPassword"],
  });

export type TsignUpSchema = z.infer<typeof signUpSchema>;

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

export type CategorySchema = z.infer<typeof categorySchema>;

export const addressSchima = z.object({
  addressline1: z.string().min(2, { message: "Address line 1 is required" }),
  addressline2: z.string(),
  city: z.string().min(2, { message: "City is required" }),
  state: z.string().min(2, { message: "State is required" }),
  zip: z.string().min(2, { message: "Zip code is required" }),
  userId: z.string().min(1,{ message: "User Id is missing please login or refresh page"}),
});

export type TaddressSchema = z.infer<typeof addressSchima>;
