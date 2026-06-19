import { FaPlusCircle, FaTasks, FaBell, FaTrophy } from "react-icons/fa";
import { ReactNode } from "react";

interface Step {
  icon: ReactNode;
  iconColor: string;
  iconBg: string;
  step: string;
  title: string;
  description: string;
}

const STEPS: Step[] = [
  {
    icon: <FaPlusCircle size={20} />,
    iconColor: "text-blue-400",
    iconBg: "bg-blue-500/15 border-blue-500/30",
    step: "01",
    title: "Add an application",
    description: "Log a role the moment you apply — company, title, type, and date. Takes under 30 seconds.",
  },
  {
    icon: <FaTasks size={20} />,
    iconColor: "text-amber-400",
    iconBg: "bg-amber-500/15 border-amber-500/30",
    step: "02",
    title: "Update as you progress",
    description: "Move it from Applied to Interviewing or Offer as things develop. Add notes after each round.",
  },
  {
    icon: <FaBell size={20} />,
    iconColor: "text-violet-400",
    iconBg: "bg-violet-500/15 border-violet-500/30",
    step: "03",
    title: "Stay on top of follow-ups",
    description: "See everything in one place. Never forget to follow up or miss a deadline again.",
  },
  {
    icon: <FaTrophy size={20} />,
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-500/15 border-emerald-500/30",
    step: "04",
    title: "Land the offer",
    description: "With a clear pipeline, you spend less time worrying and more time preparing. That's the edge.",
  },
];

export default function HowItWorks() {
  return (
    <section className="px-6 pb-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-widest text-amber-400 uppercase mb-2">How it works</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            From first click to offer letter
          </h2>
          <p className="mt-3 text-white/40 max-w-sm mx-auto text-sm">
            Four steps. No complexity. Just clarity over your job search.
          </p>
        </div>

        {/* Desktop: horizontal connector line */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-6 relative">
          {/* Connector line */}
          <div className="absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-blue-500/20 via-amber-500/20 to-emerald-500/20" />

          {STEPS.map((s) => (
            <div key={s.step} className="flex flex-col items-center text-center gap-4 relative">
              <div className={`w-16 h-16 rounded-2xl border flex items-center justify-center ${s.iconBg} ${s.iconColor} z-10 bg-[#0f1629]`}>
                {s.icon}
              </div>
              <div>
                <p className="text-xs font-mono text-white/20 mb-1">{s.step}</p>
                <h3 className="text-sm font-semibold text-white mb-1.5">{s.title}</h3>
                <p className="text-xs text-white/40 leading-relaxed">{s.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: vertical stack */}
        <div className="lg:hidden flex flex-col gap-6 relative">
          <div className="absolute left-6 top-8 bottom-8 w-px bg-gradient-to-b from-blue-500/20 via-amber-500/20 to-emerald-500/20" />
          {STEPS.map((s) => (
            <div key={s.step} className="flex items-start gap-5 pl-2">
              <div className={`w-12 h-12 rounded-xl border flex items-center justify-center flex-shrink-0 ${s.iconBg} ${s.iconColor} z-10`}>
                {s.icon}
              </div>
              <div className="pt-1">
                <p className="text-xs font-mono text-white/20 mb-0.5">{s.step}</p>
                <h3 className="text-sm font-semibold text-white mb-1">{s.title}</h3>
                <p className="text-xs text-white/40 leading-relaxed">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
