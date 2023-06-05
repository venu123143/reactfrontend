import { useEffect, useState } from "react"
import image from "../MainImages/venu_50.jpg"
import { Toaster, toast } from "react-hot-toast";
// import love from "../MainImages/love.jpg"
import "./about.css"
import { useNavigate } from "react-router-dom"
const About = () => {
    const navigate = useNavigate();
    const [profile, setProfile] = useState('')
    const callAboutPage = async () => {
        try {
            const res = await fetch(`${process.env.REACT_APP_SITE}/about`, {
                method: "GET",
                headers: {
                    Accept: "appllication/json",
                    "Content-Type": "application/json",
                },
                credentials: "include"
            })
            const data = await res.json();
            console.log(data);
            if (res.status !== 200) {
                toast(data.error)
                navigate('/login');
            } else {
                setProfile(data)
            }
        } catch (error) {
            console.log(error);
            navigate('/login');
        }
    }
    useEffect(() => {
        callAboutPage();
    },[])
    return (
        <>
            <section id="about-section">
                {/* about left */}
                <Toaster/>
                <div className="about-left">
                    <img src={image} alt="left" />
                </div>
                {/* about right */}
                <div className="about-right">
                    <h4>My Story</h4>
                    <h1>About Me</h1>
                    <p>I am a B.E graduate, looking for a job in the field of software sector
                        that is competitive and inspiring which offers the opportunity of
                        contributing towards development of the organization and enhances the
                        potential for professional and personal satisfaction.</p>
                    <div className="address">
                        <ul>
                            <li>
                                <div className="address-logo">
                                    <i class="fa-solid fa-user"></i>
                                    <p>Name</p>
                                    <p className="seperator">:</p>
                                    <p>{profile.username ? profile.username : "v. venu gopal reddy"}</p>
                                </div>
                            </li>
                            <li>
                                <div className="address-logo">
                                    <i class="fa-brands fa-telegram"></i>
                                    <p>Address</p>
                                    <p className="seperator">:</p>
                                    <p>Brahmanakraka, Nellore</p>
                                </div>
                            </li>
                            <li>
                                <div className="address-logo">
                                    <i class="fa-solid fa-phone"></i>
                                    <p>Phone No</p>
                                    <p className="seperator">:</p>
                                    <p>{profile.phoneno ? profile.phoneno : "8008952100"}</p>
                                </div>
                            </li>
                            <li>
                                <div className="address-logo">
                                    <i class="fa-solid fa-envelope"></i>
                                    <p>Email</p>
                                    <p className="seperator">:</p>
                                    <p>{profile.emailid ? profile.emailid : "venugopalreddy9493@gmail.com"}</p>
                                </div>
                            </li>
                            <li>
                                <div className="address-logo">
                                    <i class="fa-solid fa-person"></i>
                                    <p>Gender</p>
                                    <p className="seperator">:</p>
                                    <p>{profile.gender ? profile.gender : "male"}</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="expertise">
                        <h3>My Expertise</h3>
                        <ul>
                            <li>
                                <div className="expertise-logo">
                                    <i className="fa-brands fa-html5"></i>
                                </div>
                                <p>HTML5</p>
                            </li>
                            <li>
                                <div className="expertise-logo">
                                    <i class="fa-brands fa-css3-alt"></i>
                                </div>
                                <p>CSS3</p>
                            </li>
                            <li>
                                <div className="expertise-logo">
                                    <i className="fab fa-node-js"></i>
                                </div>
                                <p>java script</p>
                            </li>
                            <li>
                                <div className="expertise-logo">
                                    <i className="fab fa-react"></i>
                                </div>
                                <p>React  js</p>

                            </li>
                            <li>
                                <div className="expertise-logo">
                                    <i className="fab fa-java"></i>
                                </div>
                                <p>Java</p>

                            </li>
                            <li>
                                <div className="expertise-logo">
                                    <i className="fab fa-python"></i>
                                </div>
                                <p>Python 3</p>

                            </li>
                        </ul>
                    </div>

                </div>
            </section>
        </>
    )
}
export default About