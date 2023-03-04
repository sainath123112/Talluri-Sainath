import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
    return(
        <div className="navbar">
            <Link to="/"><img src="\logo_ts.png" alt="logo"></img></Link>
            <div className="navbar-links">
                <Link to="/">Home</Link>
                <Link to="/skills">Skills</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/Experience">Experience</Link>
                <Link to="/contact">Contact</Link>
            </div>
            <div className="navbar-resume">
                <button><i className="fa-solid fa-download"></i>Resume</button>
            </div>
        </div>
    );

}

export default Navbar;