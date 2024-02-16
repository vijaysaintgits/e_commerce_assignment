import { Db ,SortDirection } from "mongodb";
import {client} from "../../src/services/mongodb"
import { Request,Response } from "express";

let db: Db = client.db("e-commerce")

const findProducts = async(req:Request,res:Response) : Promise<any> =>{
     try{
        const page = parseInt(req.query.page as string) || 1;
        const limit = 5;
        const offset = (page - 1) * limit;

        const sortField = req.query.sortField as string;
        // const sortOrder = parseInt(req.query.sortOrder as string);
        // const sortOption = {[sortField]: sortOrder};
        const sortOrderNumber = parseInt(req.query.sortOrder as string) || 1;
        const sortOrder: SortDirection = sortOrderNumber === 1 ? 1 : -1;
        const sortOption: [string, SortDirection] = [sortField, sortOrder];

        const searchQuery = req.query.search as string || '';
        const searchRegex = new RegExp(searchQuery, 'i');
        //const searchRegex = new RegExp(req.query.search as string,'i');
        const query = {
            $or: [
                { product_name: { $regex: searchRegex } },
                
            ]
        };


        const findResult = await db.collection('products').find(query).sort(sortOption).skip(offset).limit(limit).toArray();
        return res.status(200).json({data:findResult});

     }
     catch(err){
        return res.status(400).json("entry failed")
    
    }
}

export {findProducts}