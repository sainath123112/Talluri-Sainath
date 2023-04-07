import "./Experience.css";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Logos from "../logos/Logos";
import ContactLinks from "../contact-links/ContactLinks";

function Experience({setcomponentpath})
{

    const location = useLocation();
    useEffect(() => {
        setcomponentpath(location.pathname);
    }, [setcomponentpath, location.pathname])

    return( 
        <div className="experience"> 
            <h1>Experience</h1>
            <div className="experience-stem"></div>
            <div className="experience-dot-one">
                <div className="experience-dot-small"></div>
            </div>
            <div className="experience-dot-two">
                <div className="experience-dot-small"></div>
            </div>
            <div className="experience-1">
                <h2 className="experience-1-head">Teaching Assistant</h2>
                <p className="experience-1-company"><em>Southern Illinois University Edwardsville</em></p>
                <p className="experience-1-location" ><em>Edwardsville, IL, USA</em></p>
                <p className="experience-1-time"><em>Sept 2021 – <span>Present</span></em></p>
                <ul>
                    <li>Instructed small student groups on individual aspects of subject matter. Taught class of 30 students in programming
                        languages.</li>
                        <li>Supported faculty clerical needs in computer science department by preparing class materials and collecting assignments</li>
                </ul>
            </div>
            <div className="experience-2">
            <h2 className="experience-1-head">Full Stack Developer Intern</h2>
                <p className="experience-1-company"><em>Ayagan IT Services</em></p>
                <p className="experience-1-location" ><em> Dublin, Ireland</em></p>
                <p className="experience-1-time"><em>Apr 2020 – Mar 2021</em></p>
                <ul>
                    <li>Developed a Responsive web pages with user interactions using front end technologies HTML, CSS, and React.</li>
                        <li>Implemented E-Commerce website CUSTOMER CART to add products into cart and filter among the products using React
                            libraries like Redux and react hooks.</li>
                </ul>
            </div>

            <ContactLinks></ContactLinks>
            <Logos color="#f25f4c"></Logos>
        </div>
    );
}

export default Experience;