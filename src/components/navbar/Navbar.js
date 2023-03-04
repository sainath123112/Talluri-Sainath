import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
    return(
        <div className="navbar">
            <Link to="/"><img src="\logo_ts.png" alt="logo"></img></Link>
            <div className="navbar-links">
                <Link to="/Talluri-Sainath">Home</Link>
                <Link to="/Talluri-Sainath/skills">Skills</Link>
                <Link to="/Talluri-Sainath/projects">Projects</Link>
                <Link to="/Talluri-Sainath/Experience">Experience</Link>
                <Link to="/Talluri-Sainath/contact">Contact</Link>
            </div>
            <div className="navbar-resume">
                <button><i className="fa-solid fa-download"></i>Resume</button>
            </div>
        </div>
    );

}

export default Navbar;