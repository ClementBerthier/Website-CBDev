import PropTypes from "prop-types";
import "./button.css";
import { useNavigate } from "react-router-dom";

export default function Button({ text, id }) {
    const navigate = useNavigate();

    const handleClickNavigate = (e) => {
        e.preventDefault();
        const destinationId = e.target.id;
        if (destinationId === "contact") {
            navigate("/", { state: { id: destinationId } });
        } else if (destinationId === "servicesPage") {
            navigate("/servicesPage", { state: { id: destinationId } });
        }
    };
    return (
        <button
            className="button"
            type="button"
            id={id}
            onClick={handleClickNavigate}
        >
            {text}
        </button>
    );
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    id: PropTypes.string,
};
