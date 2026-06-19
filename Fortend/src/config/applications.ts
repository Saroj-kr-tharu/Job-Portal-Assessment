import axios from "axios";
import type { Application, ApplicationFormData } from "../types";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL ,
});
console.log("API URL:", import.meta.env.VITE_API_URL);

export interface GetApplicationsParams {
  status?: string;
  search?: string;
}


export interface GetApplicationsParams {
  status?: string;
  search?: string;
  page?: number;
  limit?: number;
}

export interface PaginatedResponse {
  applications: Application[];
  pagination: {
    total: number;
    totalPages: number | null;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

export const getApplications = async (params: GetApplicationsParams = {}): Promise<PaginatedResponse> => {
  const { data } = await api.get("/applications", { params });
  return data.data; 
};



export const getApplication = async (id: number): Promise<Application> => {
  const { data } = await api.get(`/applications/${id}`);
  return data;
};

export const createApplication = async (payload: ApplicationFormData): Promise<Application> => {
  const { data } = await api.post("/applications", payload);
  return data;
};

export const updateApplication = async (id: number, payload: Partial<ApplicationFormData>): Promise<Application> => {
  const { data } = await api.patch(`/applications/${id}`, payload);
  return data;
};

export const deleteApplication = async (id: number): Promise<void> => {
  await api.delete(`/applications/${id}`);
};
