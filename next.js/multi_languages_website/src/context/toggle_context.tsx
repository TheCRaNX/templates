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
  ebIsToggled: boolean;
  setEbIsToggled: (value: boolean) => void;
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
  const [ebIsToggled, setEbIsToggled] = useState(false);

  const toggle = () => setEbIsToggled((prev) => !prev);

  return (
    <ToggleContext.Provider value={{ ebIsToggled, setEbIsToggled, toggle }}>
      {children}
    </ToggleContext.Provider>
  );
};

export const useToggle = (): ToggleContextType => {
  const context = useContext(ToggleContext);
  if (!context) {
    throw new Error("useToggle must be used within a ToggleProvider");
  }
  return context;
};