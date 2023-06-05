import React from 'react'
import learning from "../MainImages/learning.jpg"
import listensongs from "../MainImages/listensongs.jpg"
import playgames from "../MainImages/playgames.jpg"
import teaching from "../MainImages/teaching.jpg"
import editing from "../MainImages/editing.jpg"
import coding from "../MainImages/coding.jpg"
// hobbies and qualities
import "./hobbies.css"
const Hobbies = () => {
    return (
        <>
            {/* <h1 style={{ textAlign: 'center', color: 'white' }}>my Hobbies</h1> */}

            <div className='hobbies-parent'>
                <div className="hobbies">
                    <div className="flip-card">
                        {/* 1  */}
                        <div className="flip">
                            {/* front */}
                            <div className='front'>
                                <img src={teaching} alt="img" />
                            </div>
                            {/* back */}
                            <div className="back">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur incidunt a magni, corporis amet laborum doloribus
                                    aspernatur odio quaerat dolore architecto? Perferendis expedita voluptatum rem pariatur est sunt facere natus dolore reprehenderit,
                                    ias error consectetur porro id non hic quos
                                    necessitatibus quibusdam accusantium, amet eligendi, quas nihil dolorum! Ea doloribus, molestiae maiores amet eaque
                                    dolorem voluptas sapiente quam, optio nihil impedit voluptates.</p>
                            </div>
                        </div>
                        <h4 style={{ color: 'white', textAlign: 'center' }}>teaching</h4>
                    </div>
                    {/* 2 */}
                    <div className="flip-card">
                        <div className="flip">
                            {/* front */}
                            <div className='front'>
                                <img src={learning} alt="img" />
                            </div>
                            {/* back */}
                            <div className="back">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur incidunt a magni, corporis amet laborum doloribus
                                    aspernatur odio quaerat dolore architecto? Perferendis expedita voluptatum rem pariatur est sunt facere natus dolore reprehenderit,
                                    facilis ipsa maiores libero repudiandae animi eum ducimus corporis! Optio debitis, veritatis porro recusandae esse totam
                                    dolorum! Ea doloribus, molestiae maiores amet eaque
                                    dolorem voluptas sapiente quam, optio nihil impedit voluptates.</p>
                            </div>
                        </div>
                        <h4 style={{ color: 'white', textAlign: 'center' }}>Learning</h4>
                    </div>
                    {/* 3 */}
                    <div className="flip-card">
                        <div className="flip">
                            {/* front */}
                            <div className='front'>
                                <img src={coding} alt="img" />
                            </div>
                            {/* back */}
                            <div className="back">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur incidunt a magni, corporis amet laborum doloribus
                                    aspernatur odio quaerat dolore architecto? Perferendis expedita voluptatum rem pariatur est sunt facere natus dolore reprehenderit,
                                    facilis ipsa maiores libero repudiandae animi eum ducimus corporis! Optio debitis, veritatis porro recusandae esse totam
                                    dolorum! Ea doloribus, molestiae maiores amet eaque
                                    dolorem voluptas sapiente quam, optio nihil impedit voluptates.</p>
                            </div>
                        </div>
                    <h4 style={{ color: 'white', textAlign: 'center' }}>Coding</h4>
                    </div>
                    {/* 4 */}
                    <div className="flip-card">
                        <div className="flip">
                            {/* front */}
                            <div className='front'>
                                <img src={editing} alt="img" />
                            </div>
                            {/* back */}
                            <div className="back">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur incidunt a magni, corporis amet laborum doloribus
                                    aspernatur odio quaerat dolore architecto? Perferendis expedita voluptatum rem pariatur est sunt facere natus dolore reprehenderit,
                                    estias error consectetur porro id non hic quos
                                    necessitatibus quibusdam accusantium, amet eligendi, quas nihil dolorum! Ea doloribus, molestiae maiores amet eaque
                                    dolorem voluptas sapiente quam, optio nihil impedit voluptates.</p>
                            </div>
                        </div>
                        <h4 style={{ color: 'white', textAlign: 'center' }}>Editing</h4>
                    </div>
                    {/* 5 */}
                    <div className="flip-card">
                        <div className="flip">
                            {/* front */}
                            <div className='front'>
                                <img src={listensongs} alt="img" />
                            </div>
                            {/* back */}
                            <div className="back">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur incidunt a magni, corporis amet laborum doloribus
                                    aspernatur odio quaerat dolore architecto? Perferendis expedita voluptatum rem pariatur est sunt facere natus dolore reprehenderit,
                                    nsequatur,repudiandae molestias error consectetur porro id non hic quos
                                    necessitatibus quibusdam accusantium, amet eligendi, quas nihil dolorum! Ea doloribus, molestiae maiores amet eaque
                                    dolorem voluptas sapiente quam, optio nihil impedit voluptates.</p>
                            </div>
                        </div>
                        <h4 style={{ color: 'white', textAlign: 'center' }}>listen songs</h4>
                    </div>
                    {/* 6 */}
                    <div className="flip-card">
                        <div className="flip">
                            {/* front */}
                            <div className='front'>
                                <img src={playgames} alt="img" />
                            </div>
                            {/* back */}
                            <div className="back">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur incidunt a magni, corporis amet laborum doloribus
                                    aspernatur odio quaerat dolore architecto? Perferendis expedita voluptatum rem pariatur est sunt facere natus dolore reprehenderit,
                                    dae molestias error consectetur porro id non hic quos
                                    necessitatibus quibusdam accusantium, amet eligendi, quas nihil dolorum! Ea doloribus, molestiae maiores amet eaque
                                    dolorem voluptas sapiente quam, optio nihil impedit voluptates.</p>
                            </div>
                        </div>
                        <h4 style={{ color: 'white', textAlign: 'center' }}>Play Games</h4>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hobbies