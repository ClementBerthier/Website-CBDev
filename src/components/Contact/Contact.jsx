import "semantic-ui-css/semantic.min.css";
import "./contact.css";

import ButtonElement from "../elements/Button/Button.jsx";
import { Button, FormField, Header, Modal } from "semantic-ui-react";
import facebook from "/images/whitefacebook.svg";
import instagram from "/images/whiteinsta.svg";
import linkedin from "/images/whitelinkedin.svg";
import github from "/images/whitegithub.svg";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export default function Contact() {
    const serviceId = "o/j#YBqAnUk:BhFdPP1*13:";
    const templateId = "template_z2eknc5";
    const emailJSPublicKey = "kpw1Hx7jtYqg2aguq";

    const [modalOpen, setModalOpen] = useState(false);
    const [readyToSend, setReadyToSend] = useState(true);
    useState(false);

    const [titleModal, setTitleModal] = useState("");
    const [contentModal, setContentModal] = useState("");

    const [formData, setFormData] = useState({
        user_lastname: "",
        user_firstname: "",
        user_email: "",
        user_phone: "",
        object: "",
        message: "",
    });

    const [stateMailFull, setStateMailFull] = useState(false);
    const [stateObjectFull, setStateObjectFull] = useState(false);
    const [stateMessageFull, setStateMessageFull] = useState(false);
    const [stateMailValid, setStateMailValid] = useState(false);
    const [statePhoneValid, setStatePhoneValid] = useState(false);

    const handleClick = () => {
        console.log("handleClick");

        if (
            (stateMailFull === false && stateObjectFull === false) ||
            (stateMailFull === false && stateMessageFull === false) ||
            (stateObjectFull === false && stateMessageFull === false)
        ) {
            setReadyToSend(false);
            setTitleModal("Champs manquants");
            setContentModal(
                "Plusieurs champs obligatoires sont manquants, veuillez les renseigner pour envoyer votre message"
            );
            setModalOpen(true);
        } else if (stateMailFull === false) {
            setReadyToSend(false);

            setTitleModal("Mail manquant");
            setContentModal("Veuillez renseigner votre adresse mail");
            setModalOpen(true);
        } else if (stateObjectFull === false) {
            setReadyToSend(false);

            setTitleModal("Objet manquant");
            setContentModal("Veuillez renseigner l'objet de votre message");
            setModalOpen(true);
        } else if (stateMessageFull === false) {
            setReadyToSend(false);

            setTitleModal("Message manquant");
            setContentModal("Veuillez renseigner votre message");
            setModalOpen(true);
        } else if (stateMailValid === false && statePhoneValid === false) {
            setReadyToSend(false);

            setTitleModal("Mail et numéro de téléphone invalides");
            setContentModal(
                "Veuillez vérifier votre adresse mail et votre numéro de téléphone"
            );
            setModalOpen(true);
        } else if (stateMailValid === false) {
            setReadyToSend(false);

            setTitleModal("Mail invalide");
            setContentModal("Veuillez vérifier votre adresse mail");
            setModalOpen(true);
        } else if (statePhoneValid === false) {
            setReadyToSend(false);

            setTitleModal("Numéro de téléphone invalide");
            setContentModal("Veuillez vérifier votre numéro de téléphone");
            setModalOpen(true);
        } else {
            setReadyToSend(true);
            setTitleModal("Message envoyé");
            setContentModal(
                "Votre message a bien été envoyé, nous vous répondrons dans les plus brefs délais"
            );
            setModalOpen(true);
        }
    };

    const handleSubmit = async (e) => {
        console.log("handleSubmit");
        e.preventDefault();
        console.log("readytosend", readyToSend);

        if (readyToSend) {
            try {
                const result = await emailjs.sendForm(
                    serviceId,
                    templateId,
                    form.current,
                    {
                        publicKey: emailJSPublicKey,
                    }
                );
                setFormData({
                    user_lastname: "",
                    user_firstname: "",
                    user_email: "",
                    user_phone: "",
                    object: "",
                    message: "",
                });
                console.log("success", result);
            } catch (error) {
                console.log("Failed", error);
            }
        } else {
            console.log("not ready to send");
        }
    };

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setFormData({ ...formData, [name]: value });

        const regexMail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const regexPhone =
            /^\+?[0-9]{1,4}?[-. ]?(\(?\d{1,3}?\)?[-. ]?)?\d{1,4}[-. ]?\d{1,4}[-. ]?\d{1,9}$/;

        if (formData.user_email === "") {
            setStateMailFull(false);
        } else {
            setStateMailFull(true);
        }

        if (formData.object === "") {
            setStateObjectFull(false);
        } else {
            setStateObjectFull(true);
        }

        if (formData.message === "") {
            setStateMessageFull(false);
        } else {
            setStateMessageFull(true);
        }

        if (
            formData.user_email !== "" &&
            !regexMail.test(formData.user_email)
        ) {
            setStateMailValid(false);
        } else {
            setStateMailValid(true);
        }

        if (
            formData.user_phone !== "" &&
            !regexPhone.test(formData.user_phone)
        ) {
            setStatePhoneValid(false);
        } else {
            setStatePhoneValid(true);
        }
    };

    const form = useRef();

    return (
        <>
            <Modal
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                size="small"
                className="modal_contact"
                closeOnDimmerClick={false}
            >
                <Header
                    className="header_modal_contact"
                    size="huge"
                    content={titleModal}
                />
                <Modal.Content className="content_modal_contact">
                    <p className="textModal">{contentModal}</p>
                </Modal.Content>
                <Modal.Actions className="actions_modal_contact">
                    <Button
                        className="buttonModal"
                        size="huge"
                        onClick={() => setModalOpen(false)}
                    >
                        Retour
                    </Button>
                </Modal.Actions>
            </Modal>

            <div className="form_global">
                <form
                    className="contact_container ui form"
                    onSubmit={handleSubmit}
                    ref={form}
                >
                    <h2 className="contact_title">Contactez-moi</h2>
                    <p className="contact_message">
                        N{"'"}hésitez pas à m{"'"}envoyer un message pour plus d
                        {"'"}
                        informations
                    </p>
                    <div className="contact">
                        <div className="form_container">
                            <div className="contact_form" id="contact_form">
                                <div className="firstSection">
                                    <FormField>
                                        <label htmlFor="lastname">Nom</label>
                                        <input
                                            placeholder="Votre nom"
                                            name="user_lastname"
                                            type="text"
                                            id="lastname"
                                            value={formData.user_lastname}
                                            onChange={handleChange}
                                            maxLength={50}
                                            autoComplete="given-name"
                                        />
                                    </FormField>
                                    <FormField>
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
                                            autoComplete="family-name"
                                        />
                                    </FormField>
                                </div>
                                <FormField>
                                    <label htmlFor="mail">
                                        Mail
                                        <span className="requiredField">*</span>
                                    </label>
                                    <input
                                        placeholder="Votre adresse mail"
                                        name="user_email"
                                        type="text"
                                        id="mail"
                                        value={formData.user_email}
                                        onChange={handleChange}
                                    />
                                </FormField>
                                <FormField>
                                    <label htmlFor="phone">Téléphone</label>
                                    <input
                                        placeholder="Votre numéro de téléphone"
                                        name="user_phone"
                                        type="text"
                                        id="phone"
                                        value={formData.user_phone}
                                        onChange={handleChange}
                                        autoComplete="tel"
                                    />
                                </FormField>
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
                                            placeholder="Quel est le sujet de votre message? "
                                            rows="2"
                                            name="object"
                                            value={formData.object}
                                            onChange={handleChange}
                                            id="textarea_object"
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
                                        ></textarea>
                                    </div>
                                    <p className="requiredLegend">
                                        * champs obligatoire
                                    </p>
                                </div>{" "}
                            </div>
                        </div>
                        <div className="contact-detail">
                            <div className="detail">
                                <h3 className="detail_title">Adresse:</h3>
                                <p className="detail_text">
                                    112 rue Charles Peguy
                                    <br />
                                    81200 AUSSILLON
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
                                    <a
                                        className="detail_link"
                                        href="https://www.facebook.com/profile.php?id=61562316966767"
                                        rel="noreferrer noopener"
                                        target="_blank"
                                        aria-label="facebook"
                                    >
                                        <img
                                            src={facebook}
                                            alt="logo facebook"
                                        />
                                    </a>
                                    <a
                                        className="detail_link"
                                        href="https://www.instagram.com/clementberthier_dev/"
                                        rel="noreferrer noopener"
                                        target="_blank"
                                        aria-label="facebook"
                                    >
                                        <img
                                            src={instagram}
                                            alt="logo instagram"
                                        />
                                    </a>
                                    <a
                                        className="detail_link"
                                        href="https://www.linkedin.com/in/cl%C3%A9ment-berthier/"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                        aria-label="linkedin"
                                    >
                                        <img
                                            src={linkedin}
                                            alt="logo linkedin"
                                        />
                                    </a>
                                    <a
                                        className="detail_link"
                                        href="https://github.com/ClementBerthier"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                        aria-label="github"
                                    >
                                        <img src={github} alt="logo github" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>{" "}
                    <div className="button_container" onClick={handleClick}>
                        <ButtonElement
                            id="contact"
                            text="Envoyer"
                            type="submit"
                        />
                    </div>
                </form>
            </div>
        </>
    );
}
