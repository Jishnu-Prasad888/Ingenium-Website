import React, { useState, useEffect } from "react";
import { useNav } from "../context/NavBarContext";
import { useNavigate, useLocation } from "react-router-dom";
import {
  ArchiveIcon,
  HomeIcon,
  Compass,
  HeartIcon,
  Menu,
  X,
} from "lucide-react";

export const Navbar: React.FC = () => {
  const { activeTab, setActiveTab } = useNav();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const handleTabClick = (tabId: string, path: string) => {
    setActiveTab(tabId as any);
    navigate(path);
  };

  return (
    <>
      <nav
        className={`sticky top-0 z-50 bg-[#FAF6F2] border-b border-orange-200/50 transition-all duration-300 ${
          scrolled ? "shadow-md backdrop-blur-sm bg-[#FAF6F2]/90" : ""
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-14 md:h-16">
            {/* Mobile menu button */}
            <div className="flex md:hidden items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-md text-slate-700 hover:text-orange-800 hover:bg-orange-100/40 transition-all duration-300 active:scale-95"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5 transition-transform duration-300 rotate-90" />
                ) : (
                  <Menu className="w-5 h-5 transition-transform duration-300" />
                )}
              </button>
            </div>

            {/* Desktop Tabs */}
            <div className="hidden md:flex flex-1 items-center justify-center gap-1">
              {mainTabs.map((item) => {
                const isActive = item.id === activeTab;
                const Icon = item.icon;

                return (
                  <button
                    key={item.id}
                    onClick={() => handleTabClick(item.id, item.path)}
                    aria-current={isActive ? "page" : undefined}
                    className={`
                      group relative flex items-center gap-2 px-4 py-2.5 rounded-lg
                      text-sm font-medium transition-all duration-300
                      transform hover:scale-105 active:scale-95
                      ${
                        isActive
                          ? "text-orange-800 bg-orange-100/70 shadow-sm"
                          : "text-slate-700 hover:text-orange-800 hover:bg-orange-100/40"
                      }
                    `}
                  >
                    <Icon
                      className={`w-4 h-4 transition-all duration-300 ${
                        isActive
                          ? "text-orange-700 scale-110"
                          : "text-slate-500 group-hover:text-orange-600 group-hover:scale-110"
                      }`}
                    />

                    <span className="relative">
                      {item.label}
                      {/* Active underline animation */}
                      {isActive && (
                        <span className="absolute left-0 right-0 -bottom-1.5 h-0.5 bg-orange-600 rounded-full animate-pulse-subtle" />
                      )}
                    </span>

                    {/* Hover effect */}
                    <span className="absolute inset-0 rounded-lg bg-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
          md:hidden overflow-hidden transition-all duration-500 ease-in-out
          ${isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
        `}
        >
          <div className="px-4 py-3 bg-[#FAF6F2]/95 backdrop-blur-sm border-t border-orange-200/30">
            <div className="space-y-1">
              {mainTabs.map((item, index) => {
                const isActive = item.id === activeTab;
                const Icon = item.icon;

                return (
                  <button
                    key={item.id}
                    onClick={() => handleTabClick(item.id, item.path)}
                    className={`
                      w-full flex items-center gap-3 px-4 py-3 rounded-xl
                      text-base font-medium transition-all duration-300
                      transform active:scale-98
                      animate-slide-in
                      ${
                        isActive
                          ? "text-orange-800 bg-orange-100/70 shadow-inner"
                          : "text-slate-700 hover:text-orange-800 hover:bg-orange-100/40"
                      }
                    `}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <Icon
                      className={`w-5 h-5 transition-transform duration-300 ${
                        isActive
                          ? "text-orange-700 scale-110"
                          : "text-slate-500"
                      }`}
                    />
                    <span>{item.label}</span>
                    {isActive && (
                      <div className="ml-auto w-2 h-2 rounded-full bg-orange-600 animate-pulse" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu backdrop */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 md:hidden backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};
