import { Request, Response } from 'express';
import EcSuppliers from "../../src/models/ec_suppliers";

const profile = async(req:Request,res:Response):Promise<any>=>{
    try{
        const {reg_id} = req.body;
        
        if(!reg_id){
            res.status(422).json("Some fields are empty");//(message:'')
        }

    
            const checkResult = await EcSuppliers.findOne({where:{registration_id:reg_id}});

            console.log(checkResult);

            if(checkResult==null){
                return res.status(400).json({message: "null checkresult" });
            }
            
            if(checkResult!==null){
                return res.status(200).json(`Full name : ${checkResult.full_name}, registration id : ${checkResult.registration_id}, email  :${checkResult.e_mail}, registration id : ${checkResult.registration_id}`);
            }
        
        }catch(error:any){
            console.log(error);
            return res.status(401).json(error);
        }
}

export default profile;