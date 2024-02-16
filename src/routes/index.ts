import express , {Router,Request,Response, NextFunction} from 'express';
import login from "../../controllers/authentication/login";
import registration from "../../controllers/authentication/registration";
import getSubPlan from '../../controllers/authentication/getSubPlan';
import verifyToken from '../middleware/verifyjwt';
const checkValue = "ownerHere";
const router = Router();

const middleware =(req:Request,res:Response,next:NextFunction)=>{
    if(req.headers['x-api-key']===checkValue){
        res.setHeader("Set-Cookie",["name = vijay","message = hi"]);
        next();
    }}


router.post("/login",async (req:Request,res:Response)=>{
    login(req,res);

});

router.post("/registration",async(req:Request,res:Response)=>{
    registration(req,res);


});

router.get("/getSubPlan",async(req:Request,res:Response)=>{
    getSubPlan(req,res);
})

export default router;  