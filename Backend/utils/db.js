import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export default async function connectDb(){

    try{
        if(!process.env.MONGODB_URL){
            console.log('Please Provide MongoDb URL');
            return
        }

        await mongoose.connect(process.env.MONGODB_URL);
    } catch (error) {
        console.log(`Error in connecting db : ${error}` );
    }

}