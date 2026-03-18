import { useState } from "react";
import question from "../../assets/questions.json";
import "./FAQs.css";

export default function FAQs() {
    const [questionOpened, setQuestionOpened] = useState(null);

    const handleClickQuestion = (e) => {
        const id = e.target.id;
        setQuestionOpened((prevId) =>
            prevId === Number(id) ? null : Number(id)
        );
    };

    return (
        <div className="FAQs">
            <div className="FAQ_container">
                <h2 className="FAQ_title">Vous avez des questions ?</h2>
                <p className="FAQ_anwser_title">
                    Voici les réponses aux questions que l{"'"}on me pose le
                    plus souvent{" "}
                </p>
                <div className="questions_container">
                    {question.map((question, index) => (
                        <div
                            className="questions"
                            id={question.id}
                            key={index}
                            onClick={handleClickQuestion}
                            role="button"
                            aria-expanded={questionOpened === question.id}
                            aria-controls={`answer-${question.id}`}
                            tabIndex={0}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                    e.preventDefault();
                                    handleClickQuestion(e);
                                }
                            }}
                        >
                            <div
                                className="question_name_container"
                                id={question.id}
                            >
                                <div
                                    className="left_section_question"
                                    id={question.id}
                                >
                                    <img
                                        id={question.id}
                                        className="double_arrow"
                                        src="/images/arrow-right-double-line.svg"
                                        alt="Flèche d'ouverture de la question"
                                    />
                                    <h3
                                        id={question.id}
                                        className={`question_name ${
                                            questionOpened === question.id
                                                ? "blue"
                                                : "noBlue"
                                        }`}
                                    >
                                        {question.name}
                                    </h3>
                                </div>
                                <img
                                    id={question.id}
                                    className={`question_arrow ${
                                        questionOpened === question.id
                                            ? "rotateDwn"
                                            : "rotateUp"
                                    }`}
                                    src="/images/arrow-down-line.svg"
                                    alt="Flèche de fermeture"
                                />
                            </div>

                            <p
                                id={`answer-${question.id}`}
                                className={`answer ${
                                    questionOpened === question.id
                                        ? "visible"
                                        : "hidden"
                                }`}
                            >
                                {question.answer}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
