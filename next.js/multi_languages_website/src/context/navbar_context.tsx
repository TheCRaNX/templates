// =================================================== //
// SRC/CONTEXT/TOGGLE_CONTEXT.TSX
// =================================================== //


"use client";


// ===================
// 1. Import Libraries
// ===================
import React, { createContext, useContext, useState } from "react";



// ===============
// 2. Define Types
// ===============
interface ToggleContextType {
  cstmIsNavbarToggled: boolean;
  setNavbarIsToggled: (value: boolean) => void;
  toggle: () => void;
}



// ===================
// 3. Define Variables
// ===================
const ToggleContext = createContext<ToggleContextType | undefined>(undefined);



// ===================
// 4. Export Component
// ===================
export const ToggleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cstmIsNavbarToggled, setNavbarIsToggled] = useState(false);

  const toggle = () => setNavbarIsToggled((prev) => !prev);

  return (
    <ToggleContext.Provider value={{ cstmIsNavbarToggled, setNavbarIsToggled, toggle }}>
      {children}
    </ToggleContext.Provider>
  );
};

export const useNavbarToggle = (): ToggleContextType => {
  const context = useContext(ToggleContext);
  if (!context) {
    throw new Error("useNavbarToggle must be used within a ToggleProvider");
  }
  return context;
};