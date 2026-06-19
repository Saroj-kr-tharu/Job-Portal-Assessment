const COMPANIES = [
  "Leapfrog Technology",
  "Khalti",
  "CloudFactory",
  "Fusemachines",
  "Cotiviti",
  "Verisk Nepal",
  "F1Soft",
  "Deerwalk",
];

export default function TrustBar() {
  return (
    <section className="px-6 pb-16">
      <div className="max-w-4xl mx-auto">
        <p className="text-center text-xs text-white/25 tracking-widest uppercase mb-6">
          Students have tracked applications to
        </p>
        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 bg-linear-to-r from-[#0f1629] to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 bg-linear-to-l from-[#0f1629] to-transparent z-10" />

          <div className="flex flex-wrap justify-center gap-3">
            {COMPANIES.map((name) => (
              <div
                key={name}
                className="px-4 py-2 rounded-xl border border-white/8 bg-white/3 text-white/30 text-xs font-medium hover:text-white/50 hover:border-white/15 transition-all duration-200 whitespace-nowrap"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
