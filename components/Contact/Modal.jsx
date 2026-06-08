"use client";

import { useEffect, useRef } from "react";

export default function Modal({
    open,
    title,
    icon,
    children,
    actions,
    onClose,
}) {
    const dialogRef = useRef(null);

    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;
        if (open && !dialog.open) {
            dialog.showModal();
        } else if (!open && dialog.open) {
            dialog.close();
        }
    }, [open]);

    const handleCancel = (e) => {
        e.preventDefault();
        onClose?.();
    };

    return (
        <dialog
            ref={dialogRef}
            onCancel={handleCancel}
            onClose={onClose}
            className="m-auto w-[calc(100%-2rem)] max-w-md rounded-3xl border-0 bg-white p-0 shadow-2xl backdrop:bg-ink-900/60 backdrop:backdrop-blur-sm"
        >
            <div className="p-8 text-center sm:p-10">
                {icon ? (
                    <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-100 to-brand-200 text-brand-700">
                        {icon}
                    </div>
                ) : null}
                <h2 className="font-display text-2xl font-bold text-ink-900">
                    {title}
                </h2>
                <div className="mt-3 text-base leading-relaxed text-ink-500">
                    {children}
                </div>
                <div className="mt-8 flex flex-col-reverse justify-center gap-3 sm:flex-row">
                    {actions}
                </div>
            </div>
        </dialog>
    );
}
