import { FaLaptopCode, FaChartBar, FaPaintBrush, FaDatabase, FaMobileAlt, FaCogs } from "react-icons/fa";
import { ReactNode } from "react";

interface JobCategory {
  icon: ReactNode;
  iconColor: string;
  iconBg: string;
  title: string;
  roles: string[];
  count: string;
}

const CATEGORIES: JobCategory[] = [
  {
    icon: <FaLaptopCode size={18} />,
    iconColor: "text-blue-400",
    iconBg: "bg-blue-500/15 border-blue-500/25",
    title: "Software Engineering",
    roles: ["Frontend Dev", "Backend Dev", "Full Stack", "DevOps"],
    count: "1.2k tracked",
  },
  {
    icon: <FaChartBar size={18} />,
    iconColor: "text-amber-400",
    iconBg: "bg-amber-500/15 border-amber-500/25",
    title: "Business & Marketing",
    roles: ["Digital Marketing", "Business Analyst", "Growth", "Sales"],
    count: "840 tracked",
  },
  {
    icon: <FaPaintBrush size={18} />,
    iconColor: "text-pink-400",
    iconBg: "bg-pink-500/15 border-pink-500/25",
    title: "Design & Creative",
    roles: ["UI/UX Design", "Graphic Design", "Motion", "Branding"],
    count: "620 tracked",
  },
  {
    icon: <FaDatabase size={18} />,
    iconColor: "text-violet-400",
    iconBg: "bg-violet-500/15 border-violet-500/25",
    title: "Data & Analytics",
    roles: ["Data Analyst", "ML Engineer", "BI Developer", "Research"],
    count: "510 tracked",
  },
  {
    icon: <FaMobileAlt size={18} />,
    iconColor: "text-sky-400",
    iconBg: "bg-sky-500/15 border-sky-500/25",
    title: "Mobile Development",
    roles: ["iOS Dev", "Android Dev", "React Native", "Flutter"],
    count: "390 tracked",
  },
  {
    icon: <FaCogs size={18} />,
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-500/15 border-emerald-500/25",
    title: "Engineering & Ops",
    roles: ["Cloud Infra", "QA Testing", "Site Reliability", "Systems"],
    count: "280 tracked",
  },
];

export default function JobTypeShowcase() {
  return (
    <section className="px-6 pb-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-xs font-semibold tracking-widest text-violet-400 uppercase mb-2">What people track</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Every field. Every role.
          </h2>
          <p className="mt-3 text-white/40 text-sm max-w-sm mx-auto">
            Whether you're chasing a tech internship or a marketing role, InterSathi keeps it organised.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.title}
              className="group p-5 rounded-2xl border border-white/8 bg-white/3 hover:bg-white/5 hover:border-white/14 transition-all duration-200 cursor-default"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-9 h-9 rounded-xl border flex items-center justify-center flex-shrink-0 ${cat.iconBg} ${cat.iconColor}`}>
                  {cat.icon}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">{cat.title}</h3>
                  <p className="text-xs text-white/25">{cat.count}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {cat.roles.map((role) => (
                  <span
                    key={role}
                    className="text-xs px-2.5 py-1 rounded-lg bg-white/5 border border-white/8 text-white/45 group-hover:text-white/55 transition-colors"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
