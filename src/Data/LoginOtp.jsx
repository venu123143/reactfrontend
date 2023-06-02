// import Home from "./Home";
import "./LoginOtp.css"

import { useContext, useState } from "react"
import { CgSpinner } from 'react-icons/cg';
import { auth } from "./Firebase"
import { BsFillShieldLockFill, BsTelephoneFill } from "react-icons/bs"
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth"
import { Toaster, toast } from "react-hot-toast";
import OtpInput from "otp-input-react"
import PhoneInput from "react-phone-input-2"
import 'react-phone-input-2/lib/style.css'
import { useNavigate } from "react-router-dom";
import { context } from "./Myntra";

const LoginOtp = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState(null);
    const [otp, setOtp] = useState("");
    const [loading, setLoading] = useState(false)
    const [ph, setPh] = useState("")
    const [showotp, setShowOtp] = useState(false)
    const { state, dispatch } = useContext(context);
    const onSignUp = async () => {
        const res = fetch(`${process.env.SITE}/loginviaotp`, {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ phoneno: ph })
        })
        if ((await res).status === 200) {
            setLoading(true)
            onCaptchVerify()
            const appVerifier = window.recaptchaVerifier
            const formatPh = '+' + ph;
            signInWithPhoneNumber(auth, formatPh, appVerifier)
                .then((confirmationResult) => {
                    window.confirmationResult = confirmationResult;
                    setShowOtp(true)
                    setLoading(false)
                    toast.success("otp sended successfully")
                }).catch((error) => {
                    console.log(error)
                    setLoading(false)
                })
        } else {
            toast.error("please register 1st")
        }
    }
    const onCaptchVerify = () => {
        if (!window.recaptchaVerifier) {
            window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
                'size': 'invisible',
                'callback': (invisible) => {
                    onSignUp()
                },
                'expired-callback': () => {
                }
            }, auth);

        }else{
            toast.error("recaptcha verification failed,try again ")
        }
    }
    const onOtpVerify = () => {
        setLoading(true)
        window.confirmationResult.confirm(otp).then(async (res) => {
            setUser(res.user)
            dispatch({ type: 'User', payload: true })
            setTimeout(() => {
                navigate('/')
            }, 1000);
            setLoading(false);
            toast.success("login sucessful :)")

        }).catch(err => {
            toast.error("wrong otp or enter the otp")
            setLoading(false)
        })
    }
    return (
        <>
            <div className="loginviaotp">
                <Toaster />
                <div id="recaptcha-container"></div>
                <div>
                    {
                        <div className="input_data">
                        {showotp ?
                            (<>
                                <div className="lockicon">
                                    <h1>Login</h1>
                                    <BsFillShieldLockFill size={20} />
                                </div>
                                <label htmlFor="ph">Enter your otp : </label> <br />

                                <OtpInput
                                    value={otp}
                                    onChange={setOtp}
                                    OTPLength={6}>
                                    otpType="number"
                                    disabled={false}
                                    autofocus
                                    className="otpdata"
                                </OtpInput> <br />

                                <button onClick={onOtpVerify} className="button">
                                    {loading && <CgSpinner size={20} className="spinner" />
                                    } Verify OTP
                                </button>
                            </>) : (<>
                                <div className="lockicon">
                                    <h1>Login(
                                        <BsTelephoneFill size={20} />
                                        )</h1>
                                </div>
                                <label htmlFor="ph">Enter your number : </label> <br />
                                <PhoneInput
                                    country={"in"}
                                    value={ph}
                                    onChange={setPh}
                                />
                                <button onClick={onSignUp} className="button">

                                    {loading && <CgSpinner size={20} className="spinner" />
                                    } Send OTP
                                </button>
                            </>)
                        }
                    </div>
                    }
                </div>
            </div>
        </>
    )
}
export default LoginOtp