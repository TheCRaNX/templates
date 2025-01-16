// =================================================== //
// SRC/CONTEXT/OVERFLOW_CONTEXT.TSX
// =================================================== //


"use client";


// ===================
// 1. Import Libraries
// ===================
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';



// ===============
// 2. Define Types
// ===============
interface OverflowContextType {
  ebIsOverflowToggled: boolean;
  setEbIsOverflowToggled: React.Dispatch<React.SetStateAction<boolean>>;
}



// ===================
// 3. Define Variables
// ===================
const OverflowContext = createContext<OverflowContextType | undefined>(undefined);



// ====================
// 4. Export Components
// ====================
export const OverflowProvider = ({ children }: { children: ReactNode }) => {
  const [ebIsOverflowToggled, setEbIsOverflowToggled] = useState(false);

  // Add or remove the 'ebNoOverflow' class from the body when toggled
  useEffect(() => {
    if (ebIsOverflowToggled) {
      document.body.classList.add("ebNoOverflow");
    } else {
      document.body.classList.remove("ebNoOverflow");
    }
    // Cleanup on unmount
    return () => {
      document.body.classList.remove("ebNoOverflow");
    };
  }, [ebIsOverflowToggled]);

  return (
    <OverflowContext.Provider value={{ ebIsOverflowToggled, setEbIsOverflowToggled }}>
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