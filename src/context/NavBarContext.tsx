// context/NavContext.tsx
import React, { createContext, useContext, useState } from "react";

type Screen = "Home" | "Archive" | "Explore" | "Supporters";

type NavContextType = {
  activeTab: Screen;
  setActiveTab: (tab: Screen) => void;
  currentScreen: Screen;
  goBack: () => void;
  screenHistory: Screen[];
};

const NavContext = createContext<NavContextType | undefined>(undefined);

export const NavProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [activeTab, setActiveTab] = useState<Screen>("Home");
  const [screenHistory, setScreenHistory] = useState<Screen[]>(["Home"]);

  const goBack = () => {
    if (screenHistory.length > 1) {
      const newHistory = [...screenHistory];
      newHistory.pop(); // Remove current screen
      const previousScreen = newHistory[newHistory.length - 1];
      setScreenHistory(newHistory);
      setActiveTab(previousScreen);
    }
  };

  return (
    <NavContext.Provider
      value={{
        activeTab,
        setActiveTab,
        currentScreen: screenHistory[screenHistory.length - 1],
        goBack,
        screenHistory,
      }}
    >
      {children}
    </NavContext.Provider>
  );
};

export const useNav = () => {
  const context = useContext(NavContext);
  if (!context) throw new Error("useNav must be used within NavProvider");
  return context;
};
