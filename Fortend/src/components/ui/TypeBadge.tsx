import type { JobType } from "../../types";

interface Props { type: JobType; }

export default function TypeBadge({ type }: Props) {
  return (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-badge border border-[#2e3548] bg-[#252b3b] text-[#8892a4] text-[11px] font-medium whitespace-nowrap">
      {type}
    </span>
  );
}
