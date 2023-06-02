import "./Skills.css"
import html from "../MainImages/html.png"
import css from "../MainImages/css-3.png"
import javascript from "../MainImages/java-script.png"
import react from "../MainImages/react.png"
import java from "../MainImages/java.png"
import springboot from "../MainImages/springboot.png"
import sql from "../MainImages/sql-server.png"
import spring from "../MainImages/spring.png"
import python from "../MainImages/python.png"
import nodejs from "../MainImages/pngwing.com.png"
// import expressjs from "../MainImages/Expressjs.svg"

import { useEffect } from "react"
const Skills = () => {
    const callskillsPage = async () => {
        const res = await fetch('/skills', {
            method: "GET",
            headers: {
                Accept: "appllication/json",
                "Content-Type": "application/json",
            },
            credentials: "include"
        })
        const data = await res.json();
        console.log(data);
    }
        useEffect(() => {
            callskillsPage();
        }, [])
        return (
            <>
                <div className="inner" id="skills">
                    <div className="header">
                        <h1>My Skills</h1>
                    </div>
                    <div className="container_skills">
                        {/* html */}
                        <div className="skill_box">
                            <div className="skill_title">
                                <div className="skill_img">
                                    <img src={html} alt="html" className="skill-icons" />
                                </div>
                                <h3>HTML 5</h3>
                            </div>
                            <p>HTML stands for Hyper Text Markup Language. It is used to design web pages using a markup language. HTML5 is a markup language used for structuring and presenting content on the World Wide Web. It is the fifth and final major HTML version that is a World Wide Web.</p>
                        </div>
                        {/* CSS */}
                        <div className="skill_box">
                            <div className="skill_title">
                                <div className="skill_img">
                                    <img src={css} alt="css" className="skill-icons" />
                                </div>
                                <h3>CSS 3</h3>
                            </div>
                            <p>CSS3 is used with HTML to create and format content structure. It is responsible for colours, font properties, text alignments, background images, graphics, tables, etc. It provides the positioning of various elements with the values being fixed, absolute, and relative.</p>
                        </div>
                        {/* JAVA SCRIPT */}
                        <div className="skill_box">
                            <div className="skill_title">
                                <div className="skill_img">
                                    <img src={javascript} alt="javascript" className="skill-icons" />
                                </div>
                                <h3>JAVA SCRIPT</h3>
                            </div>
                            <p>JavaScript is the programming language of the Web. JavaScript is a scripting language that enables you to create dynamically updating content,
                                control multimedia, animate images, and pretty much everything else. On websites, it is mainly used for validation purposes. </p>
                        </div>
                        {/* REACT JS */}
                        <div className="skill_box">
                            <div className="skill_title">
                                <div className="skill_img">
                                    <img src={react} alt="react" className="skill-icons" />
                                </div>
                                <h3>REACT JS</h3>
                            </div>
                            <p>React.js is an open-source JavaScript library developed by Facebook. It's used for building interactive user interfaces and web applications
                                quickly and efficiently with significantly less code than you would with vanilla JavaScript. React components are typically written using JSX.</p>
                        </div>
                        {/* node js */}
                        <div className="skill_box">
                            <div className="skill_title">
                                <div className="skill_img">
                                    <img src={nodejs} alt="react" className="skill-icons" />
                                </div>
                                <h3>NODE JS</h3>
                            </div>
                            <p>Node.js® is an JavaScript runtime environment. It allows us to run JavaScript on the server. It runs on the V8 JavaScript Engine,
                                 and executes JavaScript code outside a web browser.It is often used to generate dynamic web page content before the page is sent to the user's web browser.</p>
                        </div>
                        {/* java */}
                        <div className="skill_box">
                            <div className="skill_title">
                                <div className="skill_img">
                                    <img src={java} alt="java" className="skill-icons" />
                                </div>
                                <h3>JAVA</h3>
                            </div>
                            <p>Java is a popular programming language. Java is used to develop mobile apps, web apps. Java is used in Building and running mobile applications.
                                Java is generally faster and more efficient than Python because it is a compiled language. As an interpreted language.</p>
                        </div>
                        {/* python */}
                        <div className="skill_box">
                            <div className="skill_title">
                                <div className="skill_img">
                                    <img src={python} alt="python" className="skill-icons" />
                                </div>
                                <h3>PYTHON</h3>
                            </div>
                            <p>Python is an open-source, object-oriented, high-level, general purpose programming language. it's relatively easy to learn,
                                Python is extensively applied in data science, data analysis, machine learning, data engineering, web development, software development, and other fields.</p>
                        </div>
                        {/* sql */}
                        <div className="skill_box">
                            <div className="skill_title">
                                <div className="skill_img">
                                    <img src={sql} alt="sql" className="skill-icons" />
                                </div>
                                <h3>SQL</h3>
                            </div>
                            <p>Structured query language (SQL) is a programming language for storing and processing information in a relational database. A relational database stores information in tabular form, with rows and columns.
                                MS SQL, MYSQL, Oracle SQL, PostgreSQL are the one of the most famous sql database vendors. </p>
                        </div>
                        {/* spring */}
                        <div className="skill_box">
                            <div className="skill_title">
                                <div className="skill_img">
                                    <img src={spring} alt="springboot" className="skill-icons" />
                                </div>
                                <h3>SPRING</h3>
                            </div>
                            <p>Spring is an open source Java-based framework used to create a micro Service. It is used to build stand-alone production ready spring applications.
                                These are the advantages of spring boot like Easy deployment, Simple scalability, Compatible with Containers, Minimum configuration, Lesser production time.</p>
                        </div>
                        {/* springboot */}
                        <div className="skill_box">
                            <div className="skill_title">
                                <div className="skill_img">
                                    <img src={springboot} alt="springboot" className="skill-icons" />
                                </div>
                                <h3>SPRING BOOT</h3>
                            </div>
                            <p>Spring Boot is an open-source tool that makes it easier and faster to use Java-based frameworks to create microservices and web apps. Spring Boot makes it easy to create stand-alone, production-grade Spring based Applications that you can "just run".
                                It is  Easy to deploy, Simple to scale, Compatible with Containers, Minimum configuration, Lesser production time.</p>
                        </div>
                    </div>
                </div>

            </>
        )
    }
    export default Skills