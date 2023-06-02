import { useState } from "react"
import "./contact.css"
// import { useNavigate } from "react-router-dom"
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const Contact = () => {
    const navigate = useNavigate()
    const [details, setDetails] = useState({
        name: "",
        email: "",
        message: ""
    })
    const changeDetails = (e) => {
        setDetails({ ...details, [e.target.name]: e.target.value })
    }
    const onSendMsg = async (e) => {
        e.preventDefault()
        const { name, email, message } = details;
        const res = await fetch(`${process.env.REACT_APP_SITE}/contact`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, message })
        });
        // console.log(res);
        const data = await res.json();
        // console.log(data.error, res.status);
        switch (res.status) {
            case 401:
                toast.error(data.error)
                break;
            case 422:
                toast.error(data.error)
                break;
            case 200:
                setTimeout(() => {
                    navigate('/letstalk')
                }, 1000);
                toast.success(data.error)
                
                break;
            default:
                toast.error(data.error)
        }

    }
    return (
        <>
            <div className="contact" id="contact">
                <Toaster />
                <div className="container">
                    <div className="content">
                        <div className="left-side">
                            {/* address */}
                            <div className="address details">
                                <i className="fa-solid fa-location-dot"></i>
                                <div className="topic">Address</div>
                                <div className="text-one">Brahmnakraka,Nellore</div>
                                <div className="text-two">524223,AP</div>
                            </div>
                            {/* phone */}
                            <div className="phone details">
                                <i className="fa-solid fa-phone"></i>
                                <div className="topic">Phone</div>
                                <div className="text-one">+91 80089 52100</div>
                                <div className="text-two">+91 94936 67687</div>
                            </div>
                            {/* email */}
                            <div className="email details">
                                <i className="fa-solid fa-envelope"></i>
                                <div className="topic">Email</div>
                                <div className="text-one">venugopalreddy9493@gmail.com</div>
                                <div className="text-two">venugopalreddy17@saveetha.com</div>
                            </div>
                        </div>
                        <div className="right-side">
                            <div className="topic-text">Send us a message</div>
                            <p> we are very glad to get feedback from you. you are a valuable user for us. Any queries You have just post here. its my pleasure to reply you back..!</p>

                            <form action="#">
                                <div className="input-box">
                                    <input type="text" placeholder="Enter your name" name="name" onChange={changeDetails} value={details.name} />
                                </div>
                                <div className="input-box">
                                    <input type="email" placeholder="Enter your Email" name="email" onChange={changeDetails} value={details.email} />
                                </div>
                                <div className="input-box message-box">
                                    <textarea onChange={changeDetails} name="message" value={details.message}></textarea>
                                </div>

                                <div className="button">
                                    <input type="button" value="SendNow" onClick={onSendMsg} />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact