import {Request,Response,NextFunction} from 'express'; 
import jwt from "jsonwebtoken"; 
import { user_jwt } from '../config';
import { StatusCode } from '../enums/statusCodes';
export const userMiddleware = (req:Request , res:Response,next: NextFunction)=>{

   try {
    const token = req.headers["authorization"]; 

    const verifyUser = jwt.verify(token as string,user_jwt);

    if(verifyUser)  {
        //@ts-ignore
        req.userId = verifyUser.id
        next() ;
    }else {
        res.status(StatusCode.FORBIDDEN).json({
            message : "You are logged In"
        })
    }
   } catch (error) {
    res.status(StatusCode.BAD_REQUEST).json({
        message : error
    })
   }
}    