import express , {Router,Request,Response, NextFunction} from 'express';
import login from "../../controllers/authentication/login";
import registration from "../../controllers/authentication/registration";
import getSubPlan from '../../controllers/authentication/getSubPlan';
import verifyToken from '../middleware/verifyjwt';
import addProducts from '../../controllers/products/addProduct';
import { findProducts } from '../../controllers/products/findProducts';
const checkValue = "ownerHere";
const productRouter = Router();

productRouter.post("/addProduct",async (req:Request,res:Response)=>{
    addProducts(req,res);

});

productRouter.get("/mongoGetProduct",async(req:Request,res:Response)=>{
    findProducts(req,res);
})

export default productRouter;