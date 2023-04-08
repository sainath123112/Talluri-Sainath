import "./Contact.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Logos from "../logos/Logos.js";
import ContactLinks from "../contact-links/ContactLinks";
import {motion} from "framer-motion"

function Contact({setcomponentpath})
{
    const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

    const location = useLocation();
    useEffect(() => {
        setcomponentpath(location.pathname);
    }, [setcomponentpath, location.pathname])

    return( 
        <motion.div animate={{x:0}} initial={{x: 1600}} className="contact"> 
            <h1>Contact</h1>
            <p>Send me an E-mail to hire..!</p>
            <div className="contact-form">
                <form>
                    <div>
                    <input type="text" name="name" placeholder="Name"></input>
                    <input type="email" value={to} name="email" onChange={(event) => setTo(event.target.value)} placeholder="Email"></input>
                    </div>
                    <input type="text" name="subject" value={subject} onChange={(event) => setSubject(event.target.value)} placeholder="Subject"></input>
                    <textarea type="textarea" name="message" value={message} onChange={(event) => setMessage(event.target.value)} placeholder="Message"></textarea>
                    <button type="submit" >Send</button>
                </form>
            </div>

            <ContactLinks></ContactLinks>
            <Logos color="#e53170"></Logos>
        </motion.div>
    );
}

export default Contact;