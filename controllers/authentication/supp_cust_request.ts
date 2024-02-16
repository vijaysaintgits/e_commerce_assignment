import { Request, Response } from 'express';
import cust_supp  from '../../src/models/customer_supplier';


const supp_cust_entry = async(req:Request,res:Response):Promise<any> =>{
    try{
        const {supplier_id,customer_id,user_type} = req.body

        if(!supplier_id || ! customer_id || !user_type){
            return res.status(400).json("Some fields are missing")
        }

        if(user_type === 'supplier'){

            console.log("REACHED HERE SUPPLIER!!!!");
            const mapEntry = cust_supp.create({   
                supplier_id : supplier_id,
                customer_id : customer_id
            },{raw:true})            
           
            return res.status(200).json(`request sent to customer with id ${(await mapEntry).id}`)

        }
    }
    catch(error:any){

        return res.status(401).json(`There is an error ${error}`);
    }
}

export {supp_cust_entry}