import React from 'react'

import Bounce from 'react-reveal/Bounce'

const Details = () => {
    return (
        <div>
            {/* <!-- Details 1 --> */}
            <div className="basic-1">
                <div className="container">
                    <div className="row">
                        <Bounce bottom>
                            <div className="col-lg-6">
                                <div className="text-container">
                                    <h2>Design And Plan Your Business Growth Steps</h2>
                                    <p>Use our staff and our expertise to design and plan your business growth strategy. Evolo team
                        is eager to advise you on the best opportunities that you should look into</p>
                                    <a className="btn-solid-reg popup-with-move-anim" href="#details-lightbox-1">LIGHTBOX</a>
                                </div>
                            </div>
                        </Bounce>
                        <Bounce right>
                            <div className="col-lg-6">
                                <div className="image-container">
                                    <img className="img-fluid" src="images/details-1-office-worker.svg" alt="alternative" />
                                </div>
                            </div>
                        </Bounce>
                    </div>
                </div>
            </div>
            {/* <!-- end of details 1 --> */}


            {/* <!-- Details 2 --> */}
            <div className="basic-2">
                <div className="container">
                    <div className="row">
                        <Bounce left>
                            <div className="col-lg-6">
                                <div className="image-container">
                                    <img className="img-fluid" src="images/details-2-office-team-work.svg" alt="alternative" />
                                </div>
                            </div>
                        </Bounce>
                        <Bounce bottom>
                            <div className="col-lg-6">
                                <div className="text-container">
                                    <h2>Search For Optimization Wherever Is Possible</h2>
                                    <ul className="list-unstyled li-space-lg">
                                        <li className="media">
                                            <i className="fas fa-check"></i>
                                            <div className="media-body">Basically we'll teach you step by step what you need to do</div>
                                        </li>
                                        <li className="media">
                                            <i className="fas fa-check"></i>
                                            <div className="media-body">In order to develop your company and reach new heights</div>
                                        </li>
                                        <li className="media">
                                            <i className="fas fa-check"></i>
                                            <div className="media-body">Everyone will be pleased from stakeholders to employees</div>
                                        </li>
                                    </ul>
                                    <a className="btn-solid-reg popup-with-move-anim" href="#details-lightbox-2">LIGHTBOX</a>
                                </div>
                            </div>
                        </Bounce>
                    </div>
                </div>
            </div>
            {/* <!-- end of details 2 --> */}
        </div>
    )
}

export default Details
