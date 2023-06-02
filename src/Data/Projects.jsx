import "./project.css"
import myntra_sc from "../MainImages/myntra_sc.png"
import website from "../MainImages/website.png"
import journal from "../MainImages/journal.png"
import navbars from "../MainImages/Navbars.png"
import netflex from "../MainImages/netflex.png"
import crudOperations from "../MainImages/crudOp.png"
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
                    </a>
                    <a href="https://soft-crostata-0fdacf.netlify.app/" rel="noreferrer" target="_blank" className="project-box ecommerce">
                        <img src={website} alt="img" />
                    </a>
                    <a href="https://netflix-clone-4932c.web.app/" rel="noreferrer" target="_blank" className="project-box ott">
                        <img src={netflex} alt="img" />
                    </a>
                    <a href="/" rel="noreferrer" target="_blank" className="project-box others">
                        <img src={crudOperations} alt="img" />
                    </a>
                    <a href="https://ieeexplore.ieee.org/document/10074219" rel="noreferrer" target="_blank" className="project-box journal">
                        <img src={journal} alt="img" />
                    </a>
                    <a href="/" rel="noreferrer" target="_blank" className="project-box others">
                        <img src={navbars} alt="img" />
                    </a>
                </div>
            </section>
        </>
    )
}
export default Projects