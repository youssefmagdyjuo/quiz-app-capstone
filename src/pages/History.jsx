import { Link } from "react-router-dom";
import Button from "../components/Button";
import { useQuestionStore } from "../store/Q_Store";
import PopUp from "../components/PopUp";
import { useState } from "react";
import SearchBar from "../components/SearchBar";
export default function History() {
    const [searchFor, setSearchFor] = useState("");
    const { quizzes, resetQuizzes } = useQuestionStore();
    const [pop, setPop] = useState(false);
    return (
        <div>
            <PopUp popIsOpen={pop}>
                <h1 className="text-xl">Are you sure ?</h1>
                <div className="flex gap-2">
                    <Button
                        buttonText="Yes"
                        buttonStyle="primaryButton"
                        buttomFunc={() => {
                            resetQuizzes(), setPop(false);
                        }}
                    ></Button>
                    <Button
                        buttonText="No"
                        buttonStyle="secondaryButton"
                        buttomFunc={() => {
                            setPop(false);
                        }}
                    ></Button>
                </div>
            </PopUp>
            <h1 className="text-center text-4xl m-4 text-[var(--text-color)]">
                All Quizzes
            </h1>
            <SearchBar searchFor={searchFor} setSearchFor={setSearchFor} />
            <div className="historyContainer">
                {quizzes && quizzes.length > 0 ? (
                    <>
                        {(() => {
                            const filteredQuizzes = quizzes.filter((quiz) =>
                                searchFor !== ""
                                    ? quiz.quizCategory
                                        .toLowerCase()
                                        .includes(searchFor.toLowerCase())
                                    : true
                            );

                            if (searchFor !== "" && filteredQuizzes.length === 0) {
                                return (
                                    <p
                                        style={{
                                            color: "#999",
                                            width: "100%",
                                            textAlign: "center",
                                            marginTop: "2rem",
                                        }}
                                    >
                                        No results found
                                    </p>
                                );
                            }

                            return filteredQuizzes.map((quiz, index) => {
                                const quizPercentage = Math.round(
                                    (quiz.quizScore / quiz.quizNumberOfQuestions) * 100
                                );
                                const passed = quizPercentage >= 50;
                                return (
                                    <div
                                        key={index}
                                        className="QuizContainer"
                                        style={{
                                            background: passed ? "var(--mix-bg1)" : "var(--mix-bg2)",
                                        }}
                                    >
                                        <div className="Quiz">
                                            <h2 
                                            dangerouslySetInnerHTML={{__html:quiz.quizCategory}}
                                            className="text-center mb-4 text-xl"/>
                                            <div className="QuizDetails">
                                                <p>Number of questions</p>
                                                <div>{quiz.quizNumberOfQuestions}</div>

                                                <p>Difficulty</p>
                                                <div>{quiz.quizDifficulty}</div>

                                                <p>Score</p>
                                                <div
                                                    className={passed ? "coloredText1" : "coloredText2"}
                                                >
                                                    {quizPercentage}%
                                                </div>
                                            </div>

                                            <Link to={`/history/quizDetails/${index}`}>
                                                <div
                                                    style={{ marginTop: "1rem", placeItems: "center" }}
                                                >
                                                    <Button
                                                        buttonText="Quiz Details"
                                                        buttonStyle="secondaryButton"
                                                    />
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                );
                            });
                        })()}
                    </>
                ) : (
                    // لو مفيش كويزات خالص
                    <p style={{ color: "#999", width: "100%", textAlign: "center" }}>
                        No quizzes found
                    </p>
                )}
            </div>

            <div
                style={{
                    placeItems: "center",
                    display: "flex",
                    gap: "1rem",
                    justifyContent: "center",
                    padding: "2rem",
                }}
            >
                <Link to="/">
                    <Button buttonText="< Back" buttonStyle="secondaryButton" />
                </Link>
                {searchFor == "" ? (
                    <Button
                        buttonText="Clean"
                        buttonStyle="dangerButton"
                        buttomFunc={() => {
                            quizzes && quizzes.length > 0 ? setPop(!pop) : "";
                        }}
                    />
                ) : (
                    ""
                )}
            </div>
        </div>
    );
}
