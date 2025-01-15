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



// ===============
// 5. Define Props
// ===============
interface MapProps {
    coordinates: [number, number];
    title: string;
    address: string | { __html: string };
}



// ============
// 6. Component
// ============
const DynamicMap = dynamic(() => import('./dynamic_map'), { ssr: false });

const Map: React.FC<MapProps> = ({ coordinates, title, address }) => {
    return (
        <div className={styles.cstmMap}>
            <DynamicMap coordinates={coordinates} title={title} address={address} />
        </div>
    );
};



// ===================
// 7. Export Component
// ===================
export default Map;