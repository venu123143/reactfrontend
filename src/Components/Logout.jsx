import { useEffect, useContext } from "react"
import { context } from "../Data/Myntra"
import { useNavigate } from "react-router-dom"
const Logout = () => {
    let navigate = useNavigate();
    const { state, dispatch } = useContext(context);
    console.log(state);
    useEffect(() => {
        fetch(`${process.env.REACT_APP_SITE}/logout`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                "Content-type": "application/json"
            },
            credentials: "include"
        }).then((res) => {
            dispatch({ type: 'User', payload: false })
            navigate("/login")
            if (res.status !== 200) {
                const error = new Error(res.error);
                throw error
            }
        }).catch((err)=>{
            console.log(err);
        })

    },[])
    return (
        <div>
            <>
                <h1>User Logged out sucessfully</h1>
            </>
        </div>
    )
}
export default Logout