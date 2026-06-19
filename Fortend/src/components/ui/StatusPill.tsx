import { STATUS_CONFIG } from "../../constants/design";
import type { Status } from "../../types";

interface Props {
  status: Status;
  size?: "sm" | "md";
}

export default function StatusPill({ status, size = "md" }: Props) {
  const cfg = STATUS_CONFIG[status];
  const padding = size === "sm" ? "px-2.5 py-0.5 text-[11px]" : "px-3.5 py-1.5 text-[13px]";
  return (
    <span
      className={`inline-flex items-center gap-1.5 font-semibold rounded-pill border ${cfg.bg} ${cfg.text} ${cfg.border} ${padding} whitespace-nowrap`}
    >
      {status}
    </span>
  );
}
