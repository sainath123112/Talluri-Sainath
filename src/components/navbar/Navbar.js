import "./Navbar.css";
import { Link } from "react-router-dom";
import logoTs from "./images/logo-no-background.png"
import SainathResume from "./resume/SainathResume.pdf";

function Navbar({ componentpath }) {


    return(
        <div className="navbar">
            <img src={logoTs} alt="logo"></img>
            <div className="navbar-links">
                <Link to="/Talluri-Sainath" className={componentpath==="/Talluri-Sainath" ? "navbar-links-clicked":"navbar-links-unclicked"}>Home</Link>
                <Link to="/Talluri-Sainath/skills" className={componentpath==="/Talluri-Sainath/skills" ? "navbar-links-clicked":"navbar-links-unclicked"}>Skills</Link>
                <Link to="/Talluri-Sainath/projects" className={componentpath==="/Talluri-Sainath/projects" ? "navbar-links-clicked":"navbar-links-unclicked"}>Projects</Link>
                <Link to="/Talluri-Sainath/experience" className={componentpath==="/Talluri-Sainath/experience" ? "navbar-links-clicked":"navbar-links-unclicked"}>Experience</Link>
                <Link to="/Talluri-Sainath/contact" className={componentpath==="/Talluri-Sainath/contact" ? "navbar-links-clicked":"navbar-links-unclicked"}>Contact</Link>
            </div>
            <div className="navbar-resume">
                <a href={SainathResume} target="__blank"><i className="fa-solid fa-download"></i>Resume</a>
            </div>
        </div>
    );

}

export default Navbar;