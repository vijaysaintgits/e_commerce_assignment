
// import { Router, Request, Response, NextFunction } from "express";
// // import EcSuperAdmin from "../models/ec_superadmin_model";
// import jwt from "jsonwebtoken";
// const verifySuperAdmin = (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ): void | Response => {
//   let token = req.headers.authorization;
//   if (!token) {
//     return res.status(401).json({ error: "Token not provided" });
//   }
 
//   token = token?.split("Bearer ")[1];
 
//   jwt.verify(token as string, "encryp", (err, decoded: any) => {
//     if (err) {
//       return res.status(401).json({ error: "Failed to authenticate token" });
//     }
 
//     req.body.jwt_decoded = decoded;
//     if (decoded.user_reg_id === "1") {
//       next();
//     } else {
//       return res.status(200).json({ error: "Access denied" });
//     }
//   });
// };
 
// export default verifySuperAdmin;
 

import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from "express";

const verifySuperAdminToken = (req: Request, res: Response, next: NextFunction) => {
    let token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ error: 'Token not provided' });
    }

    token = token?.split("Bearer ")[1];
    
    jwt.verify(token as string, "encryp", (err, decoded:any) => {
        
        if (err) {
            return res.status(401).json({ error: err });
        }
        

        req.body.jwt_decoded = decoded;
        if(decoded.userId == "1"){
            console.log(token);
            next();

        }
        else{
            return res.status(200).json({ error: "Access denied" });
        }
        
    });
}

export default verifySuperAdminToken;