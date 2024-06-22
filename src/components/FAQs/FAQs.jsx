import { useEffect, useState } from "react";
import "./FAQs.css";

export default function FAQs() {
    const [arrowClicked, setArrowClicked] = useState(false);
    const [rotateClass, setRotateClass] = useState("rotate");

    const handleClickArrow = () => {
        setArrowClicked(!arrowClicked);
    };

    useEffect(() => {
        if (arrowClicked) {
            setRotateClass("rotateUp");
        } else {
            setRotateClass("rotateDwn");
        }
    }, [arrowClicked]);

    return (
        <div className="FAQs">
            <div className="FAQ_container">
                <h2 className="FAQ_title">Vous avez des questions ?</h2>
                <p className="FAQ_anwser_title">
                    Voici les réponse aux questions que l{"'"}on me pose le plus
                    souvent{" "}
                </p>
                <div className="questions_container">
                    <div className="questions">
                        <div className="question_name_container">
                            <div className="left_section_question">
                                <img
                                    className="double_arrow"
                                    src="/images/arrow-right-double-line.svg"
                                    alt="double right arrow"
                                />
                                <h3 className="question_name">
                                    Question1 quel est la race de chat qui as
                                    pas de peau?
                                </h3>
                            </div>
                            <img
                                className={`question_arrow ${rotateClass}`}
                                src="/images/arrow-down-line.svg"
                                alt="arrow"
                                onClick={handleClickArrow}
                            />
                        </div>
                        <div className="answer_container">
                            <p className="answer visible">
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Est, molestiae reprehenderit
                                explicabo nam porro labore! Soluta, deserunt
                                architecto error fugiat magnam fugit aut porro
                                dolorum officiis velit autem debitis sit. Lorem,
                                ipsum dolor sit amet consectetur adipisicing
                                elit. Est, molestiae reprehenderit explicabo nam
                                porro labore! Soluta, deserunt architecto error
                                fugiat magnam fugit aut porro dolorum officiis
                                velit autem debitis sit.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
