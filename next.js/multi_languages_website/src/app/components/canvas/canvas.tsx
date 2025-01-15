// =================================================== //
// SRC/APP/COMPONENTS/HEADER/HEADER.TSX
// =================================================== //

"use client";


// ===================
// 1. Import Libraries
// ===================
import React from "react";



// ====================
// 2. Import Components
// ====================
import Footer from "../footer/footer";
import Header from "../header/header";
import Navbar from '../navbar/navbar';
import { useToggleOverflow } from "@/context/overflow_context";
import { useNavbarToggle } from "@/context/navbar_context";



// ================
// 2. Import Styles
// ================
import "../../[locale]/globals.scss"
import styles from "./canvas.module.scss";


// ===================
// 3. Export Component
// ===================
export const CanvasWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { cstmIsNavbarToggled, toggle } = useNavbarToggle();
  const { ebIsOverflowToggled } = useToggleOverflow();

  return (
    <div className={`${styles.cstmCanvas} cstmNoHorizontalOverflow`}>

      <Navbar cstmIsNavbarToggled={cstmIsNavbarToggled} ebBasicToggle={toggle} /> 
      
      <div className={`${styles.cstmContent} ${cstmIsNavbarToggled ? styles.cstmNavbarActive : ""} ${ebIsOverflowToggled ? "cstmNoOverflow" : ""}`}>
        <Header />
        
        {children}

        <Footer></Footer>
      </div>
    </div>
  );
};
