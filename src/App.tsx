// App.tsx
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { NavProvider } from "./context/NavBarContext";
import { Navbar } from "./components/Navbar";
import { useNav } from "./context/NavBarContext";
import HomePage from "./pages/Home";
import ArchivePage from "./pages/ArchivePage";
import ExplorePage from "./pages/ExplorePage";
import SupportersPage from "./pages/SupportersPage";

// This component decides what to render based on URL
const AppContent: React.FC = () => {
  const location = useLocation();
  const { setActiveTab } = useNav();

  // Sync active tab with URL
  React.useEffect(() => {
    const path = location.pathname.substring(1) || "Home"; // Get path without leading slash
    const validTabs = ["Home", "Archive", "Explore", "Supporters"];

    if (validTabs.includes(path)) {
      setActiveTab(path as any);
    }
  }, [location, setActiveTab]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div>
        <div>
          <Navbar />
        </div>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/archive" element={<ArchivePage />} />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/supporters" element={<SupportersPage />} />
            {/* Add a catch-all route for 404 */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

// Main App Component
const App: React.FC = () => {
  return (
    <Router>
      <NavProvider>
        <AppContent />
      </NavProvider>
    </Router>
  );
};

export default App;
