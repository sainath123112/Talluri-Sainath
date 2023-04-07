import "./Home.css";
import { useLocation } from "react-router-dom";
import Logos from "../logos/Logos";
import { useEffect } from "react";
import ContactLinks from "../contact-links/ContactLinks";

function Home({setcomponentpath, componentpath}) {
    const location = useLocation();
    useEffect(() => {
        setcomponentpath(location.pathname);
    }, [setcomponentpath, location.pathname])
    

    return(
        <div className="home">
            <div className="home-logo">
            <i className="fa-sharp fa-solid fa-code-branch"></i>
            </div>
            <div className="home-heading">
                <h3>Hi, my name is..</h3>
                <h1 className="home-name">Talluri Sainath</h1>
                <p className="home-role"><i className="fa-solid fa-less-than"></i>Web Developer<i className="fa-solid fa-greater-than"></i></p>
             
                <ContactLinks></ContactLinks>
            </div>
            <Logos color="#a7a9be"></Logos>
        </div>
    );

}

export default Home;