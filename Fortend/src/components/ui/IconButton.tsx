import { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  label: string;
  onClick: () => void;
  variant?: "default" | "danger";
}

export default function IconButton({ icon, label, onClick, variant = "default" }: Props) {
  const hover =
    variant === "danger"
      ? "hover:bg-[#3a1a1a] hover:border-[#dc2626] hover:text-[#f87171]"
      : "hover:bg-[#2e3548] hover:border-[#3d4760] hover:text-[#e8ecf4]";
  return (
    <button
      title={label}
      aria-label={label}
      onClick={onClick}
      className={`w-8 h-8 flex items-center justify-center rounded-[8px] border border-[#2e3548] text-[#555f72] transition-all duration-150 ${hover} flex-shrink-0`}
    >
      {icon}
    </button>
  );
}
