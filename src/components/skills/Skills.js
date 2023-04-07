import "./Skills.css";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Logos from "../logos/Logos";
import ContactLinks from "../contact-links/ContactLinks";


function Skills({setcomponentpath, componentpath})
{

    const location = useLocation();
    useEffect(() => {
        setcomponentpath(location.pathname);
    }, [setcomponentpath, location.pathname])
    return( 
        <div className="skills"> 
        <h1>Skills</h1>
        <p>Let me introduce my skills in which I am good at.</p>
        <div className="skill-container">
            <div className="skill-row">
                <div className="skill-row-child skill-program">
                    <h2><i className="fa-solid fa-terminal"></i>Programming Languages</h2>
                    <div>
                        <p>C</p>
                        <p>C++</p>
                        <p>JAVA</p>
                        <p>PYTHON</p>
                    </div>
                </div>

                <div className="skill-row-child skill-frontend">
                    <h2><i className="fa-solid fa-code"></i>Frontend Languages</h2>
                    <div>
                        <p>HTML5</p>
                        <p>CSS</p>
                        <p>JAVASCRIPT</p>
                    </div>
                </div>
            </div>
            
            <div className="skill-row">
                <div className="skill-row-child skill-js-frame">
                    <h2><i className="fa-brands fa-js"></i>JS Framework</h2>
                    <div>
                        <p>REACT</p>
                    </div>
                </div>

                <div className="skill-row-child skill-backend">
                    <h2><i className="fa-solid fa-database"></i>Databases</h2>
                    <div>
                        <p>MySQL</p>
                        <p>MongoDB</p>
                    </div>
                </div>

            </div>

            <div className="skill-row">
                <div className="skill-row-child skill-be-frame">
                    <h2><i className="fa-sharp fa-solid fa-server"></i>Backend Framework</h2>
                    <div>
                        <p>SPRING</p>
                    
                    </div>
                </div>

                <div className="skill-row-child skill-os">
                    <h2><i className="fa-brands fa-windows"></i>Operating Systems</h2>
                    <div>
                        <p>WINDOWS</p>
                        <p>LINUX</p>
                    </div>
                </div>

            </div>

            <div className="skill-row">
                <div className="skill-row-child skill-version">
                    <h2><i className="fa-solid fa-code-commit"></i>version control</h2>
                    <div>
                        <p>GIT</p>
                        <p>GITHUB</p>
                    </div>
                </div>

                <div className="skill-row-child skill-cloud">
                    <h2><i className="fa-solid fa-cloud"></i>Deployment and Cloud</h2>
                    <div>
                        <p>AWS</p>
                        
                    </div>
                </div>

            </div>

        </div>
        <ContactLinks></ContactLinks>
        <Logos color="#f25f4c"></Logos>
        </div>
        
    );
}

export default Skills;