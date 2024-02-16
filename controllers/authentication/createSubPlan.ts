import { Request, Response } from 'express';
import SuperAdmin  from '../../src/models/super_admin';
import SubPlan  from '../../src/models/sub_plan';

const createSubPlan = async(req:Request,res:Response) : Promise<any> =>{
    try{
        const {e_mail,password,user_type,fee,no_of_customers} = req.body;

        if(!fee || !e_mail || !password || !user_type || !no_of_customers){
            res.status(422).json("Some fields are empty");
        }

        if(user_type === 'superadmin'){

            const adminCheck = await SuperAdmin.findOne({where:{e_mail:e_mail}});
            
            if(adminCheck !== null){
                const allSubPlan = await SubPlan.create({

                    fee : fee,
                    no_of_customers : no_of_customers,
        
                },{raw:true})

                if(allSubPlan !== null){

                    return res.status(200).json({ message: `the subscription plan id is : ${allSubPlan.id},fee: ${allSubPlan.fee}, no_of_customers: ${allSubPlan.no_of_customers}} `});
                }

            }

           
        }    

      
    }
    catch(error:any){

        return res.status(401).json(`There is no subscription plan added ${error}`);
    }
}

export default createSubPlan;