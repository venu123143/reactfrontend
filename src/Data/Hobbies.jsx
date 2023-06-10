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
                                <p>
                                    I have a deep passion for teaching, and it brings me joy to impart my knowledge.
                                    I have been teaching my friends various technical skills, including SQL, React, and Python.
                                    I firmly believe that teaching others is a powerful way to enhance one's own learning.
                                    I see a beautiful interconnectedness in everything, and I believe that every proficient
                                    developer should possess leadership qualities, which can be nurtured through teaching others.
                                </p>
                            </div>
                        </div>
                        <h4 >teaching</h4>
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
                                <p> Learning is my real hobby. Everyday i use to learn something either it is a technical skill or some other. This habbit i have from my Btech.
                                    I always likes to learn new skills and technologies, youtube and google are my mentors in throughout my learning.
                                    I had learned my first and favorite technical skill Python from youtube itself.
                                </p>
                            </div>
                        </div>
                        <h4 >Learning</h4>
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
                                <p> Before I use to code in python. when i went to bangalore, then i started learning Java and React.
                                    After that i started coding in those languages. Before i use to feel the Java is tough to learn, but after learning i felt That
                                    nothing is tough if you started learning. I can assure my self that i can find bugs or errors in code and i can solve it too very easily.
                                </p>
                            </div>
                        </div>
                        <h4 >Coding</h4>
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
                                <p>
                                    Me Oftenly use to edit the videos in few occations like sister's b'day or friend's b'day or
                                    few festival or few time i use to go for a holiday trip that time i use to record some videos and i use edit it.
                                    I use Kinemaster to edit my videos. I always wants perfection, either it is in coding or editing.</p>
                            </div>
                        </div>
                        <h4 >Editing</h4>
                    </div>
                    {/* 6 */}
                    <div className="flip-card">
                        <div className="flip">
                            {/* front */}
                            <div className='front'>
                                <img src={listensongs} alt="img" />
                            </div>
                            {/* back */}
                            <div className="back">
                                <p> I use to listen songs daily because, I love listening songs that gives my much relaxation from stress and tension.
                                    I always likes to listen Telugu songs but sometimes i use to listen tamil songs too. My favorite mucisians are from
                                    tolliwood only. I likes DSP, Thaman and Keeravani sir's music more and my favorite singers are Rahul sipligunj and Geetha Madhuri. </p>
                            </div>
                        </div>
                        <h4 >Play Games</h4>
                    </div>
                    {/* play games */}
                    <div className="flip-card">
                        <div className="flip">
                            {/* front */}
                            <div className='front'>
                                <img src={playgames} alt="img" />
                            </div>
                            {/* back */}
                            <div className="back">
                                <p> Playing games is more than just a hobby to me; it's a thrilling and immersive experience that brings joy and excitement into my life. 
                                    In Weekends few people will go for a movie. Few people will go to the mall but, me and my friend use to play freefire and this game helps alot to strengthen our friendship.
                                </p>
                            </div>
                        </div>
                        <h4 >Play Games</h4>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hobbies