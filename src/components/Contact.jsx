import React from 'react'
import emailjs from "@emailjs/browser";
import contact from '../images/contact.jpg'
import { Link } from 'react-router-dom'

export default function Contact() {

    return (
        <div>
            <footer className="contacts">
                <div className="contact_container">
                    <h1 className="cont_title contact_title">Contact Us</h1>
                    <div className="contact">
                        <div className="contact1">
                            <div>
                                <h3>EMAIL</h3>
                                <span><Link to="mailto:siva121435@gmail.com">siva121435@gmail.com</Link></span>
                            </div>
                            <div>
                                <h3>CALL US</h3>
                                <span><Link to='tel:+919600970394'> +91 6379554283</Link></span><br />
                            </div>
                            <div>
                                <h3>ADDRESS</h3>
                                <span>Tirunelveli, TamilNadu - 627426</span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
