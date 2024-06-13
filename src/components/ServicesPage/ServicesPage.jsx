import { useLocation } from "react-router-dom";
import "./ServicesPage.css";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";

export default function ServicesPage() {
    const location = useLocation();
    const { id } = location.state;

    console.log(id);

    return (
        <>
            <Header />
            <div className="servicePage">
                <div className="servicePage_container">blablabla</div>
                <Footer />
            </div>
        </>
    );
}
