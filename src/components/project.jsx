import React from 'react'
import project1 from "../images/project1.png"
import project2 from "../images/project2.png"
import project3 from "../images/project3.png"
import project4 from "../images/project4.png"
import project5 from "../images/project5.png"
import project6 from "../images/project6.png"
import project7 from "../images/project7.png"
import project8 from "../images/project8.png"
import { Link } from 'react-router-dom'
export default function Project() {

    const project = [
        { 
            image: project1, 
            title: "Priyam Cookware", 
            desc: "Seamless e-commerce experience for kitchenware enthusiasts.",
             link: "https://priyamcookware.in"
        },
        { 
            image: project2,
             title: "Ragasya", 
             desc: "Immersive showcase of exquisite artworks from renowned artists.", 
             link: "https://ragasya.com/" 
        },
        { 
            image: project3,
            title: "Shanaz Trading",
            desc: "Developed a dynamic wholesale apparel website for Shanaz Trading.",
            link: "https://shanaztrading.com/" 
        },
        { 
            image: project4,
            title: "GKR Steels",
            desc: "Robust online presence for leading steel manufacturing company.",
            link: "https://gkrsteels.com/" 
        },
        { 
            image: project5,
            title: "My Mart ",
            desc: "Innovative online marketplace connecting buyers and sellers.",
            link: "https://mymartking.com/" 
        },
        { 
            image: project6,
            title: "Afto",
            desc: "Engaging platform for fashion-forward apparel and accessories.",
            link: "https://afto.in/" 
        },
        { 
            image: project7,
            title: "Money Protect",
            desc: "Comprehensive financial education platform for informed decision-making.",
            link: "https://moneyprotects.com/" 
        },
        { 
            image: project8,
            title: "Engle Volkers",
            desc: "Premier destination for luxury real estate listings and services.",
            link: "https://www.engelvoelkers.com/de/en" 
        },
    ]

    return (
        <div>
            <div className="blogs">
                <div className="blog_container">
                    <h1 className="cont_title project_title">Projects</h1>
                    <div className="project_btn">
                        <div className="keira_button ">
                            <div className=''>
                                <Link className="keira_about_button " to='/'><i className="fa fa-angle-left"></i> Home </Link>
                            </div>
                        </div>
                    </div>
                    <div className="blog">

                        {project.map(ele => (
                            <div className="blog1">
                                <div className="blog1_cont">
                                    <div className="blog1img">
                                        <img src={ele.image} alt="" />
                                        <div className="blog_cont_preview">
                                            <Link to={ele.link} target='_blank'>Preview</Link>
                                        </div>
                                    </div>
                                    <div>
                                        <h3>{ele.title}</h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
