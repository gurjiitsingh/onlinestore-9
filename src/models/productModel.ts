import mongoose from "mongoose";



const productSchema = new mongoose.Schema({
name:{
    type: String,
    required: [true,"Please enter product name"]
},
price:{
    type: Number,
    required:[true,"Please enter product price"]
},
category:{
    type:String,
    required:[true, "Please enter product category"]
},
image:{
    type: String,
    required:[true, "Please enter product pictrue"]
}



})


const Products = mongoose.models.products || mongoose.model("products", productSchema);
export default Products;
// _id: '66b0e99aae505284d769ba4a',
// name: 'Sony LED 6',
// price: '2000',
// category: 'LED TV',
// image: 'https://res.cloudinary.com/dyhs5oy4s/image/upload/v1722870165/nextjs-course-mutations/lwilr3szujtdckbghfud.jpg'