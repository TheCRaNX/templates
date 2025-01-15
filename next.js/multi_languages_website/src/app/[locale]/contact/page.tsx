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
    const gi = useTranslations('GeneralInformation');
    
    return (      
        <div className={styles.cstmContact}>
            <SubPagesLayout
                headerContent={
                    <h1>
                        {t('title')}
                    </h1>
                }
                
                footerContent={
                    <div className={styles.cstmMapWrapper}>
                        <Map
                            coordinates={[35.704074, 139.557732]}
                            title={gi('app_name')}
                            address={{ __html: c.raw('address') }}
                        />
                    </div>
                }
                >

                <div className={styles.cstmContactBox}>
                    <div className={styles.cstmTextWrapper}>
                        <p dangerouslySetInnerHTML={{__html: c.raw('name')}} className={styles.cstmCompany}></p>
                        <p dangerouslySetInnerHTML={{__html: c.raw('address')}} className={styles.ebAddress}></p>
                        <p className={styles.ebContactInformation}>
                            {c('telephone')}
                            <br></br>
                            {c('email')}
                        </p>
                        <a className={styles.cstmMailRedirection}>
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