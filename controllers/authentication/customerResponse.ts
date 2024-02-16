import { Request, Response } from 'express';
import { cust_supp } from '../../types/modelTypes/customer_supplier';

const customerResponse = async(req:Request,res:Response):Promise<any> =>{
    try{
        const{customer_id,supplier_id,user_type,approvalStatus} = req.body;

        if(!customer_id || !supplier_id || !user_type || !approvalStatus){
            return res.status(400).json("Some fields are empty")
        }

        if(user_type === 'customer'){

                // const findEntry = await cust_supp.findOne({where:{cust}})
                const customerResponse = await cust_supp.update({status:approvalStatus},{where:{customer_id:customer_id,supplier_id:supplier_id}});
                console.log(customerResponse);
                if(customerResponse[0]== 0){
                    return res.status(200).json("no such customer - supplier pair");

                }
                else{
                    return res.status(400).json("Response updated successfully")
                }

            
           

        }
    }
    catch(error){
        console.error(error);
        return res.status(500).json({ message: "Not response updated" });

    }
}

export {customerResponse}