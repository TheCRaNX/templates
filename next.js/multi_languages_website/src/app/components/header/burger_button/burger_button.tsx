// ============================================================================= //
// SRC/APP/COMPONENTS/HEADER/BURGER_BUTTON/BURGER_BUTTON.TS
// ============================================================================= //


"use client";


// ===================
// 1. Import Libraries
// ===================
import React, { useState } from 'react';


// =================
// 2. Import Context
// =================



// =================
// 3. Import Styles
// =================
import '../../../[locale]/globals.scss';
import styles from './burger_button.module.scss';



// ============
// 4. Component
// ============
interface HeaderBurgerButtonProps {
  ebIsToggled: boolean;
  ebBasicToggle: () => void;
}

const HeaderBurgerButton = ({ ebIsToggled, ebBasicToggle }: HeaderBurgerButtonProps) => {
  const [isAnimating, setIsAnimating] = useState<null | boolean>(null);

  const handleClick = () => {
    setIsAnimating((prevState) => (prevState === null ? true : !prevState));
    ebBasicToggle();
  };

  return (
    <div
      className={`${styles.ebBurger} ${
        isAnimating === null
          ? ""
          : ebIsToggled
          ? styles.ebBurgerActive
          : styles.ebBurgerClose
    }`}
    >
      <div className={styles.ebBurgerWrapper} onClick={handleClick}>
        <span className={styles.ebBurgerLine}></span>
        <span className={styles.ebBurgerLine}></span>
        <span className={styles.ebBurgerLine}></span>
      </div>
    </div>
  );
};



// ===================
// 5. Export Component
// ===================
export default HeaderBurgerButton;