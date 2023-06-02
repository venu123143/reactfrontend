import { Route, Routes} from "react-router-dom"
import LoginParent from "../Components/LoginParent"
import Home from "./Home"
import SignUpParent from "../Components/SignUpParent"
import LoginOtp from "./LoginOtp"
import About from "./About"
import Contact from "./Contact"
import Errorpage from "../Components/Errorpage"
import Skills from "./Skills"
import Projects from "./Projects"
import Navbar from "./Navbar"
import Logout from "../Components/Logout"
import { createContext, useReducer } from "react"
import { initialState,reducer } from "../Reducer/UseReducer"
import LetsTalk from "./LetsTalk"
export const context = createContext();
export const Routing = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<LoginParent />} />
                <Route path="/register" element={<SignUpParent />} />
                <Route path="/otp" element={<LoginOtp />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/letstalk" element={<LetsTalk />} />
                <Route path="*" element={<Errorpage />}></Route>
            </Routes>
        </>
    )
}


const Myntra = () => {
const [ state,dispatch ] = useReducer(reducer,initialState)
    return (
        <>
            <context.Provider value= {{state, dispatch}}>
                <Navbar />
                <Routing />
            </context.Provider>

        </>
    )
}
export default Myntra