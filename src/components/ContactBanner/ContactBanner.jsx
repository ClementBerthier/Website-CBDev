import { Link } from "react-scroll";
import Button from "../elements/Button/Button.jsx";
import "./contactBanner.css";

export default function ContactBanner() {
    return (
        <div className="contactBanner_container">
            <div className="contactBanner">
                <div className="contactBanner_detail_container">
                    <h2 className="contactBanner_title">
                        Discutons ensemble de votre projet.
                    </h2>
                    <p className="contactBanner_text">
                        N{"'"}hésitez pas à me contacter
                    </p>
                    <Link
                        to="contact"
                        id="headerContact"
                        className="footer_navigation_link"
                        spy={true}
                        smooth={true}
                        offset={-250}
                        duration={500}
                    >
                        <Button id="contact" text="Contact" />
                    </Link>
                </div>
            </div>
            <div className="whitefade"></div>
        </div>
    );
}
