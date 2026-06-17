import { NextFunction, Request, Response } from "express";
import z from "zod";
import logger from "../config/logger.config";


export const validateRequestBody = (schema: z.ZodObject<any,any>) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await schema.parseAsync(req.body);
            next();

        } catch (error) {
            // If the validation fails, 
            logger.error("Request body is invalid");
            res.status(400).json({
                message: "Invalid request body",
                success: false,
                error: error
            });
            
        }
    }
}


export const validateQueryParams = (schema: z.ZodObject<any,any>) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {

            await schema.parseAsync(req.query);
            next();

        } catch (error) {
            // If the validation fails, 

            res.status(400).json({
                message: "Invalid query params",
                success: false,
                error: error
            });
            
        }
    }
}

