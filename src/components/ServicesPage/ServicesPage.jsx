import { useLocation } from "react-router-dom";
import "./ServicesPage.css";

export default function ServicesPage() {
    const location = useLocation();
    const { id } = location.state;

    console.log(id);

    console.log;
    return (
        <div>
            <div>page</div>
        </div>
    );
}
