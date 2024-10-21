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
  const [productTotalCost, setProductTotalCost ] = useState(0);
  const [isUpdated, seIsUpdated] = useState(false);



  useEffect(() => {

    if (isUpdated) {
      console.log("--------- isupdated ----------")
      console.log("---- local stror ----",localStorage.getItem("cart_product_data"));
      localStorage.setItem("cart_product_data", JSON.stringify(cartData));
      console.log("---- local stror ----",localStorage.getItem("cart_product_data"));
      console.log("---- cart ----",cartData);
    }else{
      const cart_data_localstorage: any =
      localStorage.getItem("cart_product_data");

    const data = JSON.parse(cart_data_localstorage);
    setCartData([]);
    data.map((item: ProductType) => {
      setCartData((prevState) => {
        return [...prevState, { ...item }];
      });
    });
       
    }
    seIsUpdated(false)
    cartTotal()
  }, [cartData]);



  useEffect(() => {


      const cart_data_localstorage: any =
      localStorage.getItem("cart_product_data");

    const data = JSON.parse(cart_data_localstorage);
    setCartData([]);
    data.map((item: ProductType) => {
      setCartData((prevState) => {
        return [...prevState, { ...item }];
      });
    });
       
  
    seIsUpdated(false)
    cartTotal()
  }, []);


  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);

  function cartTotal() {
    var total = 0;
    if (cartData.length > 0) {
      cartData.forEach((element) => {
        total =
          total +
          parseInt(element.count) * parseFloat(element.price).toFixed(2);
      });
    }

    setProductTotalCost(total)
    seIsUpdated(true)
  }

  function addProductToCart(newProduct: ProductType) {
    console.log("--------- add to cart ----------")
   // console.log("---- cartdata ----",cartData);
    console.log("---- newProduct ----",newProduct.count);

  
    
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


    if(newProduct.count===undefined){
      // TODO
     //  if item allready in cart with itme coutn 2 and we click add to cart button
     // it will make product count to 1 and add +1 total 2 insted 3
     // for that we have also check item count in cart and them update this value
     newProduct["count"] = 1;
     
   }
    // const ab = cartData.find((item) => item.id === newProduct.id);
 // console.log(newProduct)
  //console.log(cartData)
  // console.log(isInCart);

 //   newProduct["count"] = 1; // add 'count' property ot object newProduct
    // https://www.shecodes.io/athena/513-how-to-add-property-to-an-object-in-javascript
    if (!isInCart) {
      setCartData((prev) => {
        return [...prev, newProduct];
      });
    } else {
      //val: number, index: number

    
      setCartData(
        cartData.map((item: ProductType) => {
        console.log("item count", item.count)
          return item.productId === newProduct.productId
            ? { ...item, count: item.count ? item.count + 1 : 1 }
            : item;
        })
      );
    }
    seIsUpdated(true)
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
    seIsUpdated(true)
  }

  function removeCartProduct(remProduct: ProductType) {
    setCartData(
      cartData.filter((item: ProductType) => {
        return item.productId !== remProduct.productId;
      })
    );

console.log("---- remove from cart -----------")
seIsUpdated(true)
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
        
           
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
