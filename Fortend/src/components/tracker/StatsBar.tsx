import { ALL_STATUSES, STATUS_CONFIG } from "../../constants/design";
import type { Application, Status } from "../../types";

interface Props {
  applications: Application[];
}

interface StatCardProps {
  value: number;
  label: string;
  color?: string;
}

function StatCard({ value, label, color = "text-[#e8ecf4]" }: StatCardProps) {
  return (
    <div className="flex-1 hover:cursor-pointer hover:border-blue-600 flex flex-col items-center justify-center py-1 sm:py-3 px-2 rounded-[10px] border border-[#2e3548] bg-[#1e2330] min-w-0">
      <span className={`text-[22px] font-bold font-mono leading-tight ${color}`}>{value}</span>
      <span className="text-[11px] text-[#555f72] mt-0.5 font-medium">{label}</span>
    </div>
  );
}

const STATUS_COLORS: Record<Status, string> = {
  Applied:      "text-[#60a5fa]",
  Interviewing: "text-[#f59e0b]",
  Offer:        "text-[#34d399]",
  Rejected:     "text-[#f87171]",
};

export default function StatsBar({ applications }: Props) {
  return (
    <div className="flex gap-2 px-4 py-3 border-b border-[#2e3548]">
      <StatCard value={applications.length} label="Total" />
      {ALL_STATUSES.map((status) => (
        <StatCard
          key={status}
          value={applications.filter((a) => a.status === status).length}
          label={STATUS_CONFIG[status].label}
          color={STATUS_COLORS[status]}
        />
      ))}
    </div>
  );
}
