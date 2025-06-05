import { Router, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { userModel } from '../model/db';
import { StatusCode } from '../enums/statusCodes';
import { user_jwt } from '../config';

const userRoute = Router();

userRoute.post("/signUp", async (req: Request, res: Response) => {
    const { email, password, username } = req.body;
    try {
        const hashPass = await bcrypt.hash(password, 3);

        await userModel.create({
            email,
            username,
            password: hashPass
        });

        res.status(StatusCode.OK).json({
            message: "Account created"
        });
    } catch (error) {
        res.status(StatusCode.FORBIDDEN).json({
            message: error
        });
    }
});

//@ts-ignore
userRoute.post("/signIn", async (req, res) => {
    const { email,username, password } = req.body;
    
    try {
        const response = await userModel.findOne({ username , email});
        
        if (!response) {
            return res.status(StatusCode.FORBIDDEN).json({
                message: "User Does Not Exist"
            });
        }

        const passMatch = await bcrypt.compare(password, response.password); 
        //@ts-ignore
        if(passMatch) {
            //@ts-ignore
            const token = jwt.sign({
                id: response._id.toString()},user_jwt, 
            )
            return res.status(StatusCode.OK).json({
                token 
            })
        }
        else {
            return res.status(StatusCode.UNAUTHORIZED).json({
                message: "Invalid Credentials"
            });
        }
    } catch (error) {
        res.status(StatusCode.INTERNAL_SERVER_ERROR).json({
            message: error
        });
    }
});

export { userRoute };
