import { FiCalendar, FiEdit2, FiEye, FiFileText, FiMapPin, FiTrash2 } from "react-icons/fi";
import type { Application } from "../../types";
import CompanyAvatar from "../ui/CompanyAvatar";
import IconButton from "../ui/IconButton";
import StatusPill from "../ui/StatusPill";
import TypeBadge from "../ui/TypeBadge";

interface Props {
  app: Application;
  onView: (app: Application) => void;
  onEdit: (app: Application) => void;
  onDelete: (app: Application) => void;
}

function formatDate(dateStr: string) {
  try {
    return new Date(dateStr).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return dateStr;
  }
}

function truncate(str: string, n: number) {
  return str.length > n ? str.slice(0, n) + "…" : str;
}

export default function ApplicationCard({ app, onView, onEdit, onDelete }: Props) {
  return (
    <div onClick={() => onView(app)} className="flex items-center gap-3 px-4 py-3.5 rounded-card border border-[#2e3548] bg-[#252b3b] hover:bg-[#2a3145] hover:border-[#3d4760] hover:cursor-pointer hover:scale-101 transition-all duration-150 group">
      {/* Avatar */}
      <CompanyAvatar name={app.company_name} />

      {/* Main info */}
      <div className="flex-1 min-w-0">
        {/* Row 1: title + type */}
        <div className="flex items-center gap-2 mb-1.5 flex-wrap">
          <span className="text-[15px] font-semibold text-[#e8ecf4] truncate max-w-45 sm:max-w-65">
            {app.job_title}
          </span>
          <TypeBadge type={app.job_type} />
        </div>

        {/* Row 2: company + date + notes */}
        <div className="flex items-center gap-3 flex-wrap">
          <span className="flex items-center gap-1 text-[12px] text-[#8892a4]">
            <FiMapPin size={11} className="text-[#555f72]" />
            {app.company_name}
          </span>
          <span className="flex items-center gap-1 text-[12px] text-[#8892a4]">
            <FiCalendar size={11} className="text-[#555f72]" />
            {formatDate(app.applied_date)}
          </span>
          {app.notes && (
            <span className="flex items-center gap-1 text-[12px] text-[#8892a4] max-w-35 truncate">
              <FiFileText size={11} className="text-[#555f72]" />
              {truncate(app.notes, 20)}
            </span>
          )}
        </div>
      </div>

      {/* Status pill */}
      <div className="shrink-0 hidden sm:block">
        <StatusPill status={app.status} />
      </div>

      {/* Action buttons */}
      <div className="flex items-center gap-1.5 shrink-0">
        <div className="sm:hidden mr-1">
          <StatusPill status={app.status} size="sm" />
        </div>
        <IconButton  icon={<FiEye size={14} />} label="View" onClick={() => onView(app)} />
        <IconButton icon={<FiEdit2 size={14} />} label="Edit" onClick={() => onEdit(app)} />
        <IconButton
          icon={<FiTrash2 size={14} />}
          label="Delete"
          onClick={() => onDelete(app)}
          variant="danger"
        />
      </div>
    </div>
  );
}
