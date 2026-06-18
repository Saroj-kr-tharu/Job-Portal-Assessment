import { NextFunction, Request, Response } from "express";
import applicationSVC from "../service/application.service";
import { GetAllApplicationQuery } from "../validators/application.validator";

export const pingHandler = async (req: Request, res: Response) => {
    res.status(200).json({ message: "Pong!" });
}

export const appCreate = async (req: Request, res: Response) => {

   const result = await applicationSVC.createService(req.body);

    res.status(201).json({
            success: true,
            message: "Sucessfully Created Application",
            data: result
    });
}


export const appList = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { page, limit, status, search } = req.query as unknown as GetAllApplicationQuery;

        const { rows, count } = await applicationSVC.getAllService(
            page,
            limit,
            { status, search }
        );

        res.status(200).json({
            success: true,
            message: "Successfully fetched applications",
            data: {
                applications: rows,
                pagination: {
                    total: count,
                    page,
                    limit,
                    totalPages: Math.ceil(count / limit),
                    hasNext: page < Math.ceil(count / limit),
                    hasPrev: page > 1,
                }
            }
        });
    } catch (error) {
        next(error);
    }
};


export const appById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = parseInt(req.params.id);
        const result = await applicationSVC.getByIdService(id);
        if (!result) {
            res.status(404).json({
                success: false,
                message: `Application with id ${id} not found`,
                data: null
            });
            return;
        }

        res.status(200).json({
            success: true,
            message: "Successfully fetched application",
            data: result   
        });
    } catch (error) {
        next(error);
    }
};


export const appDeleteById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = parseInt(req.params.id);
        let result = await applicationSVC.getByIdService(id);
        if (!result) {
            res.status(404).json({
                success: false,
                message: `Application with id ${id} not found`,
                data: null
            });
            return;
        }
        const total = await applicationSVC.deleteService(id);
        
        res.status(200).json({
            success: true,
            message: "Successfully delete application",
            data: {
                result, 
                total
            }   
        });
    } catch (error) {
        next(error);
    }
};


export const updateById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = parseInt(req.params.id);
        const data = req?.body; 

        let result = await applicationSVC.getByIdService(id);
        if (!result) {
            res.status(404).json({
                success: false,
                message: `Application with id ${id} not found`,
                data: null
            });
            return;
        }
        const updated = await applicationSVC.updateService(id,data);
        
        res.status(200).json({
            success: true,
            message: "Successfully update application",
            data: updated
               
        });
    } catch (error) {
        next(error);
    }
};