import React from "react";
// import Squares from "../Squares";
import NavBar from "../components/NavBar";
import Button from "../components/Button";
import Form from "../components/Form";
import { useOpenForm } from "../store/Q_Store";
export default function Home() {
    const {isVisible,toggleVisible} = useOpenForm();
    return (
<>
        <div className="headerContainer">
            <NavBar />
            <h2 className="header_2">Empower with Insight</h2>
            <h1 className="header_1 coloredText1">Chase the Challenge</h1>
            <div style={{background:'#999',margin:'0.5rem',borderRadius:'5rem' ,height:'2px',width:'70%',maxWidth:'30rem'}}></div>
            <p>Challenge yourself with fun and engaging quizzes that make learning exciting and rewarding  </p>
            <Button buttomFunc={toggleVisible} buttonStyle='primaryButton' buttonText="Try Now"/>
            <Form isVisible={isVisible}/>
        </div>
</>
    );
}
