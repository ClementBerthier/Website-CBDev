"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function HashScrollHandler() {
    const pathname = usePathname();

    useEffect(() => {
        const scrollToHash = () => {
            const hash = window.location.hash;
            if (!hash) return;
            const id = decodeURIComponent(hash.replace("#", ""));
            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    });
                }, 100);
            }
        };

        scrollToHash();
        window.addEventListener("hashchange", scrollToHash);
        return () => window.removeEventListener("hashchange", scrollToHash);
    }, [pathname]);

    return null;
}
