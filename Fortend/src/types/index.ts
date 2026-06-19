export type JobType = "Internship" | "Full-time" | "Part-time";
export type Status = "Applied" | "Interviewing" | "Offer" | "Rejected";

export interface Application {
  id: number;
  company_name: string;
  job_title: string;
  job_type: JobType;
  status: Status;
  applied_date: string;
  notes?: string;
  created_at: string;
  updated_at: string;
}

export interface ApplicationFormData {
  company_name: string;
  job_title: string;
  job_type: JobType;
  status: Status;
  applied_date: string;
  notes?: string;
}
