"use client";
import React, { useContext, useEffect } from "react";
import ProductList from "@/components/cart/productList";
import CartContext from "@/store/CartContext";
import Link from "next/link";

const CartContent = () => {
  const { cartData } = useContext(CartContext);

  useEffect(() => {
    //  console.log("incart content",cartData)
  }, [cartData]);

  return (
    <div className="flex flex-col gap-3">
      {/* <div className="w-full flex flex-row gap-3 bg-slate-600  px-3 py-5 justify-between mt-12 font-semibold mb-3 ">
        <div className="w-[10%]"></div>
        <div>Products</div>
        <div>Price</div>
        <div>Quty</div>
        <div>Action</div>
        <div>Total</div>
      </div> */}
      
     <div>
        {cartData.map((item) => {
          return <ProductList key={item.name} item={item} />;
        })}
     
    </div></div>
  );
};

export default CartContent;
