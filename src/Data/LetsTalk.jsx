import { useContext, useEffect, useState } from "react"
import "./letstalk.css"
import { Toaster, toast } from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import ReactPaginate from 'react-paginate';
import { context } from "./Myntra";
const LetsTalk = () => {
    const navigate = useNavigate()
    const [message, setMessage] = useState([])
    const [count, setCount] = useState(1)
    const { state, dispatch } = useContext(context);
    console.log(state);
    var currentpage = null;
    var limit = null;

    const filterLikes=async (value)=>{
        const res = await fetch(`${process.env.REACT_APP_SITE}/sortdata?likes=${value}&page=${state}&limit=${limit}`, {
            method: "GET",
            headers: {
                Accept: "appllication/json",
                "Content-Type": "application/json",
            },
            credentials: "include"
        })
        const data = await res.json();
        setMessage(data)
    }
    const filterDate= async (value)=>{
        const res = await fetch(`${process.env.REACT_APP_SITE}/sortdate?date=${value}&page=${state}&limit=${limit}`, {
            method: "GET",
            headers: {
                Accept: "appllication/json",
                "Content-Type": "application/json",
            },
            credentials: "include"
        })
        const data = await res.json();
        setMessage(data)
    }
    const filterData=(e)=>{
        // filterSearch(e.target.value)
        switch (e.target.value) {
            case "love":
                return filterLikes(e.target.value)
            case "like":
                return filterLikes(e.target.value)
            case "dislike":
                return filterLikes(e.target.value)
            case "createdAT":
                return filterDate(e.target.value)
            case "message":
                return filterDate(e.target.value)
            default:
                return null;
        }
    }
    const callLetsTalk = async () => {
        try {
            const res = await fetch(`${process.env.REACT_APP_SITE}/letstalk?page=${currentpage}&limit=${limit}`, {
                method: "GET",
                headers: {
                    Accept: "appllication/json",
                    "Content-Type": "application/json",
                },
                credentials: "include"
            })
            // it is array [data, count]
            const ans = await res.json();
            limit = ans[2]
            if (res.status !== 200) {
                toast.error(ans[0].error)
                setTimeout(() => {
                    navigate('/login');
                }, 1000);
            } else {
                setMessage(ans[0])
                setCount(ans[1])
            }
        } catch (error) {
            console.log(error);

        }
    }
    const handlePageClick = async (e) => {
        currentpage = e.selected + 1
        dispatch({ type: 'PageNo', payload: currentpage })
        try {
            const res = await fetch(`${process.env.REACT_APP_SITE}/letstalk?page=${currentpage}&limit=${limit}`, {
                method: "GET",
                headers: {
                    Accept: "appllication/json",
                    "Content-Type": "application/json",
                },
                credentials: "include"
            })
            // it is array [data, count]
            const ans = await res.json();
            limit = ans[2]
            if (res.status !== 200) {
                toast.error(ans[0].error)
                setTimeout(() => {
                    navigate('/login');
                }, 1000);
            } else {
                setMessage(ans[0])
                setCount(ans[1])
            }
        } catch (error) {
            console.log(error);
        }
    }
    const clickLove = (type, id) => {
        getSetData(type, id)
    }
    const clickLike = (type, id) => {
        getSetData(type, id)
    }
    const clickDisLike = (type, id) => {
        getSetData(type, id)
    }
    useEffect(() => {
        callLetsTalk();
    }, [])

    const getSetData = async (type, id) => {
        try {
            const res = await fetch(`${process.env.REACT_APP_SITE}/${type}/${id}?page=${state}&limit=${limit}`, {
                method: 'GET',
                headers: { "Content-Type": "application/json" },
                body: null
            })
            const data = await res.json();
            console.log(data);
            setMessage(data)
        } catch (err) {
            console.log(err);
        }
    }

    const deleteMessage = async (user, _id) => {
        if (window.confirm(`do you want to delete`)) {
            try {
                const res = await fetch(`${process.env.REACT_APP_SITE}/deletemsg/${_id}?page=${state}&limit=${limit}`, {
                    method: "DELETE",
                    headers: { 'Content-Type': 'Aplication/json' },
                    body: JSON.stringify({ user: user })
                })
                const data = await res.json();
                setMessage(data.data)
                switch (res.status) {
                    case 401:
                        toast.error(data.error)
                        break;
                    case 422:
                        toast.error(data.error)
                        break;
                    case 200:
                        toast.success(data.error)
                        break;
                    default:
                        toast.error("unkonwn error")
                        break;
                }
            } catch (error) {
                console.log(error)
            }
        }
    }
    return (
        <>
            <section className="letstalk">
                <Toaster />
                <h1>All Message Details</h1>
                <section className="filters">
                    {/* <h3>filters :- </h3> */}
                    <label htmlFor="bylove">
                        <input type="radio" onClick={filterData} name="filter" id="bylove" value="love" /> byLove
                    </label>
                    <label htmlFor="bylike">
                        <input type="radio" onClick={filterData} name="filter" id="bylike" value="like" /> byLike
                    </label>
                    <label htmlFor="bydislike">
                        <input type="radio" onClick={filterData} name="filter" id="bydislike" value="dislike" /> byDislike
                    </label>
                    <label htmlFor="bydate">
                        <input type="radio" onClick={filterData} name="filter" id="bydate" value="createdAT" /> bydate(recent)
                    </label>
                    <label htmlFor="bymsg">
                        <input type="radio" onClick={filterData} name="filter" id="bymsg" value="message" /> bymsg(length)
                    </label>

                </section>
                <section className="msgdata">
                    {
                        message.map((data) => (
                            <div key={data._id} className="message">
                                <div className="msgdetails">
                                    <h4 style={{ background: 'green' }}>Name : {data.name}</h4>
                                    <h4 style={{ background: 'red' }}>Email :{data.email}</h4>
                                    <h4 style={{ background: 'purple' }}>Date : {data.createdAT.split('T')[0]}</h4>
                                    <h4 style={{ background: 'orange' }}>time : {data.createdAT.split('T')[1].split('.')[0]}</h4>
                                    <p>Message : {data.message}</p>
                                </div>
                                <div className="likes">
                                    <div>
                                        <button onClick={() => clickLove("love", data._id)} className="likebuttons">
                                            {data.likes.loveState ? <i className="fa-solid fa-heart colorRed"> </i> : <i className="fa-regular fa-heart "></i>}
                                        </button>
                                        <p>{data.likes.love}</p>
                                    </div>
                                    <div>
                                        <button onClick={() => clickLike("like", data._id)} className="likebuttons">
                                            {data.likes.likeState ? <i className="fa-solid fa-thumbs-up colorRed"></i> : <i className="fa-regular fa-thumbs-up"></i>}
                                        </button>
                                        <p>{data.likes.like}</p>
                                    </div>
                                    <div>
                                        <button onClick={() => clickDisLike("dislike", data._id)} className="likebuttons">
                                            {data.likes.dislikeState ? <i className="fa-solid fa-thumbs-down colorRed"></i> : <i className="fa-regular fa-thumbs-down"></i>}
                                        </button>
                                        <p>{data.likes.dislike}</p>
                                    </div>
                                </div>
                                <div className="deletemsg">
                                    <button onClick={() => deleteMessage(data.user, data._id)}>Delete </button>
                                </div>

                            </div>

                        ))
                    }
                </section>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={count}
                    previousLabel="< previous"
                    renderOnZeroPageCount={null}
                    marginPagesDisplayed={2}
                    containerClassName="pagination justify-content-center"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    activeClassName="active-page"
                />
            </section>
        </>
    )
}
export default LetsTalk