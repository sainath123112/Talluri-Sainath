import "./Contact.css";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Logos from "../logos/Logos.js";
import ContactLinks from "../contact-links/ContactLinks";
import {motion} from "framer-motion"
import emailjs from "@emailjs/browser"

function Contact({setcomponentpath})
{
    const form = useRef();
    const location = useLocation();
    useEffect(() => {
        setcomponentpath(location.pathname);
    }, [setcomponentpath, location.pathname])

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_a09o4gi', 'template_yxe6esk', form.current, '84jnRCA9o4EPeE1mm')
          .then((result) => {
            alert("Email sent successfully..!")
          }, (error) => {
              alert(error.text);
          });
      };

    return( 
        <motion.div animate={{x:0}} initial={{x: 1600}} className="contact"> 
            <h1>Contact</h1>
            <p>Send me an E-mail to hire..!</p>
            <div className="contact-form">
                <form ref={form} onSubmit={sendEmail}>
                    <div>
                    <input type="text" name="user_name" placeholder="Name" required></input>
                    <input type="email" name="user_email" placeholder="Email" required></input>
                    </div>
                    <input type="text" name="user_subject" placeholder="Subject" required></input>
                    <textarea type="textarea" name="message" placeholder="Message" required></textarea>
                    <button type="submit" >Send</button>
                </form>
            </div>

            <ContactLinks></ContactLinks>
            <Logos color="#e53170"></Logos>
        </motion.div>
    );
}

export default Contact;