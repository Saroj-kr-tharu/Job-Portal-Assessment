import { useState } from "react";
import { FaBriefcase, FaUserCircle } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";

interface Props {
  currentPage: "home" | "tracker";
  onNavigate: (page: "home" | "tracker") => void;
}

export default function Navbar({ currentPage, onNavigate }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="h-16 flex items-center px-5 border-b border-[#2e3548] bg-[#1a1f2e] z-30 relative shrink-0">
      {/* Logo */}
      <button
        onClick={() => onNavigate("home")}
        className="flex items-center gap-2.5 mr-8 group hover:cursor-pointer"
      >
        <div className="w-8 h-8 rounded-lg bg-[#1a3a5c] border border-[#2563eb]/40 flex items-center justify-center">
          <FaBriefcase size={14} className="text-[#60a5fa]" />
        </div>
        <span className="text-[16px] font-bold text-[#e8ecf4] tracking-tight">
          Intern<span className="text-[#60a5fa]">Sathi</span>
        </span>
      </button>

      {/* Desktop nav links */}
      <div className="hidden sm:flex items-center gap-1 flex-1">
        <button
          onClick={() => onNavigate("home")}
          className={`px-3 py-1.5 rounded-lg text-[14px] font-medium hover:cursor-pointer transition-colors ${
            currentPage === "home"
              ? "bg-[#252b3b] text-[#e8ecf4]"
              : "text-[#8892a4] hover:text-[#e8ecf4] hover:bg-[#252b3b]"
          }`}
        >
          Home
        </button>
        <button
          onClick={() => onNavigate("tracker")}
          className={`px-3 py-1.5 hover:cursor-pointer rounded-lg text-[14px] font-medium transition-colors ${
            currentPage === "tracker"
              ? "bg-[#252b3b] text-[#e8ecf4]"
              : "text-[#8892a4] hover:text-[#e8ecf4] hover:bg-[#252b3b]"
          }`}
        >
          My Applications
        </button>
      </div>

      {/* Right side */}
      <div className="ml-auto flex items-center gap-2">
        <button
          onClick={() => onNavigate("tracker")}
          className="hidden sm:flex hover:cursor-pointer items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#1a3a5c] border border-[#2563eb]/40 text-[#60a5fa] text-[13px] font-semibold hover:bg-[#1e4a75] transition-colors"
        >
          Open Tracker ↗
        </button>
        <FaUserCircle size={30} className="text-[#555f72] hover:text-[#8892a4] cursor-pointer transition-colors" />

        {/* Mobile menu toggle */}
        <button
          className="sm:hidden w-8 h-8 hover:cursor-pointer  flex items-center justify-center rounded-lg border border-[#2e3548] text-[#555f72]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX size={16} /> : <FiMenu size={16} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#1a1f2e] border-b border-[#2e3548] px-4 py-3 flex flex-col gap-2 sm:hidden z-50">
          <button
            onClick={() => { onNavigate("home"); setMenuOpen(false); }}
            className={`px-3 py-2 hover:cursor-pointer rounded-lg text-[14px] font-medium text-left ${
              currentPage === "home" ? "bg-[#252b3b] text-[#e8ecf4]" : "text-[#8892a4]"
            }`}
          >
            Home
          </button>
          <button
            onClick={() => { onNavigate("tracker"); setMenuOpen(false); }}
            className={`px-3 hover:cursor-pointer py-2 rounded-lg text-[14px] font-medium text-left ${
              currentPage === "tracker" ? "bg-[#252b3b] text-[#e8ecf4]" : "text-[#8892a4]"
            }`}
          >
            My Applications
          </button>
        </div>
      )}
    </nav>
  );
}
