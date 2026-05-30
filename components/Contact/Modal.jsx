"use client";

import { useEffect, useRef } from "react";
import "./Modal.css";

export default function Modal({ open, title, children, actions, onClose }) {
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
            className="modal_contact"
            onCancel={handleCancel}
            onClose={onClose}
        >
            <h2 className="header_modal_contact">{title}</h2>
            <div className="content_modal_contact">{children}</div>
            <div className="actions_modal_contact">{actions}</div>
        </dialog>
    );
}
