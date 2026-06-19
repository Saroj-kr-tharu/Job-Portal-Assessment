import { FiInbox } from "react-icons/fi";
import type { Application } from "../../types";
import ApplicationCard from "./ApplicationCard";

interface Props {
  applications: Application[];
  isLoading: boolean;
  isError: boolean;
  onView: (app: Application) => void;
  onEdit: (app: Application) => void;
  onDelete: (app: Application) => void;
  hasFilters: boolean;
}

function SkeletonCard() {
  return (
    <div className="flex items-center gap-3 px-4 py-3.5 rounded-card border border-[#2e3548] bg-[#252b3b] animate-pulse">
      <div className="w-11 h-11 rounded-[10px] bg-[#2e3548] shrink-0" />
      <div className="flex-1 space-y-2">
        <div className="h-3.5 w-48 bg-[#2e3548] rounded" />
        <div className="h-3 w-64 bg-[#252b3b] rounded" />
      </div>
      <div className="h-7 w-20 bg-[#2e3548] rounded-pill hidden sm:block" />
      <div className="flex gap-1.5">
        {[1, 2, 3].map((i) => <div key={i} className="w-8 h-8 bg-[#2e3548] rounded-lg" />)}
      </div>
    </div>
  );
}

export default function ApplicationList({
  applications,
  isLoading,
  isError,
  onView,
  onEdit,
  onDelete,
  hasFilters,
}: Props) {
  if (isLoading) {
    return (
      <div className="flex flex-col gap-2 p-4">
        {[1, 2, 3, 4].map((i) => <SkeletonCard key={i} />)}
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex flex-col items-center justify-center flex-1 gap-3 p-12 text-center">
        <div className="w-12 h-12 rounded-xl bg-[#3a1a1a] border border-[#dc2626]/30 flex items-center justify-center">
          <FiInbox size={20} className="text-[#f87171]" />
        </div>
        <p className="text-[14px] font-medium text-[#e8ecf4]">Could not load applications</p>
        <p className="text-[12px] text-[#555f72]"> backend API is not running.</p>
      </div>
    );
  }

  if (applications.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center flex-1 gap-3 p-12 text-center">
        <div className="w-12 h-12 rounded-xl bg-[#1e2330] border border-[#2e3548] flex items-center justify-center">
          <FiInbox size={20} className="text-[#555f72]" />
        </div>
        <p className="text-[14px] font-medium text-[#e8ecf4]">No applications found</p>
        <p className="text-[12px] text-[#555f72]">
          {hasFilters ? "Try adjusting your filters or search." : "Add your first application to get started."}
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2 p-4 overflow-y-auto scrollbar-thin">
      {applications.map((app) => (
        <ApplicationCard
          key={app.id}
          app={app}
          onView={onView}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
