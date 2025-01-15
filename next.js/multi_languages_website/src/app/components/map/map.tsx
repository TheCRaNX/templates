// ============================================================================= //
// SRC/APP/COMPONENTS/MAP/MAP.TS
// ============================================================================= //


"use client";



// ====================
// 1. Require Libraries
// ====================
import dynamic from 'next/dynamic';



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
import styles from './map.module.scss';



// ============
// 5. Component
// ============
const DynamicMap = dynamic(() => import('./dynamic_map'), { ssr: false });

const Map = () => {
    return (
        <div className={styles.ebMap}>
            <DynamicMap />
        </div>
    );
};



// ===================
// 6. Export Component
// ===================
export default Map;