import { FaQuoteLeft, FaStar } from "react-icons/fa";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  initials: string;
  avatarBg: string;
  quote: string;
  status: string;
  statusColor: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Aarav Sharma",
    role: "Computer Science, TU",
    company: "Now at Leapfrog Technology",
    initials: "AS",
    avatarBg: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    quote: "I was applying to 15 places at once and completely losing track. InterSathi made it obvious which companies I hadn't followed up with. Got my offer within 6 weeks.",
    status: "Offer",
    statusColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  },
  {
    name: "Priya Thapa",
    role: "BBA Final Year, KU",
    company: "Interning at Khalti",
    initials: "PT",
    avatarBg: "bg-amber-500/20 text-amber-400 border-amber-500/30",
    quote: "Before this I was using a messy spreadsheet. Being able to filter by status and see exactly where I stood with each company changed everything for my internship search.",
    status: "Interviewing",
    statusColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
  },
  {
    name: "Rohan KC",
    role: "IT Graduate, PU",
    company: "Now at CloudFactory",
    initials: "RK",
    avatarBg: "bg-violet-500/20 text-violet-400 border-violet-500/30",
    quote: "The notes feature alone is worth it. I'd write down what happened in each interview round so I could prep better for the next one. Super simple, exactly what I needed.",
    status: "Offer",
    statusColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <FaStar key={i} size={12} className="text-amber-400" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="px-6 pb-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-xs font-semibold tracking-widest text-blue-400 uppercase mb-2">Student stories</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            From campus to career
          </h2>
          <p className="mt-3 text-white/40 text-sm max-w-sm mx-auto">
            Students across Nepal using InterSathi to land roles they wanted.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="flex flex-col gap-4 p-6 rounded-2xl border border-white/8 bg-white/3 hover:bg-white/5 hover:border-white/12 transition-all duration-200"
            >
              <div className="flex items-start justify-between">
                <FaQuoteLeft size={18} className="text-white/15" />
                <Stars />
              </div>

              <p className="text-sm text-white/60 leading-relaxed flex-1">
                "{t.quote}"
              </p>

              <div className="flex items-center gap-3 pt-2 border-t border-white/6">
                <div className={`w-9 h-9 rounded-xl border flex items-center justify-center text-xs font-bold flex-shrink-0 ${t.avatarBg}`}>
                  {t.initials}
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-white truncate">{t.name}</p>
                  <p className="text-xs text-white/35 truncate">{t.role}</p>
                  <p className="text-xs text-white/25 truncate">{t.company}</p>
                </div>
                <span className={`ml-auto text-xs font-medium px-2 py-0.5 rounded-full border flex-shrink-0 ${t.statusColor}`}>
                  {t.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
