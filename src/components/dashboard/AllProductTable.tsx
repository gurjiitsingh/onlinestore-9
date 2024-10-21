"use client";

type productTableProps = {
  limit?: number;
  title?: string;
};
import { TProduct } from "@/types/products";


import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableCaption,
} from "@/components/ui/table";

import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import FeaturProductUpdate from "./FeaturProductUpdate";

const AllProductTable = ({ title }: productTableProps) => {
  const [productData, setProductData] = useState([]);
var pageNo = 1;
var limit = 5

  useEffect(() => {
    async function fetchProduct(): Promise<any>{
    
    try {
        const response = await fetch(`http://localhost:3000/api/productlist_?page=${pageNo}&limit=${limit}`,{
      //  const response = await fetch(process.env.NEXTAUTH_URL+`/api/productlist_?page=${pageNo}&limit=${limit}`,{
          cache: 'no-cache',
          next:{
            tags:["products"],
          }
        
          });
        if (!response.ok) {
            throw new Error(
                `Unable to Fetch Data, Please check URL
                or Network connectivity!!`
            );
        }

       // if(response.status === 'succes')
        const res = await response.json();

        // console.log(data.total)
        // console.log("porduct list in dashboard"res.data.products)
        setProductData(res.data.products)
        //return data;
    } catch (error) {
        console.error('Some Error Occured:', error);
    }


    };
    fetchProduct();
  
  }, []);


  function handleEditProduct(id:string){
    console.log(id)
  }
  // Sort posts in dec product based on date

//   const sortedproducts: TProduct[] = [...products].sort((a, b) => {
//     return new Date(b.date).getTime() - new Date(a.date).getTime();
//   });

  return (
    <>
      <div className="mt-10 p-2">
        <h3 className="text-2xl mb-4 font-semibold">
          {title ? title : "products"}
        </h3>
        <Table>
          <TableCaption>Product List</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="hidden md:table-cell">Product Name</TableHead>
              <TableHead className="hidden md:table-cell">Product Price</TableHead>
              <TableHead className="hidden md:table-cell">Image</TableHead>
             
              <TableHead>Category</TableHead>
              <TableHead className="hidden md:table-cell">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {productData.map((product: TProduct) => {
              return (
                <TableRow key={product._id}>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.price}</TableCell>
                  <TableCell><Image src={product.image} width={100} height={100} alt={product.name} /></TableCell>
               
                  <TableCell>{product.category}</TableCell>

                  <TableCell>
                  
                     <FeaturProductUpdate />
                  
                  </TableCell>

                  <TableCell>
                    <Link href={`/dashboard/products/edit?pid=${product._id}&prodcuctName=${product.name}&productCategory=${product.category}&productPrice=${product.price}`}>
                      <Button >Edit</Button>
                    </Link>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default AllProductTable;
