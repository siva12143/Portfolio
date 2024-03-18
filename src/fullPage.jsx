import React from 'react'
import Home from './components/home'
import About from './components/About'
import Service from './components/service'
// import Project from './components/project'
import { Link } from 'react-router-dom'
import project1 from "./images/project1.png";
import project2 from "./images/project2.png";
import project3 from "./images/project3.png";
import Contact from './components/Contact'
import './responsive.css'

export default function FullPage() {

    const project = [
        { id: 1, image: project1, title: "Priyam Cookware", desc: "Ways To Motivate Yourself. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod …", link: "https://priyamcookware.in" },
        { id: 2, image: project2, title: "Ragasya", desc: "Ways To Motivate Yourself. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod …", link: "https://ragasya.com/" },
        { id: 3, image: project3, title: "Shanaz Trading", desc: "Ways To Motivate Yourself. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod …", link: "https://shanaztrading.com/" },
    ]

    return (
        <div>
            <Home />
            <About />
            <Service />
            {/* Project Start*/}
            <div className="blogs">
                <div className="blog_container">
                    <h1 className="cont_title blog_title">Projects</h1>
                    <div className="project_btn">
                        <div className="keira_button ">
                            <div className=''>
                                <Link className="keira_about_button" to='/projects'>See More <i className="fa fa-angle-right"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="blog">

                        {project.map(ele => (
                            <div key={ele.id} className="blog1">
                                <div className="blog1_cont">



                                    <div className="blog1img">
                                        <img src={ele.image} alt="" />
                                        <div className="blog_cont_preview">
                                            <Link to={ele.link} target='_blank'>Preview</Link>
                                        </div>
                                    </div>
                                    <div>
                                        <h3>{ele.title}</h3>
                                        <p>{ele.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* Project End*/}
            <Contact />
        </div>
    )
}
