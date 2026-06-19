import type { Application, Status } from "../types";

const STATUSES: Status[] = ["Applied", "Interviewing", "Offer", "Rejected"];

const colorMap: Record<Status, string> = {
  Applied: "text-info",
  Interviewing: "text-warning",
  Offer: "text-success",
  Rejected: "text-error",
};

interface Props {
  applications: Application[];
}

export default function StatsRow({ applications }: Props) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-6">
      <div className="stat bg-base-100 rounded-xl border border-base-200 p-3 col-span-2 sm:col-span-1">
        <div className="stat-title text-xs">Total</div>
        <div className="stat-value text-2xl">{applications.length}</div>
      </div>
      {STATUSES.map((s) => (
        <div key={s} className="stat bg-base-100 rounded-xl border border-base-200 p-3">
          <div className="stat-title text-xs">{s}</div>
          <div className={`stat-value text-2xl ${colorMap[s]}`}>
            {applications.filter((a) => a.status === s).length}
          </div>
        </div>
      ))}
    </div>
  );
}
