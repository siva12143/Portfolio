import React from 'react'
import siva from '../images/siva.png'
import { Link } from 'react-router-dom'
export default function About() {
  return (
    <div>
      <div className="keira_about" id="about">
            <div className="about_container">
                <h1 className="cont_title about_title">about us</h1>
                <div className="keira_inner_about">
                    <div className="keira_about_image">
                        <img src={siva} alt=""/>
                    </div>
                    <div className="keira_about_text">
                        <h3>Hello, Im Siva Sankaran</h3>
                        <p>To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family.English person,</p>
                        <ul className="keira_about_percent">
                            <li className="product">HTMl & CSS</li>
                            <li className="ux">Java Script</li>
                            <li className="mobile">React JS</li>
                        </ul>
                        <div className="keira_button">
                            <div>
                                <Link className="keira_about_button" id=''>Contact <i className="fa fa-angle-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </div>
  )
}
