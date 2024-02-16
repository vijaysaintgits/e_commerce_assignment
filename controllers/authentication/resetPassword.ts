import { Request, Response } from 'express';
import EcSuppliers from "../../src/models/ec_suppliers";

const resetPassword = async(req:Request,res:Response):Promise<any>=>{
    try{
        const{e_mail,new_password,user_type} = req.body;

        if(!new_password || !e_mail || !user_type){
            res.status(422).json("some fields are empty")
        }

        // if(user_type === 'supplier' || user_type === 'Supplier'){
            const updated= await EcSuppliers.update({password:new_password},{where:{e_mail:e_mail}}); 
            console.log(updated);
            if(updated!==null){
                return res.status(200).json(`the new password for email`);

            }
            
    }catch(error:any){
        console.log(error);
        return res.status(401).json(error);
    }

}

export default resetPassword;