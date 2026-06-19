import { ALL_STATUSES, STATUS_CONFIG } from "../../constants/design";
import type { Application, Status } from "../../types";

interface Props {
  activeFilter: Status | "All";
  applications: Application[];
  onFilterChange: (f: Status | "All") => void;
}

export default function MobileFilterBar({ activeFilter, applications, onFilterChange }: Props) {
  const countOf = (status: Status) => applications.filter((a) => a.status === status).length;

  return (
    <div className="flex gap-2 px-3 hover:cursor-pointer py-2.5 overflow-x-auto scrollbar-none border-b border-[#2e3548] lg:hidden">
      <button
        onClick={() => onFilterChange("All")}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-[13px] font-medium whitespace-nowrap transition-all shrink-0 ${
          activeFilter === "All"
            ? "border-[#2563eb]/40 bg-[#1a3a5c]/40 text-[#60a5fa]"
            : "border-[#2e3548] bg-transparent text-[#8892a4]"
        }`}
      >
        All
        <span className="text-[11px] px-1.5 py-0.5 rounded-sm bg-[#252b3b] text-[#555f72]">
          {applications.length}
        </span>
      </button>

      {ALL_STATUSES.map((status) => {
        const cfg = STATUS_CONFIG[status];
        const isActive = activeFilter === status;
        return (
          <button
            key={status}
            onClick={() => onFilterChange(status)}
            className={`flex hover:cursor-pointer items-center gap-1.5 px-3 py-1.5 rounded-lg border text-[13px] font-medium whitespace-nowrap transition-all shrink-0 ${
              isActive
                ? `${cfg.bg} ${cfg.border} ${cfg.text}`
                : "border-[#2e3548] bg-transparent text-[#8892a4]"
            }`}
          >
            <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${cfg.dot}`} />
            {status}
            <span className="text-[11px] px-1.5 py-0.5 rounded-sm bg-[#252b3b] text-[#555f72]">
              {countOf(status)}
            </span>
          </button>
        );
      })}
    </div>
  );
}
