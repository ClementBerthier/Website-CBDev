import "./footer.css";
import facebook from "../../assets/images/whitefacebook.svg";
import instagram from "../../assets/images/whiteinsta.svg";
import linkedin from "../../assets/images/whitelinkedin.svg";

export default function Footer() {
    return (
        <div className="footer_container">
            <div className="footer">
                <img
                    src="../../src/assets/images/Logo_CBDev.svg"
                    alt="logo entreprise"
                />
                <p>© 2021</p>
                <h3></h3>
                <div className="footer_logo">
                    <a className="footer_link" href="">
                        <img src={facebook} alt="logo facebook" />
                    </a>
                    <a className="footer_link" href="">
                        <img src={instagram} alt="logo instagram" />
                    </a>
                    <a className="footer_link" href="">
                        <img src={linkedin} alt="logo instagram" />
                    </a>
                </div>
            </div>
            <div>
                <h3></h3>
                <a href=""></a>
            </div>
            <div>
                <h3></h3>
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
            </div>
            <div>
                <p></p>
                <a href=""></a>
                <a href=""></a>
            </div>
        </div>
    );
}
