"use client";

import { useState } from "react";
import questions from "@/data/questions.json";
import "./FAQs.css";

export default function FAQs() {
    const [questionOpened, setQuestionOpened] = useState(null);

    const toggleQuestion = (id) => {
        setQuestionOpened((prev) => (prev === id ? null : id));
    };

    return (
        <div className="FAQs">
            <div className="FAQ_container">
                <h2 className="FAQ_title">Vous avez des questions ?</h2>
                <p className="FAQ_anwser_title">
                    Voici les réponses aux questions que l{"'"}on me pose le
                    plus souvent
                </p>
                <div className="questions_container">
                    {questions.map((question) => {
                        const isOpen = questionOpened === question.id;
                        return (
                            <div
                                className="questions"
                                key={question.id}
                                role="button"
                                aria-expanded={isOpen}
                                aria-controls={`answer-${question.id}`}
                                tabIndex={0}
                                onClick={() => toggleQuestion(question.id)}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter" || e.key === " ") {
                                        e.preventDefault();
                                        toggleQuestion(question.id);
                                    }
                                }}
                            >
                                <div className="question_name_container">
                                    <div className="left_section_question">
                                        <img
                                            className="double_arrow"
                                            src="/images/arrow-right-double-line.svg"
                                            alt=""
                                            aria-hidden="true"
                                        />
                                        <h3
                                            className={`question_name ${
                                                isOpen ? "blue" : "noBlue"
                                            }`}
                                        >
                                            {question.name}
                                        </h3>
                                    </div>
                                    <img
                                        className={`question_arrow ${
                                            isOpen ? "rotateDwn" : "rotateUp"
                                        }`}
                                        src="/images/arrow-down-line.svg"
                                        alt=""
                                        aria-hidden="true"
                                    />
                                </div>

                                <p
                                    id={`answer-${question.id}`}
                                    className={`answer ${
                                        isOpen ? "visible" : "hidden"
                                    }`}
                                >
                                    {question.answer}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
