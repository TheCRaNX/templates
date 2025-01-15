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



// ============
// 5. Component
// ============
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const position: [number, number] = [48.98719360764861, 8.539675308124767];

const DynamicMap = () => {
    const c = useTranslations('ContactDetails');


    return (
    <MapContainer center={position} zoom={13} style={{ height: '500px', width: '100%' }} className={styles.ebDynamicMap}>
        <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
        <Popup>
            <b>Ehinger Bau</b>
            <p dangerouslySetInnerHTML={{__html: c.raw('address')}}></p>
        </Popup>
        </Marker>
    </MapContainer>
    );
};



// ===================
// 6. Export Component
// ===================
export default DynamicMap;