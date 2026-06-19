import {
  FaFilter,
  FaEdit,
  FaTrashAlt,
  FaSearch,
  FaStickyNote,
  FaMobileAlt,
} from "react-icons/fa";
import { ReactNode } from "react";

interface Feature {
  icon: ReactNode;
  iconBg: string;
  title: string;
  description: string;
}

const FEATURES: Feature[] = [
  {
    icon: <FaFilter size={18} />,
    iconBg: "bg-blue-500/15 text-blue-400",
    title: "Filter by Status",
    description: "Instantly view Applied, Interviewing, Offer, or Rejected applications — no scrolling through noise.",
  },
  {
    icon: <FaEdit size={18} />,
    iconBg: "bg-amber-500/15 text-amber-400",
    title: "Edit Any Time",
    description: "Update a role's status or notes the moment something changes — interviews, rejections, or offers.",
  },
  {
    icon: <FaTrashAlt size={18} />,
    iconBg: "bg-red-500/15 text-red-400",
    title: "Clean Up Easily",
    description: "Remove stale applications with a single click and a confirmation step, keeping your list fresh.",
  },
  {
    icon: <FaSearch size={18} />,
    iconBg: "bg-violet-500/15 text-violet-400",
    title: "Search Instantly",
    description: "Find any company or role in milliseconds — no waiting, no page reload.",
  },
  {
    icon: <FaStickyNote size={18} />,
    iconBg: "bg-emerald-500/15 text-emerald-400",
    title: "Add Notes",
    description: "Jot down interview feedback, referral names, or follow-up reminders right on the application.",
  },
  {
    icon: <FaMobileAlt size={18} />,
    iconBg: "bg-sky-500/15 text-sky-400",
    title: "Works on Mobile",
    description: "Fully responsive — track from your phone the moment you submit an application.",
  },
];

export default function FeaturesGrid() {
  return (
    <section className="px-6 pb-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-xs font-semibold tracking-widest text-blue-400 uppercase mb-2">Features</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Everything you need, nothing you don't
          </h2>
          <p className="mt-3 text-white/40 max-w-md mx-auto">
            Built specifically for students and fresh grads navigating their first job search.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="group p-5 rounded-2xl border border-white/8 bg-white/3 hover:bg-white/6 hover:border-white/15 transition-all duration-200"
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${f.iconBg}`}>
                {f.icon}
              </div>
              <h3 className="text-base font-semibold text-white mb-1.5">{f.title}</h3>
              <p className="text-sm text-white/40 leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
