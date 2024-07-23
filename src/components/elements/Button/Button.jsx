import PropTypes from "prop-types";
import "./button.css";
import { useNavigate } from "react-router-dom";

export default function Button({ text, id, name, type }) {
    const navigate = useNavigate();

    const handleClickNavigate = (e) => {
        const destinationId = e.target.id;
        if (destinationId === "contact" || destinationId === "services") {
            navigate("/", { state: { id: destinationId } });
        } else {
            navigate("/servicesPage", { state: { name: name } });
        }
    };
    return (
        <button
            className="button"
            type={type}
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
    name: PropTypes.string,
    type: PropTypes.string,
};
