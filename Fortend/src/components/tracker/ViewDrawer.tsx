import { FiBriefcase, FiCalendar, FiFileText, FiX } from "react-icons/fi";
import type { Application } from "../../types";
import CompanyAvatar from "../ui/CompanyAvatar";
import StatusPill from "../ui/StatusPill";
import TypeBadge from "../ui/TypeBadge";

interface Props {
  app: Application | null;
  onClose: () => void;
  onEdit: (app: Application) => void;
}

function Row({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3 py-3 border-b border-[#2e3548] last:border-0">
      <div className="w-8 h-8 rounded-lg bg-[#1e2330] border border-[#2e3548] flex items-center justify-center text-[#555f72] shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-[11px] text-[#555f72] mb-0.5 uppercase tracking-wide font-medium">{label}</p>
        <p className="text-[14px] text-[#e8ecf4] font-medium">{value}</p>
      </div>
    </div>
  );
}

function formatDate(dateStr: string) {
  try {
    return new Date(dateStr).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return dateStr;
  }
}

export default function ViewDrawer({ app, onClose, onEdit }: Props) {
  if (!app) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
        onClick={onClose}
      />
      {/* Drawer */}
      <aside className="fixed right-0 top-0 h-full w-full max-w-xs sm:max-w-md bg-[#1a1f2e] border-l border-[#2e3548] z-50 flex flex-col shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#2e3548]">
          <span className="text-[13px] font-semibold text-[#8892a4] uppercase tracking-wider">
            Application Detail
          </span>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-lg border border-[#2e3548] text-[#555f72] hover:bg-[#252b3b] hover:text-[#e8ecf4] transition-colors"
          >
            <FiX size={14} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto scrollbar-thin px-5 py-5">
          {/* Company header */}
          <div className="flex items-center gap-3 mb-6">
            <CompanyAvatar name={app.company_name} size="md" />
            <div>
              <p className="text-[16px] font-bold text-[#e8ecf4]">{app.job_title}</p>
              <p className="text-[13px] text-[#8892a4]">{app.company_name}</p>
            </div>
          </div>

          {/* Status + type */}
          <div className="flex items-center gap-2 mb-5">
            <StatusPill status={app.status} />
            <TypeBadge type={app.job_type} />
          </div>

          {/* Details rows */}
          <div className="rounded-xl border border-[#2e3548] bg-[#252b3b] px-3 divide-y divide-[#2e3548]">
            <Row icon={<FiBriefcase size={14} />} label="Company" value={app.company_name} />
            <Row icon={<FiCalendar size={14} />} label="Applied on" value={formatDate(app.applied_date)} />
            {app.notes && (
              <Row icon={<FiFileText size={14} />} label="Notes" value={app.notes} />
            )}
            <Row
              icon={<FiCalendar size={14} />}
              label="Last updated"
              value={formatDate(app.updated_at)}
            />
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 py-4 border-t border-[#2e3548]">
          <button
            onClick={() => { onEdit(app); onClose(); }}
            className="w-full py-2.5 rounded-[10px] bg-[#1a3a5c] border border-[#2563eb]/40 text-[#60a5fa] text-[14px] font-semibold hover:bg-[#1e4a75] transition-colors"
          >
            Edit Application
          </button>
        </div>
      </aside>
    </>
  );
}
