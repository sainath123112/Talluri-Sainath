import "./Navbar.css";
import { Link } from "react-router-dom";
import logoTs from "./images/logo_ts.png"
import SainathResume from "./resume/SainathResume.pdf";

function Navbar() {


    return(
        <div className="navbar">
            <img src={logoTs} alt="logo"></img>
            <div className="navbar-links">
                <Link to="/Talluri-Sainath">Home</Link>
                <Link to="/Talluri-Sainath/skills">Skills</Link>
                <Link to="/Talluri-Sainath/projects">Projects</Link>
                <Link to="/Talluri-Sainath/Experience">Experience</Link>
                <Link to="/Talluri-Sainath/contact">Contact</Link>
            </div>
            <div className="navbar-resume">
                <a href={SainathResume} download><i className="fa-solid fa-download"></i>Resume</a>
            </div>
        </div>
    );

}

export default Navbar;