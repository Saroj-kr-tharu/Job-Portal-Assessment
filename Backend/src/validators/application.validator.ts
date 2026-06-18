import { z } from "zod";

export const createApplication = z.object({
    company_name: z.string().min(1, "Company name is required"),
    job_title: z.string().min(1, "Job title is required"),
    job_type: z.enum(["Internship", "Full-time", "Part-time"]),
    status: z.enum(["Applied", "Interviewing", "Offer", "Rejected"]).default("Applied"),
    applied_date: z.coerce.date(),
    notes: z.string().optional(),
});

export const updateApplication = createApplication.partial().refine(
    (data) => Object.keys(data).length > 0,
    { message: "At least one field must be provided to update" }
);


export type UpdateApplicationInput = z.infer<typeof updateApplication>;
export type CreateApplicationInput = z.infer<typeof createApplication>;


export const getAllApplication = z.object({
    page: z.coerce.number().int().positive().default(1),
    limit: z.coerce.number().int().positive().max(100).default(10),
    status: z.enum(["Applied", "Interviewing", "Offer", "Rejected"]).optional(),
    search: z.string().optional(),  
});


export type GetAllApplicationQuery = z.infer<typeof getAllApplication>;


export const getApplicationById = z.object({
    id: z.coerce.number().int().positive("Id must be a positive number"),
});

export type GetApplicationByIdParam = z.infer<typeof getApplicationById>;


