import "./contact.css";
import ButtonElement from "../elements/Button/Button.jsx";
import { Button, FormField, Header, Modal } from "semantic-ui-react";
import facebook from "../../assets/images/whitefacebook.svg";
import instagram from "../../assets/images/whiteinsta.svg";
import linkedin from "../../assets/images/whitelinkedin.svg";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export default function Contact() {
    const serviceId = "o/j#YBqAnUk:BhFdPP1*13:";
    const templateId = "template_z2eknc5";
    const emailJSPublicKey = "kpw1Hx7jtYqg2aguq";

    const [modalOpen, setModalOpen] = useState(false);

    const [formData, setFormData] = useState({
        user_lastname: "",
        user_firstname: "",
        object: "",
        message: "",
    });

    const handleClick = () => {
        setModalOpen(true);
    };

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData({ ...formData, [name]: value });
    };

    const form = useRef();

    const sendEmail = async (e) => {
        e.preventDefault();
        try {
            /*  const result = await emailjs.sendForm(
                serviceId,
                templateId,
                form.current,
                {
                    publicKey: emailJSPublicKey,
                }
            ); */
            setFormData({
                user_lastname: "",
                user_firstname: "",
                object: "",
                message: "",
            });
            console.log("success" /* result */);
        } catch (error) {
            console.log("Failed", error);
        }
    };

    return (
        <>
            <Modal
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                size="small"
                className="modal_contact"
            >
                <Header
                    className="header_modal_contact"
                    content="Confirmation"
                />
                <Modal.Content className="content_modal_contact">
                    <p>blablablalbalblablalbalbalba</p>
                </Modal.Content>
                <Modal.Actions className="actions_modal_contact">
                    <Button onClick={() => setModalOpen(false)}>OK</Button>
                </Modal.Actions>
            </Modal>

            <form
                className="contact_container ui form"
                onSubmit={sendEmail}
                ref={form}
            >
                <h2 className="contact_title">Contactez-nous</h2>
                <p className="contact_message">
                    N{"'"}hésitez pas à nous envoyer un message pour plus d{"'"}
                    informations
                </p>
                <div className="contact">
                    <div className="form_container">
                        <div className="contact_form" id="contact_form">
                            <FormField>
                                <label>Nom</label>
                                <input
                                    placeholder="Nom"
                                    name="user_lastname"
                                    type="text"
                                    value={formData.user_lastname}
                                    onChange={handleChange}
                                />
                            </FormField>
                            <FormField>
                                <label>Prénom</label>
                                <input
                                    placeholder="Prénom"
                                    name="user_firstname"
                                    type="text"
                                    value={formData.user_firstname}
                                    onChange={handleChange}
                                />
                            </FormField>
                            <div className="textarea_container">
                                <div className="field">
                                    <label htmlFor="">Objet</label>
                                    <textarea
                                        className="textarea_object"
                                        placeholder="Quel est le sujet de votre message? "
                                        rows="2"
                                        name="object"
                                        required
                                        value={formData.object}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>

                                <div className="field">
                                    <label htmlFor="">Message</label>
                                    <textarea
                                        className="textarea_message"
                                        placeholder="Votre message ici"
                                        name="message"
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>
                            </div>{" "}
                        </div>
                    </div>
                    <div className="contact-detail">
                        <div className="detail">
                            <h3 className="detail_title">Adresse:</h3>
                            <p className="detail_text">
                                12bis rue du commandant Wauthier, résidence l
                                {"'"}
                                Infante, Bat C Apt 32{" "}
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
                            <h3 className="detail_title">Réseaux sociaux:</h3>
                            <div className="detail_logo">
                                <a className="detail_link" href="">
                                    <img src={facebook} alt="logo facebook" />
                                </a>
                                <a className="detail_link" href="">
                                    <img src={instagram} alt="logo instagram" />
                                </a>
                                <a className="detail_link" href="">
                                    <img src={linkedin} alt="logo instagram" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>{" "}
                <div className="button_container" onClick={handleClick}>
                    <ButtonElement
                        className="form_button"
                        id="contact"
                        text="Envoyer"
                        type="submit"
                    />
                </div>
            </form>
        </>
    );
}
