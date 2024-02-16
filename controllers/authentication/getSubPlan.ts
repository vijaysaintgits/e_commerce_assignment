import { Request, Response } from 'express';
import { SubPlan } from '../../types/modelTypes/sub_plan';

const getSubPlan = async(req:Request,res:Response):Promise<any> =>{

    try{
        const allSubPlans = await SubPlan.findAll({ raw: true });
        console.log(allSubPlans);
        return res.status(200).json({data:allSubPlans});

    }
    catch(error:any){

        return res.status(401).json(`There is an error ${error}`);
    }

}
export default getSubPlan;