import "./project.css"
import myntra_sc from "../MainImages/myntra_sc.png"
import website from "../MainImages/website.png"
import journal from "../MainImages/journal.png"
import navbars from "../MainImages/Navbars.png"
import netflex from "../MainImages/netflex.png"
import crudOperations from "../MainImages/crudOp.png"
import taskManager from "../MainImages/taskManager.png"
import $ from 'jquery'
const Projects = () => {
    // for filter menu
    $(document).on('click', '.project-filter li', function () {
        $(this).addClass('project-filter-active').siblings().removeClass('project-filter-active')
    })
    // for filter data
    $(document).ready(function () {
        $('.list').click(function () {
            const value = $(this).attr('data-filter');
            if (value === 'all') {
                $('.project-box').show('1000');

            } else {
                $('.project-box').not('.' + value).hide('1000');
                $('.project-box').filter('.' + value).show('1000');
            }
        })
    })
    return (
        <>
            <section id="project">
                <div className="project-heading">
                    <span>this is my portfolio</span>
                    <h3>My Projects</h3>
                </div>
                {/* filter */}
                <ul className="project-filter">
                    <li className="list project-filter-active" data-filter="all">All</li>
                    <li className="list" data-filter="ott">social media</li>
                    <li className="list" data-filter="ecommerce">website</li>
                    <li className="list" data-filter="journal">clg project</li>
                    <li className="list" data-filter="others">others</li>
                </ul>
                {/* images part */}
                <div className="project-container">
                    <a href="https://brilliant-sherbet-d569d2.netlify.app/" rel="noreferrer" target="_blank" className="project-box ecommerce" data-lightbox="work">
                        <img src={myntra_sc} alt="img" />
                        <section>
                            <p>Description: This is the myntra clone which is built on top of react. I had done this in my learning process. Here i had
                                used the own data set which is created my myself.  </p>
                        </section>
                    </a>
                    <a href="https://soft-crostata-0fdacf.netlify.app/" rel="noreferrer" target="_blank" className="project-box ecommerce">
                        <img src={website} alt="img" />
                        <section>
                            <p>Description: This is a sample project which is build for a company drive. here i used the assests which are proided by the perticular company.
                                this is totally frontend project.
                            </p>
                        </section>
                    </a>
                    <a href="https://netflix-clone-4932c.web.app/" rel="noreferrer" target="_blank" className="project-box ott">
                        <img src={netflex} alt="img" />
                        <section>
                            <p>Description: This is the Netflix clone which is built on top of react. Here i had used the TMDB api as backend and i used the
                                axios to fetch the data from backend. </p>
                        </section>
                    </a>
                    <a href="https://taskcreation.onrender.com/" rel="noreferrer" target="_blank" className="project-box ecommerce">
                        <img src={taskManager} alt="img" />
                        <section>
                            <p>Description: This is the simple task manager todo application which is built on top of react.
                                Here i had used the express for backend, mongodb for database and i used the
                                axios to fetch the data from backend.all 4 CRUD operations are performed in this simple project. </p>
                        </section>
                    </a>
                    <a href="/" rel="noreferrer" target="_blank" className="project-box others">
                        <img src={crudOperations} alt="img" />
                        <section>
                            <p>Description: This is the final project during my react js course. we had done the curd operations by creating the local server as backend. it is not support to deploy
                                because the server running on local machine. this project helped a lot in my learning process.
                            </p>
                        </section>
                    </a>
                    <a href="https://ieeexplore.ieee.org/document/10074219" rel="noreferrer" target="_blank" className="project-box journal">
                        <img src={journal} alt="img" />
                        <section>
                            <p>Description : This is about the to predict the accurate Packet Delivery Ratio with the help of the Novel Linear Regression and compared with Lasso regression algorithms.
                                And we got the Accuracy of lasso regression is 96.56 % for corresponding SNR is 4 db.  </p>
                        </section>
                    </a>
                    <a href="/" rel="noreferrer" target="_blank" className="project-box others">
                        <img src={navbars} alt="img" />
                        <section>
                            <p>Description: This is the first simple project which i created during my initial days of learning. here i had created the navbars like Amazon, myntra, Go daddy, spotify and zee5.
                                this is the first achievement for me and which i apppriciation too from my trainer in Jspiders.
                            </p>
                        </section>
                    </a>
                </div>
            </section>

        </>
    )
}
export default Projects