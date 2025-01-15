// ============================================================================= //
// SRC/HOOKS/BASIC_TOGGLE.TS
// ============================================================================= //




// ====================
// 1. Require Libraries
// ====================
import { useState } from 'react';



// ============
// 2. Component
// ============
export const useBasicToggle = (initialValue: boolean = false) => {
  const [cstmIsNavbarToggled, ebSetIsToggled] = useState(initialValue);

  const ebBasicToggle = () => {
    ebSetIsToggled((prev) => !prev);
  };

  return [cstmIsNavbarToggled, ebBasicToggle];
};
