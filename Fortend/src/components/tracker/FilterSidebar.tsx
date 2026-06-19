import { ALL_STATUSES, STATUS_CONFIG } from "../../constants/design";
import type { Application, Status } from "../../types";

interface Props {
  activeFilter: Status | "All";
  applications: Application[];
  onFilterChange: (f: Status | "All") => void;
}

interface FilterItemProps {
  label: string;
  count: number;
  isActive: boolean;
  dot?: string;
  onClick: () => void;
}

function FilterItem({ label, count, isActive, dot, onClick }: FilterItemProps) {
  return (
    <button
      onClick={onClick}
      className={`
        w-full hover:cursor-pointer flex items-center gap-3 px-4 py-2.5 rounded-[10px] border text-left transition-all duration-150
        ${isActive
          ? "border-[#2563eb]/40 bg-[#1a3a5c]/40 text-[#60a5fa]"
          : "border-[#2e3548] bg-transparent text-[#8892a4] hover:bg-[#252b3b] hover:text-[#e8ecf4]"
        }
      `}
    >
      {dot ? (
        <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${dot}`} />
      ) : (
        <span className="w-2.5 h-2.5 rounded-full shrink-0 bg-[#555f72]" />
      )}
      <span className="flex-1 text-[14px] font-medium">{label}</span>
      <span
        className={`text-[12px] px-2 py-0.5 rounded-md font-medium ${
          isActive ? "bg-[#1a3a5c] text-[#60a5fa]" : "bg-[#252b3b] text-[#555f72]"
        }`}
      >
        {count}
      </span>
    </button>
  );
}

export default function FilterSidebar({ activeFilter, applications, onFilterChange }: Props) {
  const countOf = (status: Status) => applications.filter((a) => a.status === status).length;

  return (
    <aside className="w-55 shrink-0 flex flex-col gap-2 px-3 py-4">
      <p className="text-[11px] font-semibold tracking-widest text-[#555f72] uppercase px-1 mb-1">
        Filter
      </p>

      <FilterItem
        label="All Applications"
        count={applications.length}
        isActive={activeFilter === "All"}
        onClick={() => onFilterChange("All")}
      />

      {ALL_STATUSES.map((status) => (
        <FilterItem
          key={status}
          label={status}
          count={countOf(status)}
          isActive={activeFilter === status}
          dot={STATUS_CONFIG[status].dot}
          onClick={() => onFilterChange(status)}
        />
      ))}
    </aside>
  );
}
