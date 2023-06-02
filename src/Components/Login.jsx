import "./Login.css"
const Login=(props)=>{
    const {label,errorMessage,onChange, ...inputprops} =props
    return(
        <div className="login">
            <label htmlFor="">{label}<sup>*</sup> </label>
            <input className="input" {...inputprops} onChange={onChange}/> 
            <span>{errorMessage}</span>
        </div>
    )
}
export default Login