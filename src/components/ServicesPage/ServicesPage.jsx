import { useLocation, useNavigate } from "react-router-dom";
import "./ServicesPage.css";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import { Select } from "semantic-ui-react";
import { Link } from "react-scroll";

export default function ServicesPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const { id } = location.state;
    const allServices = [
        { key: "web", value: "web", text: "service 1" },
        { key: "api", value: "api", text: "service 1" },
        { key: "maj", value: "maj", text: "service 1" },
        { key: "seo", value: "seo", text: "service 1" },
    ];
    console.log(id);

    const handleClickToHome = () => {
        navigate("/", { state: { scrollTo: "home" } });
    };

    return (
        <>
            <Header />
            <div className="servicePage">
                <div className="servicePage_container">
                    <div className="servicePage_banner_title">
                        <h2 className="banner_title">titre du services</h2>
                        <p className="banner_description">
                            description rapide du service en quelque mots kfgjeg
                            fgjnsqfedgjsfdg sdfgjusdfg{" "}
                        </p>
                    </div>
                    <div className="servicePage_location">
                        <Link
                            className="link"
                            id="headerHome"
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            onClick={handleClickToHome}
                        >
                            Accueil
                        </Link>
                        <Select
                            placeholder="Select your country"
                            options={allServices}
                        />
                    </div>
                    <div className="servicePage_illustration">
                        <img src="" alt="" />
                    </div>
                    <div className="servicePage_content">
                        <h2> re titre du service</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ex odit tempore minima facere soluta, impedit
                            quia sed repudiandae doloribus aut explicabo neque
                            asperiores voluptates inventore distinctio labore
                            laboriosam, quas blanditiis?Lorem ipsum dolor sit
                            amet consectetur adipisicing elit. Ex odit tempore
                            minima facere soluta, impedit quia sed repudiandae
                            doloribus aut explicabo neque asperiores voluptates
                            inventore distinctio labore laboriosam, quas
                            blanditiis?Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Ex odit tempore minima facere
                            soluta, impedit quia sed repudiandae doloribus aut
                            explicabo neque asperiores voluptates inventore
                            distinctio labore laboriosam, quas blanditiis?
                        </p>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}
