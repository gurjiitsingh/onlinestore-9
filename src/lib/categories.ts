import connectionToDatabase from './db';
import { CategoryType } from '@/utils/types'


export async function insertCategory(newCategoryData:CategoryType){

const { name, desc } = newCategoryData;

console.log(name,desc);

try {
    const client = await connectionToDatabase();
    const collection = client.db().collection('categories');
    const result = await collection.insertOne({name, desc});
console.log(result);
if(result.acknowledged){
   return {status:"ok"}
}

} catch (error) {
    throw new Error("can not insert record")
}


return {status:"fail"}


}


export async function getAllCategories(){

try{

const client = await connectionToDatabase();
const collection =  client.db().collection('categories');
const result = await collection.find().toArray();
client.close(); 
//console.log(result);


}catch(error){

    throw new Error("Can not fetch categories")
}



return;
}