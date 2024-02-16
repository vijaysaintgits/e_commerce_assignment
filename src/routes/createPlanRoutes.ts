import express , {Router,Request,Response} from 'express';
const adminRouter = Router();
import createSubPlan from '../../controllers/authentication/createSubPlan';
import verifySuperAdminToken from '../middleware/verifySuperAdmin';

adminRouter.post("/createSubPlan",verifySuperAdminToken,async(req:Request,res:Response)=>{
    createSubPlan(req,res);
})

export default adminRouter;