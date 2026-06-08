"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

const POSITION = [43.4878, 2.3833];

const BRAND_ICON = L.divIcon({
    className: "cb-marker",
    html: `
        <div style="
            width: 28px;
            height: 28px;
            border-radius: 50% 50% 50% 0;
            background: linear-gradient(135deg, #98d2e6 0%, #1e90ff 100%);
            transform: rotate(-45deg);
            border: 3px solid white;
            box-shadow: 0 4px 12px rgba(30, 144, 255, 0.4);
        "></div>
    `,
    iconSize: [28, 28],
    iconAnchor: [14, 28],
    popupAnchor: [0, -28],
});

export default function Map() {
    return (
        <MapContainer
            center={POSITION}
            zoom={13}
            scrollWheelZoom={false}
            className="z-0 h-[400px] w-full rounded-2xl"
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={POSITION} icon={BRAND_ICON}>
                <Popup>
                    <strong>Clément Berthier Développeur</strong>
                    <br />
                    Pont-de-l&apos;Arn, Tarn (81660)
                    <br />
                    <em>Sur rendez-vous</em>
                </Popup>
            </Marker>
        </MapContainer>
    );
}
