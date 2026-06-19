import type { Status } from "../types";

export const STATUS_CONFIG: Record<
  Status,
  { label: string; bg: string; text: string; border: string; dot: string }
> = {
  Applied: {
    label: "Applied",
    bg: "bg-[#1a3a5c]",
    text: "text-[#60a5fa]",
    border: "border-[#2563eb]",
    dot: "bg-[#3b82f6]",
  },
  Interviewing: {
    label: "Interviewing",
    bg: "bg-[#3a2e1a]",
    text: "text-[#f59e0b]",
    border: "border-[#d97706]",
    dot: "bg-[#f59e0b]",
  },
  Offer: {
    label: "Offer",
    bg: "bg-[#1a3a2a]",
    text: "text-[#34d399]",
    border: "border-[#059669]",
    dot: "bg-[#22c55e]",
  },
  Rejected: {
    label: "Rejected",
    bg: "bg-[#3a1a1a]",
    text: "text-[#f87171]",
    border: "border-[#dc2626]",
    dot: "bg-[#ef4444]",
  },
};

export const ALL_STATUSES: Status[] = ["Applied", "Interviewing", "Offer", "Rejected"];

export const JOB_TYPES = ["Internship", "Full-time", "Part-time"] as const;
