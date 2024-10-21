'use server'
import { MongoClient} from 'mongodb';


export default async function connectionToDatabase(){
    const client = await   MongoClient.connect(process.env.MONGODB_URI)
    return client;  
} 