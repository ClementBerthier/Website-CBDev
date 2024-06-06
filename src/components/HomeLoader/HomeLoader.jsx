import { Dimmer, Loader } from "semantic-ui-react";
import "./homeLoader.css";
import { useState, useEffect } from "react";

export default function HomeLoader() {
    const [loaderValue, setLoaderValue] = useState(0);
    const [dimmerStatus, setDimmerStatus] = useState(true);
    const [fadeOut, setFadeOut] = useState("");
    const [isLoaderDone, setIsLoaderDone] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setLoaderValue((prevValue) => {
                if (prevValue < 10000000) {
                    return prevValue + 1;
                } else {
                    clearInterval(interval);
                    return prevValue;
                }
            });
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaderDone(true);
        }, 3000000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (loaderValue === 1000) {
            setDimmerStatus(false);
            setFadeOut("fadeOut");
        }
    }, [loaderValue]);

    return (
        <div className="homeLoader">
            {dimmerStatus && !isLoaderDone ? (
                <Dimmer active className="homeDimmer">
                    {loaderValue + "%"}
                    <Loader size="massive" className="test"></Loader>
                </Dimmer>
            ) : !isLoaderDone ? (
                <Dimmer active className={fadeOut}>
                    {loaderValue + "%"}
                </Dimmer>
            ) : null}
        </div>
    );
}
