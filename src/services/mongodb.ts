import { MongoClient,ServerApiVersion,Db } from "mongodb";
import { MongoURI } from "../config/mongodb-config";
import { config } from "dotenv";

const client = new MongoClient(MongoURI);

const connectToMongoDb = async(): Promise<void> =>{
    try{
        await client.connect();
        const db:Db = client.db("e-commerce")
        await db.command({ping:1});
        console.log("pinged you deployment. You successfully connected to MongoDb");

    }
    catch(err){
        console.log("mongodb eror is",err);
    }

}

const stopMongoDb = async():Promise<void> =>{
    try{
        await client.close();
        console.log("ended");
    }
    catch(err){
        console.log("error",err);
    }
}

export {connectToMongoDb,stopMongoDb ,client}
