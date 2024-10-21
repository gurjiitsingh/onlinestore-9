"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import CartContext from "./CartContext";
import { ProductType } from "@/utils/types";
interface Props {
  children: React.ReactNode;
}

export const CartProvider: React.FC<Props> = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {


  const [cartData, setCartData] = useState<ProductType[]>([]);
  const [counter, setCounter] = useState(0);
  const [productTotalCost, setProductTotalCost] = useState(0);
  const [isUpdated, setIsUpdated] = useState(false);

  useEffect(() => {
    if (isUpdated) {
      localStorage.setItem("cart_product_data", JSON.stringify(cartData));
    } else {
      const cart_data_localstorage: any =
        localStorage.getItem("cart_product_data");

      const data = JSON.parse(cart_data_localstorage);
      setCartData([]);
      if(data){
      data.map((item: ProductType) => {
        setCartData((prevState) => {
          return [...prevState, { ...item }];
        });
      });
    }}
    setIsUpdated(false);
    cartTotal();
  }, [cartData]);

  useEffect(() => {
    const cart_data_localstorage: any =
      localStorage.getItem("cart_product_data");

    const data = JSON.parse(cart_data_localstorage);
    setCartData([]);
   
    if(data){
    data.map((item: ProductType) => {
      setCartData((prevState) => {
        return [...prevState, { ...item }];
      });
    });
  }

    setIsUpdated(false);
    cartTotal();
  }, []);


  function cartTotal() {
    var total = 0;
    if (cartData.length > 0) {
      cartData.forEach((element) => {
        total =
          total +
          parseInt(element.count) * parseFloat(element.price).toFixed(2);
      });
    }

    setProductTotalCost(total);
    setIsUpdated(true);
  }

  function addProductToCart(newProduct: ProductType) {
    let isInCart = false;
    //  let itemCount = 0;
    if (cartData !== undefined) {
      cartData.forEach((item: ProductType) => {
        if (item.productId === newProduct.productId) {
          isInCart = true;
          //   console.log("count ",item.count)
        }
      });
    }

    if (newProduct.count === undefined) {
      newProduct["count"] = 1;
    }

    // https://www.shecodes.io/athena/513-how-to-add-property-to-an-object-in-javascript
    if (!isInCart) {
      setCartData((prev) => {
        return [...prev, newProduct];
      });
    } else {
      setCartData(
        cartData.map((item: ProductType) => {
          console.log("item count", item.count);
          return item.productId === newProduct.productId
            ? { ...item, count: item.count ? item.count + 1 : 1 }
            : item;
        })
      );
    }
    setIsUpdated(true);
  }

  function decCartProduct(decProduct: ProductType) {
    setCartData(
      cartData.map((item: ProductType) => {
        return item.productId === decProduct.productId
          ? item.count > 1
            ? { ...item, count: item.count - 1 }
            : item
          : item;
      })
    );
    setIsUpdated(true);
  }

  function removeCartProduct(remProduct: ProductType) {
    setCartData(
      cartData.filter((item: ProductType) => {
        return item.productId !== remProduct.productId;
      })
    );

    setIsUpdated(true);
  }

  function emptyCart() {
    setCartData([]);

    setIsUpdated(true);
  }

  return (
    <CartContext.Provider
      value={{
        cartData,
        counter,
        productTotalCost,
        addProductToCart,
        decCartProduct,
        removeCartProduct,
        emptyCart,

      }}
    >
      {children}
    </CartContext.Provider>
  );
};
