import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { FiX } from "react-icons/fi";
import { ALL_STATUSES, JOB_TYPES } from "../../constants/design";
import { applicationSchema, type ApplicationSchema } from "../../schemas/application";
import type { Application } from "../../types";

interface Props {
  isOpen: boolean;
  editTarget: Application | null;
  onSubmit: (data: ApplicationSchema) => void;
  onClose: () => void;
  isLoading?: boolean;
}

const fieldClass =
  "w-full px-3 py-2 hover:cursor-pointer rounded-[10px] border border-[#2e3548] bg-[#1e2330] text-[14px] text-[#e8ecf4] placeholder-[#555f72] focus:outline-none focus:border-[#3b82f6]/60 transition-colors";
const labelClass = "block text-[12px] font-medium text-[#8892a4] mb-1.5 uppercase tracking-wide";
const errorClass = "text-[11px] text-[#f87171] mt-1";

export default function AppFormModal({ isOpen, editTarget, onSubmit, onClose, isLoading }: Props) {
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
    if (isOpen) {
      if (editTarget) {
        reset({
          company_name: editTarget.company_name,
          job_title: editTarget.job_title,
          job_type: editTarget.job_type,
          status: editTarget.status,
          applied_date: editTarget.applied_date?.slice(0, 10) ?? "",
          notes: editTarget.notes ?? "",
        });
      } else {
        reset({
          company_name: "",
          job_title: "",
          job_type: "Internship",
          status: "Applied",
          applied_date: new Date().toISOString().slice(0, 10),
          notes: "",
        });
      }
    }
  }, [isOpen, editTarget, reset]);

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm" onClick={onClose} />
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="w-full max-w-lg bg-[#1a1f2e] border border-[#2e3548] rounded-2xl shadow-2xl flex flex-col max-h-[90vh]">
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-[#2e3548] shrink-0">
            <div>
              <h2 className="text-[16px] font-bold text-[#e8ecf4]">
                {editTarget ? "Edit Application" : "Add Application"}
              </h2>
              <p className="text-[12px] text-[#555f72] mt-0.5">
                {editTarget ? `Updating ${editTarget.company_name}` : "Log a new role to your tracker"}
              </p>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 flex hover:cursor-pointer items-center justify-center rounded-lg border border-[#2e3548] text-[#555f72] hover:bg-[#252b3b] hover:text-[#e8ecf4] transition-colors"
            >
              <FiX size={14} />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col overflow-y-auto scrollbar-thin">
            <div className="px-5 py-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Company Name */}
              <div className="sm:col-span-2">
                <label className={labelClass}>
                  Company Name <span className="text-[#f87171]">*</span>
                </label>
                <input
                  {...register("company_name")}
                  placeholder="e.g. Stripe"
                  className={`${fieldClass} ${errors.company_name ? "border-[#dc2626]" : ""}`}
                />
                {errors.company_name && <p className={errorClass}>{errors.company_name.message}</p>}
              </div>

              {/* Job Title */}
              <div className="sm:col-span-2">
                <label className={labelClass}>
                  Job Title <span className="text-[#f87171]">*</span>
                </label>
                <input
                  {...register("job_title")}
                  placeholder="e.g. Frontend Engineer Intern"
                  className={`${fieldClass} ${errors.job_title ? "border-[#dc2626]" : ""}`}
                />
                {errors.job_title && <p className={errorClass}>{errors.job_title.message}</p>}
              </div>

              {/* Job Type */}
              <div>
                <label className={labelClass}>Job Type <span className="text-[#f87171]">*</span></label>
                <select {...register("job_type")} className={fieldClass}>
                  {JOB_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>

              {/* Status */}
              <div>
                <label className={labelClass}>Status <span className="text-[#f87171]">*</span></label>
                <select {...register("status")} className={fieldClass }>
                  {ALL_STATUSES.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              {/* Applied Date */}
              <div className="sm:col-span-2 ">
                <label className={labelClass}>
                  Applied Date <span className="text-[#f87171]">*</span>
                </label>
                <input
                  {...register("applied_date")}
                  type="date"
                  className={`${fieldClass} hover:cursor-pointer ${errors.applied_date ? "border-[#dc2626]" : ""}`}
                />
                {errors.applied_date && <p className={errorClass}>{errors.applied_date.message}</p>}
              </div>

              {/* Notes */}
              <div className="sm:col-span-2">
                <label className={labelClass}>
                  Notes{" "}
                  <span className="text-[#555f72] normal-case font-normal tracking-normal">
                    (optional)
                  </span>
                </label>
                <textarea
                  {...register("notes")}
                  rows={3}
                  placeholder="Interview notes, referral contact, follow-up reminders…"
                  className={`${fieldClass} resize-none`}
                />
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-end gap-2 px-5 py-4 border-t border-[#2e3548] shrink-0">
              <button
                type="button"
                onClick={onClose}
                disabled={isLoading}
                className="px-4 py-2 hover:cursor-pointer rounded-[10px] border border-[#2e3548] text-[14px] font-medium text-[#8892a4] hover:text-[#e8ecf4] hover:bg-[#252b3b] transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isLoading}
                className="flex items-center hover:cursor-pointer gap-2 px-5 py-2 rounded-[10px] bg-[#1a3a5c] border border-[#2563eb]/40 text-[#60a5fa] text-[14px] font-semibold hover:bg-[#1e4a75] transition-colors disabled:opacity-50"
              >
                {isLoading && (
                  <span className="w-3.5 h-3.5  border-2 border-[#60a5fa]/30 border-t-[#60a5fa] rounded-full animate-spin" />
                )}
                {editTarget ? "Save Changes" : "Add Application"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
