import { FaBriefcase, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
      <aside className="ml-10">
        <FaBriefcase size={44} />
        <div className="">
          <p className="text-2xl font-bold tracking-wide">InterSathi</p>
          <p className="text-sm font-medium text-neutral-content/60 tracking-widest uppercase">Ltd.</p>
          <p className="text-sm text-neutral-content/50 mt-1">
            Providing opportunities since 2003
          </p>
        </div>
      </aside>
      <nav>
        <h6 className="footer-title">Social</h6>
        <div className="grid grid-flow-col gap-3">
          <a 
            className="p-2 rounded-lg transition-all duration-200 hover:bg-sky-500/20 hover:text-sky-400 hover:scale-110 cursor-pointer"
          >
            <FaTwitter size={20} />
          </a>
           <a 
            className="p-2 rounded-lg transition-all duration-200 hover:bg-red-500/20 hover:text-red-400 hover:scale-110 cursor-pointer"
          >
            <FaYoutube size={20} />
          </a>
           <a 
            className="p-2 rounded-lg transition-all duration-200 hover:bg-blue-500/20 hover:text-blue-400 hover:scale-110 cursor-pointer"
          >
            <FaFacebook size={20} />
          </a>
        </div>
      </nav>
    </footer>
  );
}