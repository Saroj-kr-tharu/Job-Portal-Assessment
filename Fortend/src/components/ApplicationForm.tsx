import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { applicationSchema, type ApplicationSchema } from "../schemas/application";
import type { Application } from "../types";

interface Props {
  defaultValues?: Partial<Application>;
  onSubmit: (data: ApplicationSchema) => void;
  onCancel: () => void;
  isLoading?: boolean;
}

const JOB_TYPES = ["Internship", "Full-time", "Part-time"] as const;
const STATUSES = ["Applied", "Interviewing", "Offer", "Rejected"] as const;

export default function ApplicationForm({ defaultValues, onSubmit, onCancel, isLoading }: Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ApplicationSchema>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      company_name: "",
      job_title: "",
      job_type: "Internship",
      status: "Applied",
      applied_date: "",
      notes: "",
    },
  });

  useEffect(() => {
    if (defaultValues) {
      reset({
        company_name: defaultValues.company_name ?? "",
        job_title: defaultValues.job_title ?? "",
        job_type: defaultValues.job_type ?? "Internship",
        status: defaultValues.status ?? "Applied",
        applied_date: defaultValues.applied_date?.slice(0, 10) ?? "",
        notes: defaultValues.notes ?? "",
      });
    }
  }, [defaultValues, reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text font-medium">Company Name <span className="text-error">*</span></span>
          </label>
          <input
            {...register("company_name")}
            placeholder="e.g. Stripe"
            className={`input input-bordered w-full ${errors.company_name ? "input-error" : ""}`}
          />
          {errors.company_name && (
            <label className="label">
              <span className="label-text-alt text-error">{errors.company_name.message}</span>
            </label>
          )}
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-medium">Job Title <span className="text-error">*</span></span>
          </label>
          <input
            {...register("job_title")}
            placeholder="e.g. Frontend Engineer Intern"
            className={`input input-bordered w-full ${errors.job_title ? "input-error" : ""}`}
          />
          {errors.job_title && (
            <label className="label">
              <span className="label-text-alt text-error">{errors.job_title.message}</span>
            </label>
          )}
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-medium">Job Type <span className="text-error">*</span></span>
          </label>
          <select {...register("job_type")} className="select select-bordered w-full">
            {JOB_TYPES.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-medium">Status <span className="text-error">*</span></span>
          </label>
          <select {...register("status")} className="select select-bordered w-full">
            {STATUSES.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>

        <div className="form-control sm:col-span-2">
          <label className="label">
            <span className="label-text font-medium">Applied Date <span className="text-error">*</span></span>
          </label>
          <input
            {...register("applied_date")}
            type="date"
            className={`input input-bordered w-full ${errors.applied_date ? "input-error" : ""}`}
          />
          {errors.applied_date && (
            <label className="label">
              <span className="label-text-alt text-error">{errors.applied_date.message}</span>
            </label>
          )}
        </div>

        <div className="form-control sm:col-span-2">
          <label className="label">
            <span className="label-text font-medium">Notes <span className="text-base-content/40 font-normal">(optional)</span></span>
          </label>
          <textarea
            {...register("notes")}
            rows={3}
            placeholder="Any notes about this application…"
            className="textarea textarea-bordered w-full resize-none"
          />
        </div>
      </div>

      <div className="flex justify-end gap-2 pt-2">
        <button type="button" className="btn btn-ghost" onClick={onCancel} disabled={isLoading}>
          Cancel
        </button>
        <button type="submit" className="btn btn-primary" disabled={isLoading}>
          {isLoading && <span className="loading loading-spinner loading-sm" />}
          {defaultValues?.id ? "Save Changes" : "Add Application"}
        </button>
      </div>
    </form>
  );
}
