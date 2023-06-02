import { useState } from "react"
import SignUpPage from "./SignUpPage"
import "./signupparent.css"
import { Toaster, toast } from "react-hot-toast"

import { NavLink, useNavigate } from "react-router-dom"

const SignUpParent = () => {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        username: "",
        phoneno: "",
        emailid: "",
        password: "",
        confirmPassword: "",
        gender: ""
    })
    const inputs = [
        {
            id: 1,
            name: "username",
            placeholder: "Enter your username",
            type: "text",
            label: "Username: ",
            errorMessage: "username should be 3-16 characters and shouldn't contain any special characters and spaces.!",
            required: true,
            pattern: "^[A-Za-z0-9]{3,16}$"
        },
        {
            id: 2,
            name: "phoneno",
            placeholder: "Enter your phoneno",
            type: "tel",
            label: "Phone No: ",
            errorMessage: "Enter Valid Phone Number",
            required: true,
            pattern: `^[0-9]{10}$`,
            maxLength: 10

        },
        {
            id: 3,
            name: "emailid",
            placeholder: "Enter your email",
            type: "email",
            label: "Email: ",
            errorMessage: "Enter a Valid Email",
            required: true
        },
        {
            id: 4,
            name: "password",
            placeholder: "Enter your password",
            type: "password",
            label: "Password: ",
            errorMessage: " password length should be 8-20 characters and must contain atleast single number, single character, single special character",
            required: true,
            pattern: `^(?=.*[0-9])(?=.*[A-Za-z])(?=.*[@$!%*#?&_])[a-zA-Z0-9@$!%*#?&_]{8,20}$`
        },
        {
            id: 5,
            name: "confirmPassword",
            placeholder: "Renter the password",
            type: "password",
            label: "Confirm Password: ",
            errorMessage: "password must match",
            required: true,
            pattern: values.password
        }
    ]
    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })

    }
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    const submitData = async (e) => {
        e.preventDefault()
        const { username, phoneno, emailid, password, confirmPassword, gender } = values
        const res = await fetch(`${process.env.SITE}/register`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, phoneno, emailid, password, confirmPassword, gender })
        });
        const data = await res.json();
        switch (res.status) {
            case 422:
                toast.error(data.error)
                break;
            case 401:
                toast.error(data.error)
                break;
            case 201:
                toast.success(data.error)
                setTimeout(() => {
                    navigate('/login')
                }, 500);
                break;
            default:
                toast.error("Check fields once again.")
                break;
        }

    }
    return (
        <div className="signupparent">
            <Toaster containerClassName="toaster"/>
            <form onSubmit={handleSubmit} action="" method="POST" className="form">
                <h1>Register</h1>
                {inputs.map((input) => (
                    <SignUpPage key={input.id}  {...input} onChange={onChange} />

                ))}
                <div className="radiobtn">
                    <div><input type="radio" name="gender" value="male" required onChange={onChange} /> male</div>
                    <div><input type="radio" name="gender" value="female" required onChange={onChange} /> female</div>
                    <div><input type="radio" name="gender" value="other" required onChange={onChange} /> other</div>
                </div>
                <button className="button" onClick={submitData}>SUBMIT</button>
                <NavLink to="/login">click here to login</NavLink>
            </form>
        </div>
    )
}

export default SignUpParent