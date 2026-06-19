import type { Application } from "../types";
import StatusBadge from "./StatusBadge";

interface Props {
  app: Application;
  onEdit: (app: Application) => void;
  onDelete: (app: Application) => void;
}

export default function ApplicationCard({ app, onEdit, onDelete }: Props) {
  const formattedDate = new Date(app.applied_date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const initials = app.company_name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return (
    <div className="card card-bordered bg-base-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="card-body p-4 flex-row items-center gap-4">
        <div className="avatar placeholder shrink-0">
          <div className="bg-neutral text-neutral-content rounded-lg w-12 h-12 text-sm font-bold">
            <span>{initials}</span>
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="font-semibold text-base truncate">{app.job_title}</h3>
            <span className="badge badge-ghost badge-sm">{app.job_type}</span>
          </div>
          <div className="flex items-center gap-3 mt-1 text-sm text-base-content/60 flex-wrap">
            <span>🏢 {app.company_name}</span>
            <span>📅 {formattedDate}</span>
            {app.notes && (
              <span className="truncate max-w-50">📝 {app.notes}</span>
            )}
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <StatusBadge status={app.status} />
          <div className="flex gap-1">
            <button
              className="btn btn-ghost btn-xs btn-square hover:cursor-pointer"
              title="Edit"
              onClick={() => onEdit(app)}
            >
              ✏️
            </button>
            <button
              className="btn hover:cursor-pointer btn-ghost btn-xs btn-square text-error hover:bg-error/10"
              title="Delete"
              onClick={() => onDelete(app)}
            >
              🗑️
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
