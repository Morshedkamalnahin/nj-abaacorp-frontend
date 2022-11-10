import React from 'react'
import UseProject from '../../Hooks/UseProject'
// import SingleProject from '../SingleProject/SingleProject'

const OurProjects = () => {
    const {projects} = UseProject()
    return (

        <div className="uk-panel uk-panel-box uk-panel-box-primary tm-instagram-pics">
            <h3 className="uk-panel-title">Our Leatest Projects</h3>
            <div className="uk-slidenav-position" data-uk-slider>
                <div className="uk-slider-container">
                    <ul className="uk-slider tm-instagram-size-large">
                        {
                            projects ? projects.map(project => <li key={project._id}
                                className="uk-width-1-1 uk-width-small-1-2 uk-width-medium-1-2 uk-width-large-1-3 uk-width-xlarge-1-3">
                                <a href={project.link}><img
                                    src={` data:image/jpeg;base64,${project.img}`}
                                    alt="" /></a>
                            </li>) : <h3>projects loading...</h3>
                        }
                    </ul>
                </div>
                <a href="#" className="uk-slidenav uk-slidenav-contrast uk-slidenav-previous"
                    data-uk-slider-item="previous"></a>
                <a href="#" className="uk-slidenav uk-slidenav-contrast uk-slidenav-next"
                    data-uk-slider-item="next"></a>
            </div>
        </div>

    )
}

export default OurProjects