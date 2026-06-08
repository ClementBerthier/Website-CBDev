"use client";

import dynamic from "next/dynamic";

const Map = dynamic(() => import("./Map"), {
    ssr: false,
    loading: () => (
        <div
            aria-label="Chargement de la carte"
            className="h-[400px] w-full animate-pulse rounded-2xl bg-ink-100"
        />
    ),
});

export default function ContactMap() {
    return <Map />;
}
