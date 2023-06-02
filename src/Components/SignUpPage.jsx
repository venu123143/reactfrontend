
import { useState } from "react"
import "./signuppage.css"
const SignUpPage=(props)=>{
    const {label,errorMessage, onChange, ...inputProps} = props
    const [focus, setFocus] = useState(false)
    const handleFocus=()=>{
        setFocus(true)
    }
    return(
        <div className="signuppage">
            <label htmlFor="">{label} <sup>*</sup> </label>
            <input className="input" {...inputProps}
             onChange={onChange }
             onBlur={handleFocus}
             focused={focus.toString()}
             onFocus={()=>inputProps.name==="confirmPassword" && setFocus(true)}/>
            <span>{errorMessage}</span>
        </div>
    )
}
export default SignUpPage