import { useLocation } from "react-router-dom";
import "./ServicesPage.css";
import Header from "../Header/Header.jsx";

export default function ServicesPage() {
    const location = useLocation();
    const { id } = location.state;

    console.log(id);

    return (
        <div>
            <Header />
        </div>
    );
}
