import type { Status } from "../types";

const variantMap: Record<Status, string> = {
  Applied: "badge-info",
  Interviewing: "badge-warning",
  Offer: "badge-success",
  Rejected: "badge-error",
};

export default function StatusBadge({ status }: { status: Status }) {
  return (
    <span className={`badge badge-sm font-medium ${variantMap[status]}`}>
      {status}
    </span>
  );
}
