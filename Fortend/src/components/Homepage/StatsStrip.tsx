import { FaUserGraduate, FaBriefcase, FaCheckCircle } from "react-icons/fa";

const STATS = [
  { icon: <FaUserGraduate size={22} className="text-blue-400" />, value: "12,000+", label: "Students Tracking" },
  { icon: <FaBriefcase size={22} className="text-amber-400" />, value: "48,000+", label: "Applications Logged" },
  { icon: <FaCheckCircle size={22} className="text-emerald-400" />, value: "3,200+", label: "Offers Received" },
];

export default function StatsStrip() {
  return (
    <section className="px-6 pb-16">
      <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
        {STATS.map((s) => (
          <div
            key={s.label}
            className="flex flex-col items-center gap-2 py-6 px-4 rounded-2xl border border-white/8 bg-white/4 backdrop-blur-sm"
          >
            {s.icon}
            <span className="text-3xl font-bold text-white">{s.value}</span>
            <span className="text-sm text-white/40">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
