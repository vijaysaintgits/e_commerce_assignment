// const MongoURI = "mongodb+srv://vijayr2906:march123@cluster0.ovumila.mongodb.net/?retryWrites=true&w=majority";
import { config } from "dotenv";

config({path:".env"});

const MongoURI = process.env.MongoURI??''
export {MongoURI};