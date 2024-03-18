import React from 'react'
import emailjs from "@emailjs/browser";
import contact from '../images/contact.jpg'
import { Link } from 'react-router-dom'
import { form } from "react";

export default function Contact() {
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_84jokq2', 'template_za0rgsf', form.current, 'qa9tbPiqQ7sLhOrRU')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };
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
                                <span><Link to='tel:+919600970394'> +91 9600970394</Link></span><br />
                            </div>
                            <div>
                                <h3>ADDRESS</h3>
                                <span>Tirunelveli, TamilNadu - 627426</span>
                            </div>
                        </div>
                        {/* <form ref={form} onSubmit={sendEmail} className="contact2">
                        <div>
                            <input type="text" placeholder="User Name"/>
                            <input type="email" placeholder="Email"/>
                            <input type="text" placeholder="Number"/>
                        </div>
                        <textarea name="" id="" cols="30" rows="10" placeholder="Message..."></textarea>
                        <a ><input type="submit" className='submit_btn' value="Submit"/></a>
                    </form> */}
                    </div>
                </div>
            </footer>
        </div>
    )
}
