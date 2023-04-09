import "./Home.css";
import { useLocation, Link } from "react-router-dom";
import Logos from "../logos/Logos";
import { useEffect } from "react";
import ContactLinks from "../contact-links/ContactLinks";
import { motion } from "framer-motion"

function Home({setcomponentpath, componentpath}) {
    const location = useLocation();
    useEffect(() => {
        setcomponentpath(location.pathname);
    }, [setcomponentpath, location.pathname])
    

    return(
        <motion.div animate={{scale: 1}} initial={{scale: 0}} className="home">
            <div className="home-logo">
            <i className="fa-sharp fa-solid fa-code-branch"></i>
            </div>
            <div className="home-heading">
                <h3>Hi, my name is..</h3>
                <h1 className="home-name">Talluri Sainath</h1>
                <div className="home-role">
                    <i className="fa-solid fa-less-than"></i>
                    <motion.div  className="home-quali">
                    <motion.div  className="home-quali-sub">
                        <motion.p>Web Developer</motion.p>
                        <motion.p>UI/UX Designer</motion.p>
                        <motion.p>React Developer</motion.p>
                        <motion.p>Java Developer</motion.p>
                        </motion.div>
                    </motion.div>
                    <i className="fa-solid fa-greater-than"></i>
                </div>
                <div className="home-contact-links">
                    <a href="https://linkedin.com/in/sainath-talluri" target="__blank"><i className="fa-brands fa-linkedin-in"></i></a>
                    <Link to="/Talluri-Sainath/contact"><i className="fa-solid fa-envelope"></i></Link>
                    <a href="https://linkedin.com/in/sainath-talluri" target="__blank"><i className="fa-brands fa-square-facebook"></i></a>
                    <a href="https://github.com/sainath123112" target="__blank"><i className="fa-brands fa-github"></i></a>
                    <span></span>
                </div>
                <ContactLinks></ContactLinks>
            </div>
            <Logos color="#a7a9be"></Logos>
        </motion.div>
    );

}

export default Home;