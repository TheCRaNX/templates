// ============================================================================= //
// SRC/APP/COMPONENTS/FOOTER/FOOTER.TS
// ============================================================================= //


"use client";



// ====================
// 1. Require Libraries
// ====================
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';



// ====================
// 2. Import Components
// ====================



// ===================
// 3. Import Functions
// ===================



// =================
// 4. Import Styles
// =================
import '../../[locale]/globals.scss';
import styles from './footer.module.scss';



// ============
// 5. Component
// ============
const Footer = () => {
    const c = useTranslations('ContactDetails');
    const t = useTranslations('Footer');

    return (
        <footer className={styles.ebFooter}>
            <div className={styles.ebFooterWrapper}>

                <Link href="/">
                <Image
                    src="/logo.png"
                    alt={t('logo_alt')}
                    width={180}
                    height={38}
                    priority
                />
                </Link>

                <p>
                    {c('address_stress')}
                    <br></br>
                    {c('address_zip')} {c('address_city')} - {c('address_country')}
                </p>

                <div className={styles.ebSloganWrapper}>
                    <h5>
                        {t('slogan')}
                    </h5>
                    <h2>
                        {t('sub_slogan')}
                    </h2>
                </div>

                <div className={styles.ebIconsWrapper}>
                    <FontAwesomeIcon icon={faPhone} />
                    <FontAwesomeIcon icon={faEnvelope} />
                    <FontAwesomeIcon icon={faFacebook} />
                    <FontAwesomeIcon icon={faInstagram} />
                </div>

                <div className={styles.ebNavigationWrapper}>
                    <Link href="/imprint">{t('imprint')}</Link>
                    <span>|</span>
                    <Link href="/privacy_policy">{t('privacy_policy')}</Link>
                </div>
                
            </div>
        </footer>
    );
};



// ===================
// 6. Export Component
// ===================
export default Footer;