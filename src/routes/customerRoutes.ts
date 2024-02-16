import express , {Router,Request,Response} from 'express';
import { customerResponse } from '../../controllers/authentication/customerResponse';
const customerRoutes = Router();

customerRoutes.patch("/customerResponse",async(req:Request,res:Response)=>{
    customerResponse(req,res);
})

export default customerRoutes;