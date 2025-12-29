// components/Navbar.tsx
import React from "react";
import { useNav } from "../context/NavBarContext";
import { useNavigate, useLocation } from "react-router-dom";
import {
  ArchiveIcon,
  HomeIcon,
  Compass,
  HeartIcon,
  ArrowLeft,
} from "lucide-react";

export const Navbar: React.FC = () => {
  const { activeTab, setActiveTab, goBack } = useNav();
  const navigate = useNavigate();
  const location = useLocation();

  const mainTabs = [
    { id: "Archive", label: "Archive", icon: ArchiveIcon, path: "/archive" },
    { id: "Home", label: "Home", icon: HomeIcon, path: "/home" },
    { id: "Explore", label: "Explore", icon: Compass, path: "/explore" },
    {
      id: "Supporters",
      label: "Supporters",
      icon: HeartIcon,
      path: "/supporters",
    },
  ] as const;

  const isMainTab = mainTabs.some((tab) => tab.path === location.pathname);

  const handleTabClick = (tabId: string, path: string) => {
    setActiveTab(tabId as any);
    navigate(path);
  };

  const handleGoBack = () => {
    goBack();
    navigate(-1);
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#FAF6F2] border-b border-orange-200/50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-center h-14 gap-2">
          {/* Back button */}
          {!isMainTab && (
            <button
              onClick={handleGoBack}
              className="flex items-center justify-center w-9 h-9 rounded-md
                     text-orange-700 hover:text-orange-800
                     hover:bg-orange-100/60 transition"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
          )}

          {/* Tabs */}
          <div className="flex flex-1 items-center justify-center gap-1">
            {mainTabs.map((item) => {
              const isActive = item.id === activeTab;
              const Icon = item.icon;

              return (
                <button
                  key={item.id}
                  onClick={() => handleTabClick(item.id, item.path)}
                  aria-current={isActive ? "page" : undefined}
                  className={`
                group relative flex items-center gap-2 px-4 py-2 rounded-md
                text-sm font-medium transition
                ${
                  isActive
                    ? "text-orange-800 bg-orange-100/70"
                    : "text-slate-700 hover:text-orange-800 hover:bg-orange-100/40"
                }
              `}
                >
                  <Icon
                    className={`w-4 h-4 transition-colors ${
                      isActive
                        ? "text-orange-700"
                        : "text-slate-500 group-hover:text-orange-600"
                    }`}
                  />

                  <span>{item.label}</span>

                  {/* Active underline */}
                  {isActive && (
                    <span className="absolute left-3 right-3 -bottom-1.5 h-0.5 bg-orange-600 rounded-full" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};
