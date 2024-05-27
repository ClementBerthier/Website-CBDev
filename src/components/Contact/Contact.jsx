import "./contact.css";
import Button from "../elements/Button/Button.jsx";
import { FormField, Form, FormTextArea } from "semantic-ui-react";
import facebook from "../../assets/images/whitefacebook.svg";
import instagram from "../../assets/images/whiteinsta.svg";
import linkedin from "../../assets/images/whitelinkedin.svg";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

export default function Contact() {
    const serviceId = "o/j#YBqAnUk:BhFdPP1*13:";
    const templateId = "template_z2eknc5";
    const emailJSPublicKey = "kpw1Hx7jtYqg2aguq";

    const form = useRef();

    const sendEmail = async (e) => {
        e.preventDefault();
        try {
            const result = await emailjs.sendForm(
                serviceId,
                templateId,
                form.current,
                {
                    publicKey: emailJSPublicKey,
                }
            );
            console.log("success", result);
        } catch (error) {
            console.log("Failed", error);
        }
    };

    return (
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
                            />
                        </FormField>
                        <FormField>
                            <label>Prénom</label>
                            <input
                                placeholder="Prénom"
                                name="user_firstname"
                                type="text"
                            />
                        </FormField>
                        <div>
                            <FormTextArea
                                label="Objet"
                                placeholder="Quel est l'objet de votre message ?"
                                maxLength="150"
                                name="object"
                            />
                            <FormTextArea
                                label="Message"
                                placeholder="Votre message ici."
                                maxLength="500"
                                name="message"
                            />
                        </div>{" "}
                    </div>
                </div>
                <div className="contact-detail">
                    <div className="detail">
                        <h3 className="detail_title">Adresse:</h3>
                        <p className="detail_text">
                            12bis rue du commandant Wauthier, résidence l{"'"}
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
            <div className="button_container">
                <Button
                    className="form_button"
                    id="contact"
                    text="Envoyer"
                    type="submit"
                    onSubmit={sendEmail}
                />
            </div>
        </form>
    );
}
