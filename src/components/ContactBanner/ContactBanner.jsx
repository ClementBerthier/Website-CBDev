import { Link } from "react-scroll";
import Button from "../elements/Button/Button.jsx";
import "./contactBanner.css";

export default function ContactBanner() {
    return (
        <div className="contactBanner_container">
            <div className="contactBanner">
                <h2 className="contactBanner_title">
                    Discutons ensemble de votre projet.
                </h2>
                <p className="contactBanner_text">
                    N{"'"}hésitez pas à nous contacter
                </p>
                <Link to="contact">
                    <Button id="contact" text="Contact" />
                </Link>
            </div>
        </div>
    );
}
