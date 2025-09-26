import Toggle from "./Toggle";

// import { useOpenForm } from "../store/Q_Store";
export default function NavBar() {
    return (
        <div className="navBar_container colored_box">
                <nav className="navBar">
                <h1>Quizify</h1>
                <Toggle/>
            </nav>
        </div>
    )
}
