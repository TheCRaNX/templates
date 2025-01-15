// ============================================================================= //
// SRC/APP/COMPONENTS/MAP/MAP.TS
// ============================================================================= //


"use client";



// ====================
// 1. Require Libraries
// ====================
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import React from 'react';
import {useTranslations} from 'next-intl';



// ====================
// 2. Import Components
// ====================



// ===================
// 3. Import Functions
// ===================



// =================
// 4. Import Styles
// =================
import 'leaflet/dist/leaflet.css';
import '../../[locale]/globals.scss';
import styles from './map.module.scss';



// ===============
// 5. Define Props
// ===============
interface DynamicMapProps {
    coordinates: [number, number];
    title: string;
    address: string | { __html: string };
}



// ============
// 6. Component
// ============
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const DynamicMap: React.FC<DynamicMapProps> = ({ coordinates, title, address }) => {
    return (
        <MapContainer center={coordinates} zoom={13} style={{ height: '500px', width: '100%' }} className={styles.cstmDynamicMap}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={coordinates}>
                <Popup>
                    <b>{title}</b>
                    {typeof address === 'string' ? (
                        <p>{address}</p>
                    ) : (
                        <p dangerouslySetInnerHTML={address}></p>
                    )}
                </Popup>
            </Marker>
        </MapContainer>
    );
};



// ===================
// 7. Export Component
// ===================
export default DynamicMap;