// ============================================================================= //
// SRC/APP/[LOCALE]/CONTACT/PAGE.TSX
// ============================================================================= //




// ====================
// 1. Require Libraries
// ====================
import {useTranslations} from 'next-intl';



// ====================
// 2. Import Components
// ====================
import Map from "@/app/components/map/map";



// =================
// 3. Import Layouts
// =================
import SubPagesLayout from "@/app/layouts/sub_pages/sub_pages_layout";



// =================
// 4. Import Styles
// =================
import "../globals.scss";
import styles from "./page.module.scss";
 


// ============
// 5. Component
// ============
const ContactPage = () => {
    const c = useTranslations('ContactDetails');
    const t = useTranslations('ContactPage');
    
    return (      
        <div className={styles.ebContact}>
            <SubPagesLayout
                headerContent={
                    <h1>
                        {t('title')}
                    </h1>
                }
                
                footerContent={
                    <div className={styles.ebMapWrapper}>
                        <Map />
                    </div>
                }
                >

                <div className={styles.ebContactBox}>
                    <div className={styles.ebTextWrapper}>
                        <p className={styles.ebCompany}>
                            Ehinger
                            <br></br>
                            Bau
                        </p>
                        <p dangerouslySetInnerHTML={{__html: c.raw('address')}} className={styles.ebAddress}></p>
                        <p className={styles.ebContactInformation}>
                            +49 0721 123456789
                            <br></br>
                            info@ehinger-bau.de
                        </p>
                        <a className={styles.ebMailRedirection}>
                            / {t('email_redirect')}
                        </a>
                    </div>
                </div>
            </SubPagesLayout>
        </div>
    );
};
  
 

// ===================
// 6. Export Component
// ===================
export default ContactPage;