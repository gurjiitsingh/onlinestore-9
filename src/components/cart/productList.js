"use client";
import React, { useContext } from "react";
import CartContext from "@/store/CartContext";
import Image from "next/image";
import Container from "../globals/Container";

const ProductList = ({ item }) => {
  const { addProductToCart, decCartProduct, removeCartProduct } =
    useContext(CartContext);

function addProductToCartNew(){

  addProductToCart(item)
}

  const total = parseInt(item.count) * parseFloat(item.price);
  return (
    <div className="flex flex-row gap-3 bg-green-300 px-3 py-3 justify-between  p-4 mt-2  border-2">
      <div className="w-[10%]">
        <div className="w-[200px]">
          {" "}
          <Image
            src={item.image}
            width="0"
            height="0"
            sizes="100vw"
            loading="eager"
            priority={true}
            className="w-full h-[150px]"
            alt={item.name}
          />
        </div>
      </div>
      <div className="w-full flex flex-col justify-between gap-2">
        <div className="font-semibold">
          {item.name} This porduct is XYZ company, Model 234CD First release
        </div>
        <div> {item.desc} </div>
        <div>Price ${item.price}</div>
        {/* botom row */}
        <div className="flex flex-row justify-start">
          <div className="w-[100px] bg-slate-500 p-1 border-2">
            <button
              className="mx-3 p2 rounded-sm bg-slate-300 px-4"
              onClick={decCartProduct.bind(null, item)}
            >
              -
            </button>
            {item.count}
            <button
              //onClick={addProductToCart.bind(null, item)}
              onClick={addProductToCartNew}
              className="mx-3 p2 rounded-sm bg-slate-300 px-4"
            >
              +
            </button>
          </div>

          <div>
            <button
              onClick={removeCartProduct.bind(null, item)}
              className="mx-3 p2 rounded-sm bg-slate-300 px-4"
            >
              Remove
            </button>
          </div>

          <div>${total.toFixed(2)}</div>
        </div>
        {/*end  botom row */}
      </div>
    </div>
  );
};

export default ProductList;
