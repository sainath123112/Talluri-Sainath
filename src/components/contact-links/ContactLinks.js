import React from 'react'
import {Link} from "react-router-dom"
import "./ContactLinks.css";


function ContactLinks() {
  return (
    <div className="contact-links">
                    <a href="https://linkedin.com/in/sainath-talluri" target="__blank"><i className="fa-brands fa-linkedin-in"></i></a>
                    <Link to="/Talluri-Sainath/contact"><i className="fa-solid fa-envelope"></i></Link>
                    <a href="https://linkedin.com/in/sainath-talluri" target="__blank"><i className="fa-brands fa-square-facebook"></i></a>
                    <a href="https://github.com/sainath123112" target="__blank"><i className="fa-brands fa-github"></i></a>
                    <span></span>
                </div>
  )
}

export default ContactLinks