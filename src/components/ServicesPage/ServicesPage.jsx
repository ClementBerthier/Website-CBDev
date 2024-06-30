import "./ServicesPage.css";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";

export default function ServicesPage() {
    return (
        <>
            <Header />
            <div className="ServicePage">
                <div className="servicePage_banner_title">
                    <span className="tagService">tagService</span>
                    <h2 className="service_title">title</h2>
                    <p className="service_little_description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eius sapiente cumque minus ullam corrupti nobis modi
                        tempore, doloremque repellat officiis atque iure. Soluta
                        eligendi corrupti debitis delectus modi consectetur
                        quaerat.
                    </p>
                </div>
                <div className="servicePage_content_container">
                    <div className="servicePage_content">
                        <div className="introduction">
                            <h2 className="introduction_title">Introduction</h2>
                            <p className="introduction_text">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Illum consectetur ducimus
                                dignissimos deserunt fugiat odit explicabo odio
                                velit qui maxime facere quaerat labore debitis
                                enim, dolor provident tempora reiciendis nobis?
                            </p>
                        </div>
                        <div className="description">
                            <h2 className="description_title">title</h2>
                            <p className="description_text">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Illum consectetur ducimus
                                dignissimos deserunt fugiat odit explicabo odio
                                velit qui maxime facere quaerat labore debitis
                                enim, dolor provident tempora reiciendis nobis?
                            </p>
                        </div>
                        <div className="feature">
                            <h2 className="feature_title">Fonctionalité</h2>

                            <p className="feature_text">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Sunt commodi asperiores iste
                                inventore, nam cupiditate dicta nemo quidem
                                magni ab optio? In architecto aliquam suscipit
                                corporis rerum aut. Sint, eos.
                            </p>

                            <ul className="feature_list">
                                <li className="feature_list_item">
                                    <h3 className="item_title">
                                        titre de la feature
                                    </h3>
                                    <p className="item_text">
                                        {" "}
                                        Lorem ipsum dolor sit, amet consectetur
                                        adipisicing elit. Labore nihil velit,
                                        itaque pariatur dignissimos ipsum
                                        aliquam expedita praesentium quo
                                        laboriosam voluptas ab deserunt sed,
                                        nemo fugit repellat tempore ex
                                        exercitationem.
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className="example">
                            <h3 className="example_title">exemple</h3>
                            <video
                                className="example_video"
                                src="/images/test.webm"
                                alt=""
                                autoPlay="true"
                                loop="true"
                            />
                            <p className="example_text">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Molestiae, magnam optio nam
                                atque aperiam rerum doloremque, ratione quo
                                asperiores blanditiis facilis quisquam
                                voluptatibus. Magnam doloremque voluptas minus
                                modi voluptates molestias?
                            </p>
                        </div>
                        <div className="conclusion">
                            <h2 className="conclusion_title">conclusion</h2>
                            <p className="conclucion_text">
                                {" "}
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Nemo sapiente dicta officia,
                                et, molestiae error incidunt sunt commodi,
                                perferendis fugit consequuntur aperiam
                                laudantium dolore assumenda! Molestiae,
                                voluptate quas. Corrupti, odit.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="promotionnal_banner">
                <h2 className="promotionnal_banner_title">title</h2>
                <p className="promotionnal_banner_text">
                    N{"'"}hésitez pas a me contacter
                </p>
            </div>
            <Footer />
        </>
    );
}
