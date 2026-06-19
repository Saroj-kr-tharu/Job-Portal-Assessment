import { FiSearch, FiPlus } from "react-icons/fi";

interface Props {
  search: string;
  onSearchChange: (v: string) => void;
  onAddNew: () => void;
}

export default function TopBar({ search, onSearchChange, onAddNew }: Props) {
  return (
    <div className="flex items-center gap-3 px-4 py-3 border-b border-[#2e3548]">
      {/* Search */}
      <div className="relative flex-1">
        <FiSearch
          size={15}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-[#555f72] pointer-events-none"
        />
        <input
          type="text"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search by company or role…"
          className="w-full pl-9 pr-4 py-2 rounded-[10px] border border-[#2e3548] bg-[#1e2330] text-[14px] text-[#e8ecf4] placeholder-[#555f72] focus:outline-none focus:border-[#3b82f6]/60 transition-colors"
        />
      </div>

      {/* Add button */}
      <button
        onClick={onAddNew}
        className="flex items-center gap-2 px-4 py-2 rounded-[10px] border border-[#2e3548] bg-[#1e2330] text-[14px] font-medium text-[#e8ecf4] hover:bg-[#252b3b] hover:border-[#3d4760] transition-all duration-150 whitespace-nowrap flex-shrink-0"
      >
        <FiPlus size={15} />
        Add Application
        <span className="text-[#555f72] ml-0.5">↗</span>
      </button>
    </div>
  );
}
