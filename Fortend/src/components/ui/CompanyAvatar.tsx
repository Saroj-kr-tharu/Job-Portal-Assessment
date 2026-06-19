interface Props {
  name: string;
  size?: "sm" | "md";
}

// Deterministic color from company name
const AVATAR_COLORS = [
  { bg: "bg-[#312e81]", text: "text-[#818cf8]" },
  { bg: "bg-[#1e3a5f]", text: "text-[#60a5fa]" },
  { bg: "bg-[#3b1f1f]", text: "text-[#f87171]" },
  { bg: "bg-[#1a3a2a]", text: "text-[#34d399]" },
  { bg: "bg-[#3a2e1a]", text: "text-[#fbbf24]" },
  { bg: "bg-[#2d1a3a]", text: "text-[#c084fc]" },
  { bg: "bg-[#1a2e3a]", text: "text-[#38bdf8]" },
  { bg: "bg-[#3a1a2d]", text: "text-[#f472b6]" },
];

function getColor(name: string) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
  return AVATAR_COLORS[Math.abs(hash) % AVATAR_COLORS.length];
}

function getInitials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export default function CompanyAvatar({ name, size = "md" }: Props) {
  const color = getColor(name);
  const dim = size === "sm" ? "w-9 h-9 text-xs" : "w-11 h-11 text-sm";
  return (
    <div
      className={`${dim} rounded-[10px] border border-white/10 flex items-center justify-center font-bold flex-shrink-0 ${color.bg} ${color.text}`}
    >
      {getInitials(name)}
    </div>
  );
}
