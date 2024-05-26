import "./contact.css";
import Button from "../elements/Button/Button.jsx";
import { FormField, Form, FormTextArea } from "semantic-ui-react";
import facebook from "../../assets/images/whitefacebook.svg";
import instagram from "../../assets/images/whiteinsta.svg";
import linkedin from "../../assets/images/whitelinkedin.svg";

export default function Contact() {
    const mail = "clementberthierdeveloppeur@gmail.com";

    return (
        <form className="contact_container">
            <h2 className="contact_title">Contactez-nous</h2>
            <p className="contact_message">
                N{"'"}hésitez pas à nous envoyer un message pour plus d{"'"}
                informations
            </p>
            <div className="contact">
                <div className="form_container">
                    <Form
                        action={`https://formsubmit.co/${mail}`}
                        method="POST"
                        className="contact_form"
                    >
                        <FormField>
                            <label>Nom</label>
                            <input placeholder="Nom" />
                        </FormField>
                        <FormField>
                            <label>Prénom</label>
                            <input placeholder="Prénom" />
                        </FormField>
                        <div>
                            <FormTextArea
                                label="Objet"
                                placeholder="Quel est l'objet de votre message ?"
                                maxLength="150"
                            />
                            <FormTextArea
                                label="Message"
                                placeholder="Votre message ici."
                                maxLength="500"
                            />
                        </div>
                        <div className="button_container">
                            <Button
                                className="form_button"
                                id="contact"
                                text="Envoyer"
                                type="submit"
                            />
                        </div>
                    </Form>
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
            </div>
        </form>
    );
}
