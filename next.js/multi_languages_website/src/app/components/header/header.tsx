// =================================================== //
// SRC/APP/COMPONENTS/HEADER/HEADER.TSX
// =================================================== //


"use client";


// ===================
// 1. Import Libraries
// ===================



// ====================
// 2. Import Components
// ====================
import { useNavbarToggle } from '@/context/navbar_context';
import HeaderBurgerButton from './burger_button/burger_button';



// ================
// 3. Import Styles
// ================
import '../../[locale]/globals.scss';
import styles from './header.module.scss';



// ============
// 4. Component
// ============
const Header = () => {
    const { cstmIsNavbarToggled, toggle } = useNavbarToggle();
    
    return (
      <header className={styles.cstmHeader}>
        <div className={styles.cstmButtonWrapper}>
          <HeaderBurgerButton cstmIsNavbarToggled={cstmIsNavbarToggled} ebBasicToggle={toggle} />
        </div>
      </header>
    );
  };



// ===================
// 5. Export Component
// ===================
export default Header;