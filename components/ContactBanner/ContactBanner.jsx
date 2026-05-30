import Button from "../elements/Button/Button.jsx";
import "./ContactBanner.css";

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

                    <Button href="/#contact" text="Contact" />
                </div>
            </div>
            <div className="whitefade"></div>
        </div>
    );
}
