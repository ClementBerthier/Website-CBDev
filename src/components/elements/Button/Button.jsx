import PropTypes from "prop-types";
import "./button.css";

export default function Button({ text }) {
    return (
        <button className="button" type="button">
            {text}
        </button>
    );
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
};
