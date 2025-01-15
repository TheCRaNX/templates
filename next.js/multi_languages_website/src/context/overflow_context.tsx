// =================================================== //
// SRC/CONTEXT/OVERFLOW_CONTEXT.TSX
// =================================================== //


"use client";


// ===================
// 1. Import Libraries
// ===================
import React, { createContext, useContext, useState, ReactNode } from 'react';



// ===============
// 2. Define Types
// ===============
interface OverflowContextType {
  ebIsOverflowToggled: boolean;
  setebIsOverflowToggled: React.Dispatch<React.SetStateAction<boolean>>;
}



// ===================
// 3. Define Variables
// ===================
const OverflowContext = createContext<OverflowContextType | undefined>(undefined);



// ===================
// 4. Export Component
// ===================
export const OverflowProvider = ({ children }: { children: ReactNode }) => {
  const [ebIsOverflowToggled, setebIsOverflowToggled] = useState(false);

  return (
    <OverflowContext.Provider value={{ ebIsOverflowToggled, setebIsOverflowToggled }}>
      {children}
    </OverflowContext.Provider>
  );
};

export const useToggleOverflow = (): OverflowContextType => {
  const context = useContext(OverflowContext);
  if (!context) {
    throw new Error('useToggleOverflow must be used within an OverflowProvider');
  }
  return context;
};