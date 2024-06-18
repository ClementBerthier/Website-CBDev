import "./Services2.css";

//TODO: chercher les bonne image a mettre dans le descption picture container

export default function Services2() {
    return (
        <div className="Services">
            <div className="services_container">
                <h2 className="services_title">
                    Nos services en developpement web
                </h2>
                <div className="services_name_container">
                    <div className="services_name active">
                        Conception de site
                    </div>
                    <div className="services_name">
                        Conception d{"'"}application
                    </div>
                    <div className="services_name">Refonte & Maintenance</div>
                    <div className="services_name">Optimisation SEO</div>
                </div>
                <div className="services_description_container">
                    <div className="description_text_container">
                        <img
                            className="logo"
                            src="/images/code.svg"
                            alt="symbol code"
                        />
                        <h3 className="text_title">
                            Votre identité numérique sur mesure
                        </h3>
                        <p className="text">
                            <span>Sites vitrine</span>, <span>blogs</span>,{" "}
                            <span>porfolios</span>, <span>CV en ligne</span>,{" "}
                            <span>sites d{"'"}évènements</span> ... Que vous
                            soyez un particulier ou une entreprise, votre image
                            numérique est importante. Découvrez plus en détail
                            nos services de conception de site web.
                        </p>
                        <div className="link_button">+</div>
                    </div>
                    <div className="description_picture_container">
                        <img
                            className="picture"
                            src="/images/site-view-large.png"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
