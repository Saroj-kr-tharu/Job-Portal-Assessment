import { FaArrowRight } from "react-icons/fa";

interface CTABannerProps {
  onGetStarted: () => void;
}

export default function CTABanner({ onGetStarted }: CTABannerProps) {
  return (
    <section className="px-6 pb-20">
      <div className="max-w-3xl mx-auto relative overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-600/20 via-blue-500/10 to-amber-500/10 p-10 sm:p-14 text-center">
        {/* Glow */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="w-72 h-32 bg-blue-500/20 blur-[80px] rounded-full" />
        </div>

        <p className="text-xs font-semibold tracking-widest text-amber-400 uppercase mb-3">
          Ready to start?
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
          Your next offer starts with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-amber-400">
            one application.
          </span>
        </h2>
        <p className="text-white/40 mb-8 max-w-sm mx-auto">
          Join thousands of students already using InterSathi to stay on top of their job search.
        </p>
        <button
          onClick={onGetStarted}
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-base transition-all duration-200 hover:scale-[1.03] shadow-xl shadow-blue-600/30"
        >
          Track Your First Application <FaArrowRight size={14} />
        </button>
      </div>
    </section>
  );
}
