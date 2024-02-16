import { Db } from "mongodb";
import {client} from "../../src/services/mongodb"
import { Request,Response } from "express";

let db: Db = client.db("e-commerce")

const addProducts = async(req:Request,res:Response) : Promise<any> =>{
    try{
        // const {product_name,product_price,product_stock,supplier_id,...otherData} = req.body;

        const productsToInsert: Record<string,string>[]= req.body;
        
        // if(!product_name || !product_price || !product_stock || !supplier_id){
        //     return res.status(400).json("Some fields are missing");
        // }

        // db.collection('products').insertOne({

            
        //     product_name : product_name,
        //     product_price : product_price,
        //     product_stock : product_stock,
        //     supplier_id : supplier_id,

        // })

        // const productsToInsert = [
        //     {
        //         product_name: product_name,
        //         product_price: product_price,
        //         product_stock: product_stock,
        //         supplier_id: supplier_id,
        //     },
        // ];

       const result = await db.collection('products').insertMany(productsToInsert)
       if(result !== null){
        return res.status(200).json("entry sucess")
       }
   
}
catch(err){
    return res.status(400).json("entry failed")

}

};

export default addProducts;

