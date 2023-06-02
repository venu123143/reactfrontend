import { useContext, useState } from "react"
import Login from "./Login"
import "./LoginParent.css"
import { NavLink, useNavigate } from "react-router-dom"
import { context } from "../Data/Myntra"
import { Toaster, toast } from "react-hot-toast"
import { CgSpinner } from 'react-icons/cg';

const LoginParent = () => {
    const { state, dispatch } = useContext(context);
    console.log(state);
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();
    const [values, setValues] = useState({
        username: "",
        password: ""
    })
    const inputs = [
        {
            id: 1,
            name: "username",
            placeholder: "Enter your username",
            type: "text",
            label: "Username: ",
            errorMessage: "Username or password is incorrect",
            required: true
        },
        {
            id: 2,
            name: "password",
            placeholder: "Enter your password",
            type: "password",
            label: "Password: ",
            errorMessage: "Username or password is incorrect",
            required: true
        }
    ]

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const toggleLogin = async (e) => {
        e.preventDefault();
        setLoading(true)
        const { username, password } = values;

        try {
            const res = await fetch(`${process.env.SITE}/login`, {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }) //server dont understand json so, convert to string
            });
            const data = await res.json();
            if (!data) {
                toast.error("server not connected or data not found")
            }
            else if (res.status === 400 || res.status === 401) {
                // alert("server is not running or incorrct password")
                toast.error(data.msg)
                setLoading(false)
            } else {
                dispatch({ type: 'User', payload: true })
                toast.success(data.msg)
                setTimeout(() => {
                    navigate('/')
                }, 1000);
            }
        } catch (err) {
            console.log(err);
            toast.error("server not connected or data not found")

        }
    }
    return (
        <div className="loginparent">
            <Toaster />
            <form method="POST" className="loginform">
                <h1>Login</h1>
                {inputs.map((input) => (
                    <Login key={input.id} {...input} onChange={onChange} />
                ))}
                <button className="button" onClick={toggleLogin}>LOGIN {loading && <CgSpinner size={20} className="spinner" />}</button>
                <div className="anchors">
                    <NavLink to="/register">click here to signup</NavLink>
                    <NavLink to="/otp">login via otp</NavLink>
                </div>
            </form>
        </div>
    )
}
export default LoginParent