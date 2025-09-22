import React from "react";
// import Squares from "../Squares";
import NavBar from "../components/NavBar";
import Button from "../components/Button";
import Form from "../components/Form";
import { useOpenForm } from "../store/Q_Store";
export default function Home() {
    const {isVaisble,toggleVisible} = useOpenForm();
    return (
<>
        <div className="headerContainer">
            <NavBar />
            <h2 className="header_2">Empower with Insight</h2>
            <h1 className="header_1">Chase the Challenge</h1>
            <p>Challenge yourself with fun and engaging quizzes that make learning exciting and rewarding  </p>
            <Button buttomFunc={toggleVisible} buttonStyle='primaryButton' buttonText="Try Now"/>
            <Form isVaisble={isVaisble}/>
        </div>
</>
    );
}
