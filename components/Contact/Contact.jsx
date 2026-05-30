"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Modal from "./Modal.jsx";
import "@/components/elements/Button/button.css";
import "./Contact.css";

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PHONE_REGEX =
    /^\+?[0-9]{1,4}?[-. ]?(\(?\d{1,3}?\)?[-. ]?)?\d{1,4}[-. ]?\d{1,4}[-. ]?\d{1,9}$/;

const EMPTY_FORM = {
    user_lastname: "",
    user_firstname: "",
    user_email: "",
    user_phone: "",
    object: "",
    message: "",
};

const SOCIAL_LINKS = [
    {
        href: "https://www.facebook.com/profile.php?id=61562316966767",
        icon: "/images/whitefacebook.svg",
        label: "facebook",
    },
    {
        href: "https://www.instagram.com/clementberthier_dev/",
        icon: "/images/whiteinsta.svg",
        label: "instagram",
    },
    {
        href: "https://www.linkedin.com/in/cl%C3%A9ment-berthier/",
        icon: "/images/whitelinkedin.svg",
        label: "linkedin",
    },
    {
        href: "https://github.com/ClementBerthier",
        icon: "/images/whitegithub.svg",
        label: "github",
    },
];

function validate(formData) {
    const errors = [];
    const emailFilled = formData.user_email !== "";
    const objectFilled = formData.object !== "";
    const messageFilled = formData.message !== "";
    const emailValid = emailFilled && EMAIL_REGEX.test(formData.user_email);
    const phoneValid =
        formData.user_phone === "" || PHONE_REGEX.test(formData.user_phone);

    const missingCount = [emailFilled, objectFilled, messageFilled].filter(
        (filled) => !filled
    ).length;

    if (missingCount >= 2) {
        return {
            title: "Champs manquants",
            content:
                "Plusieurs champs obligatoires sont manquants, veuillez les renseigner pour envoyer votre message",
        };
    }
    if (!emailFilled) {
        return {
            title: "Mail manquant",
            content: "Veuillez renseigner votre adresse mail",
        };
    }
    if (!objectFilled) {
        return {
            title: "Objet manquant",
            content: "Veuillez renseigner l'objet de votre message",
        };
    }
    if (!messageFilled) {
        return {
            title: "Message manquant",
            content: "Veuillez renseigner votre message",
        };
    }
    if (!emailValid && !phoneValid) {
        return {
            title: "Mail et numéro de téléphone invalides",
            content:
                "Veuillez vérifier votre adresse mail et votre numéro de téléphone",
        };
    }
    if (!emailValid) {
        return {
            title: "Mail invalide",
            content: "Veuillez vérifier votre adresse mail",
        };
    }
    if (!phoneValid) {
        return {
            title: "Numéro de téléphone invalide",
            content: "Veuillez vérifier votre numéro de téléphone",
        };
    }
    return null;
}

export default function Contact() {
    const formRef = useRef(null);
    const [formData, setFormData] = useState(EMPTY_FORM);
    const [infoModal, setInfoModal] = useState(null);
    const [consentOpen, setConsentOpen] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const error = validate(formData);
        if (error) {
            setInfoModal(error);
        } else {
            setConsentOpen(true);
        }
    };

    const handleConsentAccepted = async () => {
        setConsentOpen(false);
        try {
            await emailjs.sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                formRef.current,
                { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY }
            );
            setFormData(EMPTY_FORM);
            setInfoModal({
                title: "Message envoyé",
                content:
                    "Votre message a bien été envoyé, nous vous répondrons dans les plus brefs délais",
            });
        } catch {
            setInfoModal({
                title: "Erreur d'envoi",
                content:
                    "Une erreur est survenue lors de l'envoi. Veuillez réessayer dans quelques instants.",
            });
        }
    };

    return (
        <>
            <Modal
                open={infoModal !== null}
                title={infoModal?.title ?? ""}
                onClose={() => setInfoModal(null)}
                actions={
                    <button
                        type="button"
                        className="buttonModal"
                        onClick={() => setInfoModal(null)}
                    >
                        Retour
                    </button>
                }
            >
                <p className="textModal">{infoModal?.content}</p>
            </Modal>

            <Modal
                open={consentOpen}
                title="Confirmation"
                onClose={() => setConsentOpen(false)}
                actions={
                    <>
                        <button
                            type="button"
                            className="buttonModal"
                            onClick={handleConsentAccepted}
                        >
                            Valider
                        </button>
                        <button
                            type="button"
                            className="buttonModal"
                            onClick={() => setConsentOpen(false)}
                        >
                            Refuser
                        </button>
                    </>
                }
            >
                <p className="textModal">
                    En soumettant ce formulaire, vous acceptez que vos données
                    soient traitées conformément à notre politique de
                    confidentialité.
                </p>
            </Modal>

            <div className="form_global">
                <form
                    ref={formRef}
                    className="contact_container"
                    onSubmit={handleSubmit}
                    noValidate
                >
                    <h2 className="contact_title">Contactez-moi</h2>
                    <p className="contact_message">
                        N{"'"}hésitez pas à m{"'"}envoyer un message pour plus d
                        {"'"}informations
                    </p>
                    <div className="contact">
                        <div className="form_container">
                            <div className="contact_form" id="contact_form">
                                <div className="firstSection">
                                    <div className="field">
                                        <label htmlFor="lastname">Nom</label>
                                        <input
                                            placeholder="Votre nom"
                                            name="user_lastname"
                                            type="text"
                                            id="lastname"
                                            value={formData.user_lastname}
                                            onChange={handleChange}
                                            maxLength={50}
                                            autoComplete="family-name"
                                        />
                                    </div>
                                    <div className="field">
                                        <label htmlFor="firstname">
                                            Prénom
                                        </label>
                                        <input
                                            placeholder="Votre prénom"
                                            name="user_firstname"
                                            type="text"
                                            id="firstname"
                                            value={formData.user_firstname}
                                            onChange={handleChange}
                                            maxLength={50}
                                            autoComplete="given-name"
                                        />
                                    </div>
                                </div>
                                <div className="field">
                                    <label htmlFor="mail">
                                        Mail
                                        <span className="requiredField">*</span>
                                    </label>
                                    <input
                                        placeholder="Votre adresse mail"
                                        name="user_email"
                                        type="email"
                                        id="mail"
                                        value={formData.user_email}
                                        onChange={handleChange}
                                        autoComplete="email"
                                        required
                                    />
                                </div>
                                <div className="field">
                                    <label htmlFor="phone">Téléphone</label>
                                    <input
                                        placeholder="Votre numéro de téléphone"
                                        name="user_phone"
                                        type="tel"
                                        id="phone"
                                        value={formData.user_phone}
                                        onChange={handleChange}
                                        autoComplete="tel"
                                    />
                                </div>
                                <div className="textarea_container">
                                    <div className="field">
                                        <label htmlFor="textarea_object">
                                            Objet
                                            <span className="requiredField">
                                                *
                                            </span>
                                        </label>
                                        <textarea
                                            className="textarea_object"
                                            placeholder="Quel est le sujet de votre message ?"
                                            rows="2"
                                            name="object"
                                            value={formData.object}
                                            onChange={handleChange}
                                            id="textarea_object"
                                            required
                                        ></textarea>
                                    </div>

                                    <div className="field">
                                        <label htmlFor="textarea_message">
                                            Message
                                            <span className="requiredField">
                                                *
                                            </span>
                                        </label>
                                        <textarea
                                            placeholder="Votre message ici"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            id="textarea_message"
                                            required
                                        ></textarea>
                                    </div>
                                    <p className="requiredLegend">
                                        * champs obligatoire
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="contact-detail">
                            <div className="detail">
                                <h3 className="detail_title">Adresse:</h3>
                                <p className="detail_text">
                                    157 chemin de terre albine
                                    <br />
                                    81660 {`Pont-de-l'arn`}
                                </p>
                            </div>
                            <div className="detail">
                                <h3 className="detail_title">Email:</h3>
                                <p className="detail_text">
                                    <a
                                        className="mailto"
                                        href="mailto:clementberthierdeveloppeur@gmail.com"
                                    >
                                        clementberthierdeveloppeur@gmail.com
                                    </a>
                                </p>
                            </div>
                            <div className="detail">
                                <h3 className="detail_title">Téléphone:</h3>
                                <p className="detail_text">07.88.45.37.78</p>
                            </div>
                            <div className="detail">
                                <h3 className="detail_title">
                                    Réseaux sociaux:
                                </h3>
                                <div className="detail_logo">
                                    {SOCIAL_LINKS.map((social) => (
                                        <a
                                            key={social.label}
                                            className="detail_link"
                                            href={social.href}
                                            target="_blank"
                                            rel="noreferrer noopener"
                                            aria-label={social.label}
                                        >
                                            <img
                                                src={social.icon}
                                                alt={`logo ${social.label}`}
                                                loading="lazy"
                                            />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="button_container">
                        <button type="submit" className="button">
                            Envoyer
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}
