// ============================================================================= //
// SRC/APP/COMPONENTS/NAVBAR/NAVBAR.TS
// ============================================================================= //


"use client";



// ====================
// 1. Require Libraries
// ====================
import Image from "next/image";
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';



// ====================
// 2. Import Components
// ====================
import LocaleSwitcher from '../locale_switcher/locale_switcher';
import NavigationLink from '../navigation_link/navigation_link';



// ===================
// 3. Import Functions
// ===================



// =================
// 4. Import Styles
// =================
import '../../[locale]/globals.scss';
import styles from './navbar.module.scss';



// ============
// 5. Component
// ============
interface NavbarProps {
  cstmIsNavbarToggled: boolean;
  ebBasicToggle: () => void;
}
  
const Navbar: React.FC<NavbarProps> = ({ cstmIsNavbarToggled, ebBasicToggle }) => {
  const ial = useTranslations('ImageAltLabels');
  const t = useTranslations('Navbar');

  const handleClick = () => {
    ebBasicToggle();
  };

  return (
    <nav className={`${styles.cstmNavbar} ${cstmIsNavbarToggled ? styles.cstmNavbarActive : ''}`}>
      <div className={styles.cstmNavbarWrapper}>
          <Link href="/"  onClick={handleClick}>
          <Image
              className={styles.cstmLogo}
              src="/logos/logo.png"
              alt={ial('logo')}
              width={180}
              height={38}
              priority
          />
          </Link>
  
          <ul className={`${styles.cstmNavbarElement, styles.cstmList} ${cstmIsNavbarToggled ? styles.cstmNavbarElementActive : styles.cstmNavbarElementInActive}`}>
              <li>
                  <NavigationLink href="/about"  onClick={handleClick}>{t('about')}</NavigationLink>
              </li>
              <li>
                  <NavigationLink href="/contact"  onClick={handleClick}>{t('contact')}</NavigationLink>
              </li>
          </ul>
  
          <div className={`${styles.cstmNavbarElement} ${cstmIsNavbarToggled ? styles.cstmNavbarElementActive : styles.cstmNavbarElementInActive}`}>
              <LocaleSwitcher />
          </div>
      </div>
    </nav>
  );
};



// ===================
// 6. Export Component
// ===================
export default Navbar;