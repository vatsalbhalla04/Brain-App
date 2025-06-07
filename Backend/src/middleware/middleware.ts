import {Request,Response,NextFunction} from 'express'; 
import jwt, { JwtPayload } from "jsonwebtoken"; 
import { user_jwt } from '../config';
import { StatusCode } from '../enums/statusCodes';

export const userMiddleware = (req:Request , res:Response,next: NextFunction)=>{

   try {
    const token = req.headers["authorization"]; 

    const verifyUser = jwt.verify(token as string,user_jwt);

   if(verifyUser){
    if(typeof verifyUser === "string"){
        res.status(StatusCode.OK).json({
            message : "You are logged in"
        })
        return; 
    }
    //@ts-ignore
    req.userId = (verifyUser as JwtPayload).id; 
    next(); 
} else {
    res.status(StatusCode.BAD_REQUEST).json({
        message: "You are not logged in"
    })
}
   } catch (error) {
    res.status(StatusCode.BAD_REQUEST).json({
        message : error
    })
   }
}   

