import { Request, Response } from 'express';
import EcSuppliers  from '../../src/models/ec_suppliers';
import SubPlan  from '../../src/models/sub_plan';
import bcrypt from 'bcrypt';

const supplierRequest = async(req:Request,res:Response)=>{
    try{
        const{e_mail,password,user_type,sub_id} = req.body

        if(!e_mail || !password || !user_type || !sub_id){
            return res.status(422).json({ message: "Some fields are empty" });
        }

        if(user_type === 'supplier'){
            const checkResult = await EcSuppliers.findOne({ where: { e_mail: e_mail} });
            const subCheck = await SubPlan.findOne({where:{id:parseInt(sub_id)}})

            if (subCheck && checkResult && bcrypt.compareSync(password, checkResult.password)) {
                const supplierUpdate = await EcSuppliers.update({sub_id:sub_id},{where:{e_mail:e_mail}})
                return res.status(200).json(`subscription id ${subCheck.id} assigned to supplier${checkResult.id}`);
                
            }
            else{
                return res.status(401).json(`check condition failed`);
            }

            // if(!checkResult)
            // return res.status(404).json({message:"user not found"})
            
            
            // if(!subCheck)
            // return res.status(404).json({message:"plan not found"})

            // if(checkResult && subCheck){
            //     const supplierUpdate = await EcSuppliers.update({sub_id:sub_id},{where:{e_mail:e_mail,password:password}})
            //     return res.status(200).json(`subscription id ${subCheck.id} assigned to supplier${checkResult.id}`);
            // }
            

            
        }

    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Supplier has no sub_id" });
    }
}

export default supplierRequest;