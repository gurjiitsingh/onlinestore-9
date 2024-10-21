"use server";
import { connect } from "@/dbConfig/dbConfig";
import Products from "@/models/productModel";

connect();

export async function editProductFields(formData: FormData) {
  const productId = formData.get("productId");
  const productName = formData.get("name");
  const productPrice = formData.get("price")
  const productDesc = formData.get("productDesc");
  const productcompany = formData.get("company");

  // category
  // image
  console.log("----- in edit aciton --------")
  console.log(productId,formData.get("name") )

//   Products.findByIdAndUpdate(
//     "66b0e6473fb411742b4605be",
//     { name: "xyg" },
  
//   );
try {
 // const result = await Products.findOneAndUpdate({ _id: productId },
 //   {$set: { name: productName, price: productPrice }},
//  );
//   const result = await Products.findByIdAndUpdate({ _id: "66b0e6203fb411742b4605bd" },
//     {$set: { name: "Samsung Glax 27" }},
//     {$set: { category: "Mobiles1" }});
  //console.log(result)
} catch (error) {
 //   console.log(error)
}



  // Products.updateMany(
  //     {name:formData.get('name')},
  //     {price:formData.get('price')},
  //      function (err, docs) {
  //     if (err){
  //         console.log(err)
  //     }
  //     else{
  //         console.log("Updated Docs : ", docs);
  //     }
  // });

//  Products.findByIdAndUpdate(productId, { name: "jason bourne" }, options);
}
