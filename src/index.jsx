import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/Common/App/App.jsx";
import { BrowserRouter } from "react-router-dom";
import "../src/reset.css";
import "../src/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
