import { FaArrowRight, FaBriefcase } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

const PIPELINE_STAGES = [
  { label: "Applied", color: "text-blue-400", bg: "bg-blue-500/15", border: "border-blue-500/40" },
  { label: "Interviewing", color: "text-amber-400", bg: "bg-amber-500/15", border: "border-amber-500/40" },
  { label: "Offer", color: "text-emerald-400", bg: "bg-emerald-500/15", border: "border-emerald-500/40" },
];

interface HeroSectionProps {
  onGetStarted: () => void;
}

export default function HeroSection({ onGetStarted }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden px-6 pt-20 pb-24 text-center">
      {/* Ambient glow blobs */}
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-blue-600/10 blur-[100px]" />
      <div className="pointer-events-none absolute top-10 left-1/4 w-64 h-64 rounded-full bg-amber-500/5 blur-[80px]" />

      {/* Eyebrow badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium mb-6">
        <HiSparkles size={14} />
        Your job search, organised
      </div>

      {/* Headline */}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-3xl mx-auto">
        Track every application.{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-amber-400">
          Land the right role.
        </span>
      </h1>

      <p className="mt-5 text-lg text-white/50 max-w-xl mx-auto leading-relaxed">
        Stop losing track in spreadsheets. InterSathi keeps your internship and job pipeline clear, so you can focus on preparing — not admin.
      </p>

      {/* CTA buttons */}
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
        <button
          onClick={onGetStarted}
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-base transition-all duration-200 hover:scale-[1.03] shadow-lg shadow-blue-600/30"
        >
          Start Tracking <FaArrowRight size={14} />
        </button>
        <button className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 hover:border-white/25 text-white/70 hover:text-white font-medium text-base transition-all duration-200">
          <FaBriefcase size={14} />
          See Demo
        </button>
      </div>

      {/* Pipeline visual — signature element */}
      <div className="mt-14 flex items-center justify-center gap-0 max-w-sm mx-auto">
        {PIPELINE_STAGES.map((stage, i) => (
          <div key={stage.label} className="flex items-center">
            <div
              className={`flex flex-col items-center gap-1.5 px-5 py-2.5 rounded-xl border ${stage.bg} ${stage.border} transition-transform duration-300 hover:scale-105`}
            >
              <div className={`w-2 h-2 rounded-full ${stage.color.replace("text-", "bg-")} shadow-lg`} />
              <span className={`text-xs font-semibold ${stage.color}`}>{stage.label}</span>
            </div>
            {i < PIPELINE_STAGES.length - 1 && (
              <div className="w-8 h-px bg-gradient-to-r from-white/20 to-white/5 mx-1" />
            )}
          </div>
        ))}
      </div>
      <p className="mt-3 text-xs text-white/25 tracking-wide">Your hiring pipeline at a glance</p>
    </section>
  );
}
