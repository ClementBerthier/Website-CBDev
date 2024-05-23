//import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import AboutMe from "../AboutMe/AboutMe";
import "./App.css";
import Service from "../Services/Service.jsx";

function App() {
    return (
        <div className="app_container">
            <Home />
            <AboutMe />
            <Service />
        </div>
    );
}

export default App;
