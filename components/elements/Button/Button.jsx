import Link from "next/link";
import "./button.css";

export default function Button({ text, href = "/", className = "" }) {
    return (
        <Link className={`button ${className}`.trim()} href={href}>
            {text}
        </Link>
    );
}
