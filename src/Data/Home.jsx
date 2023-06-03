
import "./Home.css"
import profile from "../MainImages/venu_50.jpg"
import mixed_clr from "../MainImages/mixed_color.jpg"
import { Link } from "react-router-dom"
const Home = () => {
    return (
        <div className="home" id="home">
            <div className="homecontent">
                <h1>Hi i'm Venu Gopal</h1>
                <h3>full stack developer</h3>
                <p>This is the portfolio website which is built on top of React js as frontend and Express js as backend and mongodb as database. 
                    In this i had mentioned my skills, projects and my Bio and also you can get my resume by clicking on Hire me button.
                </p>
                <div className="btn-box">
                    <Link target="_blank" to="https://www.canva.com/design/DAFj-JlZs_I/AltkSB_BnhatSYzjkgFiHg/edit?utm_content=DAFj-JlZs_I&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" download="resume" >Hire me</Link>
                    <Link to="/letstalk">Let's talk</Link>
                </div>
                <div className="home-sci">
                    <a href="https://www.linkedin.com/in/venu-reddy-a226881b6/" rel="noreferrer noopener" target="_blank"><i className="bx bxl-linkedin"></i></a>
                    <a href="https://www.instagram.com/dye_heart_fan/" rel="noreferrer noopener" target="_blank"><i className="bx bxl-instagram"></i></a>
                    <a href="https://twitter.com/venu_reddy_9493" rel="noreferrer noopener" target="_blank"><i className="bx bxl-twitter"></i></a>
                    <a href="https://www.facebook.com/venureddyvanteru.vanteru/" rel="noreferrer noopener" target="_blank"><i className="bx bxl-facebook"></i></a>
                </div>
            </div>
            <div className="forHeight">
                <div className="background_img">
                    <img src={mixed_clr} alt="background" className="bg" />
                    <img src={profile} alt="profile" className="profile" />
                </div>
            </div>
        </div>
    )
}
export default Home