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
import { useToggle } from "@/context/toggle_context";



// ================
// 2. Import Styles
// ================
import "../../[locale]/globals.scss"
import styles from "./canvas.module.scss";


// ===================
// 3. Export Component
// ===================
export const CanvasWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { ebIsToggled, toggle } = useToggle();
  const { ebIsOverflowToggled } = useToggleOverflow();

  return (
    <div className={`${styles.cstmCanvas} cstmNoHorizontalOverflow`}>

      <Navbar ebIsToggled={ebIsToggled} ebBasicToggle={toggle} /> 
      
      <div className={`${styles.cstmContent} ${ebIsToggled ? styles.cstmNavbarActive : ""} ${ebIsOverflowToggled ? "cstmNoOverflow" : ""}`}>
        <Header />
        
        {children}

        <Footer></Footer>
      </div>
    </div>
  );
};
