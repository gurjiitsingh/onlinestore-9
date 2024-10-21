"use client";
import React, { useEffect, useState } from "react";
import { useCartContext } from "@/store/CartContext";
import Container from "@/components/globals/Container";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";

import DynamicRadioButtons from '@/components/formComponents/DynamicRadioButtons'
import Link from "next/link";



const page = () => {
  const { data: session } = useSession();
  const { cartData, productTotalCost } = useCartContext();
  const serchParams = useSearchParams();
const userId = serchParams.get("userId");

const [userAddress, setUserAddress ] = useState([]);
const [addOption, setAddressOption ] = useState({});
const [selectedAddressOption, setSelectedAddressOption] = useState(null);


useEffect(()=>{

  async function userAdd() {
  
  
    const result = await fetch(`http://localhost:3000/api/address?userId=${userId}`) 
    const data = await result.json();
   //console.log("address list ", data.data)
   setUserAddress(data.data)
  }

  userAdd();
//  if(session?.user?.id){
//   userAdd()
//  }
//console.log(addOption)
},[])
  

 
  const handleOptionChange = (event) => {
    const value = event.target.value;
    setSelectedAddressOption(value);
   // onSelect(value);
  };
 

  return (
    <Container className="my-[7%]">
      <div className="flex flex-col ">
        <h1>Your Adress</h1>
       
        <div>
          <p>Selected option: {selectedAddressOption}</p>
    </div>
{userAddress&& userAddress.map((add,i)=>{
 
  return(
    <div className="w-full border-t-2 mb-4 py-4 flex flex-row gap-4" key={add.addressId}>
    
  <input
            type="radio"
            id={add.addressId}
            name="dynamicRadio"
            value={add.addressId}
            // checked={true}
            onChange={handleOptionChange}
          />
    <div className="font-semibold ">{add.addressLine1}</div>
    <div className="">{add.addressLine2}</div>
    <div className="">{add.city}</div>
    <div className="">{add.state}</div>

    </div>
  )
})}

      


  <Button className="w-fit mt-5"><Link href={{
          pathname:'/payment',
          query:{
            userId:userId,
            addressId:selectedAddressOption,

          }
         } }>
        Use This Adderss
        </Link></Button>
      </div>
    </Container>
  );
};

export default page;
