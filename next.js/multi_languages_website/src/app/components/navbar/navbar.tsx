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
  ebIsToggled: boolean;
  ebBasicToggle: () => void;
}
  
const Navbar: React.FC<NavbarProps> = ({ ebIsToggled, ebBasicToggle }) => {
  const t = useTranslations('Navbar');

  const handleClick = () => {
    ebBasicToggle();
  };

  return (
    <nav className={`${styles.ebNavbar} ${ebIsToggled ? styles.ebNavbarActive : ''}`}>
      <div className={styles.ebNavbarWrapper}>
          <Link href="/"  onClick={handleClick}>
          <Image
              className={styles.ebLogo}
              src="/logo.png"
              alt={t('logo_alt')}
              width={180}
              height={38}
              priority
          />
          </Link>
  
          <ul className={`${styles.ebNavbarElement, styles.ebList} ${ebIsToggled ? styles.ebNavbarElementActive : styles.ebNavbarElementInActive}`}>
              <li>
                  <NavigationLink href="/about"  onClick={handleClick}>{t('about')}</NavigationLink>
              </li>
              <li>
                  <NavigationLink href="/projects"  onClick={handleClick}>{t('projects')}</NavigationLink>
              </li>
              <li>
                  <NavigationLink href="/contact"  onClick={handleClick}>{t('contact')}</NavigationLink>
              </li>
          </ul>
  
          <div className={`${styles.ebNavbarElement} ${ebIsToggled ? styles.ebNavbarElementActive : styles.ebNavbarElementInActive}`}>
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