// ============================================================================= //
// SRC/APP/LAYOUTS/SUB_PAGES/SUB_PAGES.TSX
// ============================================================================= //




// ====================
// 1. Require Libraries
// ====================
import React from 'react';



// =================
// 2. Import Styles
// =================
import styles from "./sub_pages_layout.module.scss"



// =========
// 3. Layout
// =========
interface SubPagesProps {
  children: React.ReactNode;
  headerContent?: React.ReactNode;
  footerContent?: React.ReactNode;
}

const SubPagesLayout: React.FC<SubPagesProps> = ({ children, headerContent, footerContent }) => {
  return (
    <div className={styles.cstmSubPagesLayout}>
      <div className={styles.cstmSubPagesLayoutWrapper}>
        <header className={styles.cstmSubPagesHeader}>
          { headerContent || <h1>Default Header</h1> }
        </header>
        { children }
      </div>
      { footerContent }
    </div>
  );
};



// ===================
// 4. Export Layout
// ===================
export default SubPagesLayout;