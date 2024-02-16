import  EcSuppliers  from "../../src/models/ec_suppliers";
import express , {Router,Request,Response} from 'express';
const supplierRouter = Router();
import resetPassword from "../../controllers/authentication/resetPassword";
import profile from "../../controllers/authentication/profile";
import supplierRequest from "../../controllers/authentication/supplierRequest";
import { supp_cust_entry } from "../../controllers/authentication/supp_cust_request";
import verifyToken from "../middleware/verifyjwt";
import verifySuperAdminToken from "../middleware/verifySuperAdmin";


supplierRouter.get("/profile",verifyToken,async(req:Request,res:Response)=>{
    profile(req,res);
})

supplierRouter.patch("/resetPassword",async(req:Request,res:Response)=>{
    resetPassword(req,res);
})

supplierRouter.patch('/supplierRequest',async(req:Request,res:Response)=>{
    supplierRequest(req,res);
})

supplierRouter.post('/requestCustomer',async(req:Request,res:Response)=>{
    supp_cust_entry(req,res);
})

export default supplierRouter;