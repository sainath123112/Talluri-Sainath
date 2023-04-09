import React from 'react'
import "./MobileNav.css";
import {Link} from "react-router-dom"
import SainathResume from "../navbar/resume/SainathResume.pdf";
import { motion } from "framer-motion"

function MobileNav({componentpath, setmobilenavclicked }) {
  return (
    <div className='mobilenav'>
        <motion.div animate={{x:0}} initial={{x:-1600}} className='mobilenav-overlay' onClick={()=>setmobilenavclicked(false)}>

        </motion.div>
        <motion.div animate={{x:0}} initial={{x:1600}} className='mobilenav-container' onClick={()=>setmobilenavclicked(false)}>
            <div className="mobilenav-links" onClick={()=>setmobilenavclicked(false)}>
                <Link to="/Talluri-Sainath/" className={componentpath==="/Talluri-Sainath/" ? "mobilenav-links-clicked":"mobilenav-links-unclicked"}>Home</Link>
                <Link to="/Talluri-Sainath/skills" className={componentpath==="/Talluri-Sainath/skills" ? "mobilenav-links-clicked":"mobilenav-links-unclicked"}>Skills</Link>
                <Link to="/Talluri-Sainath/projects" className={componentpath==="/Talluri-Sainath/projects" ? "mobilenav-links-clicked":"mobilenav-links-unclicked"}>Projects</Link>
                <Link to="/Talluri-Sainath/experience" className={componentpath==="/Talluri-Sainath/experience" ? "mobilenav-links-clicked":"mobilenav-links-unclicked"}>Experience</Link>
                <Link to="/Talluri-Sainath/contact" className={componentpath==="/Talluri-Sainath/contact" ? "mobilenav-links-clicked":"mobilenav-links-unclicked"}>Contact</Link>
            </div>
            <div className="mobilenav-resume">
                <a href={SainathResume} target="__blank"><i className="fa-solid fa-download"></i>Resume</a>
            </div>
        </motion.div>
    </div>
  )
}

export default MobileNav