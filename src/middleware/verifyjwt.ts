import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from "express";

const verifyToken = (req: Request, res: Response, next: NextFunction): void => {
    let token = req.headers.authorization;

    if (!token) {
        res.status(401).json({ error: 'Token not provided' });
    }

    token = token?.split("Bearer ")[1];
    console.log(token);
    jwt.verify(token as string, "encryp", (err, decoded) => {
        if (err) {
            return res.status(401).json({ error: err });
        }
        

        req.body.jwt_decoded = decoded;
        console.log("verify working");
        next(); // 
    });
}

export default verifyToken;