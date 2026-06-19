import { useState } from "react";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import TrackerPage from "./pages/TrackerPage";

type Page = "home" | "tracker";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");

  return (
    <div className="min-h-screen bg-[#1a1f2e] flex flex-col">
      <Navbar
        currentPage={currentPage}
        onNavigate={setCurrentPage}
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        {currentPage === "home" ? (
          <Homepage onGetStarted={() => setCurrentPage("tracker")} />
        ) : (
          <TrackerPage />
        )}
      </div>
    </div>
  );
}
