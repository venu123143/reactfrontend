
import { useContext, useState } from "react"
import "./Navbar.css"
import logo from "./revv-10.jpg"
import Ripple from "./Ripple"
import { Link, NavLink } from "react-router-dom"
import { context } from "../Data/Myntra"
// import Scroll from 'react-scroll'
// const ScrollLink = Scroll.ScrollLink
const Navbar = () => {
    const [turnOn, setTurnON] = useState(false)
    const { state, dispatch } = useContext(context);
    const [value,setValue] = useState("");
    // console.log(dispatch);
    const search=(e)=>{
        setValue(e.target.value.toLowerCase())
    }
    const button=()=>{
        dispatch({ type: 'Search', payload: value })
    }
    // console.log(state);
    return (
        <>
            <div className="navhead">
                <nav className="navbar">
                    <section className="home_section">
                        <button className="toggleBtn" onClick={() => setTurnON(!turnOn)}>
                            {turnOn ? <i className="fa-solid fa-times"></i> : <i className="fa-solid fa-bars"></i>}
                        </button>

                        <Link className="logo" to="/">
                            <img src={logo} alt="myntralogo" />
                        </Link>
                        <div className={turnOn ? "nav_elementsON" : "nav_elements"} onClick={() => setTurnON(false)}>
                            <ul>
                                <li><NavLink to="/" className="active">Home</NavLink></li>
                                <li><NavLink to="about">About</NavLink></li>
                                <li><NavLink to="/contact">Contact</NavLink></li>
                                <li><NavLink to="/projects">Projects</NavLink></li>
                                <li><NavLink to="/skills">Skills</NavLink></li>
                                <li><NavLink to="/hobbies">Hobbies</NavLink></li>
                            </ul>
                        </div>
                    </section>
                    <section className="search_section">
                        <div className="search">
                            <i onClick={button} className="fa-solid fa-magnifying-glass"></i>
                            <input type="text" value={value} onChange={search} placeholder="I'm not Working so don't type" />
                        </div>
                        <div className="login_btn">
                            <button className="loginbtn">
                                {state ?
                                    <Link to="/logout" className="linktag">Out<Ripple color={"#1fecf9"} duration={2000} /> <i className="fa-solid fa-right-to-bracket" /></Link>
                                    :
                                    <Link to="/login" className="linktag">LOGIN<Ripple color={"#1fecf9"} duration={2000} /></Link>
                                }
                            </button>
                        </div>
                    </section>
                </nav>
            </div>
        </>
    )
}
export default Navbar