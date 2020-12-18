import React from 'react'

import Zoom from 'react-reveal/Zoom'
import Bounce from 'react-reveal/Bounce'

const About = () => {
    return (
        // <!-- About -->
        <div id="about" className="basic-4">
            <div className="container">
                <Zoom>
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>About The Team</h2>
                            <p className="p-heading p-large">Meat our team of specialized marketers and business developers which
                    will help you research new products and launch them in new emerging markets</p>
                        </div>
                    </div>
                </Zoom>
                <div className="row">
                    <div className="col-lg-12">

                        {/* <!-- Team Member --> */}

                        <Bounce left>
                            <div className="team-member">
                                <div className="image-wrapper">
                                    <img className="img-fluid" src="images/team-member-1.svg" alt="alternative" />
                                </div>
                                <p className="p-large"><strong>Lacy Whitelong</strong></p>
                                <p className="job-title">Business Developer</p>
                                <span className="social-icons">
                                    <span className="fa-stack">
                                        <a href="#your-link">
                                            <i className="fas fa-circle fa-stack-2x facebook"></i>
                                            <i className="fab fa-facebook-f fa-stack-1x"></i>
                                        </a>
                                    </span>
                                    <span className="fa-stack">
                                        <a href="#your-link">
                                            <i className="fas fa-circle fa-stack-2x twitter"></i>
                                            <i className="fab fa-twitter fa-stack-1x"></i>
                                        </a>
                                    </span>
                                </span>
                            </div>
                        </Bounce>
                        {/* <!-- end of team member --> */}

                        {/* <!-- Team Member --> */}
                        <Bounce left>
                            <div className="team-member">
                                <div className="image-wrapper">
                                    <img className="img-fluid" src="images/team-member-2.svg" alt="alternative" />
                                </div>
                                <p className="p-large"><strong>Chris Brown</strong></p>
                                <p className="job-title">Online Marketer</p>
                                <span className="social-icons">
                                    <span className="fa-stack">
                                        <a href="#your-link">
                                            <i className="fas fa-circle fa-stack-2x facebook"></i>
                                            <i className="fab fa-facebook-f fa-stack-1x"></i>
                                        </a>
                                    </span>
                                    <span className="fa-stack">
                                        <a href="#your-link">
                                            <i className="fas fa-circle fa-stack-2x twitter"></i>
                                            <i className="fab fa-twitter fa-stack-1x"></i>
                                        </a>
                                    </span>
                                </span>
                            </div>
                        </Bounce>
                        {/* <!-- end of team member --> */}

                        {/* <!-- Team Member --> */}
                        <Bounce right>
                            <div className="team-member">
                                <div className="image-wrapper">
                                    <img className="img-fluid" src="images/team-member-3.svg" alt="alternative" />
                                </div>
                                <p className="p-large"><strong>Sheila Zimerman</strong></p>
                                <p className="job-title">Software Engineer</p>
                                <span className="social-icons">
                                    <span className="fa-stack">
                                        <a href="#your-link">
                                            <i className="fas fa-circle fa-stack-2x facebook"></i>
                                            <i className="fab fa-facebook-f fa-stack-1x"></i>
                                        </a>
                                    </span>
                                    <span className="fa-stack">
                                        <a href="#your-link">
                                            <i className="fas fa-circle fa-stack-2x twitter"></i>
                                            <i className="fab fa-twitter fa-stack-1x"></i>
                                        </a>
                                    </span>
                                </span>
                            </div>
                        </Bounce>
                        {/* <!-- end of team member --> */}

                        {/* <!-- Team Member --> */}
                        <Bounce right>
                            <div className="team-member">
                                <div className="image-wrapper">
                                    <img className="img-fluid" src="images/team-member-4.svg" alt="alternative" />
                                </div>
                                <p className="p-large"><strong>Mary Villalonga</strong></p>
                                <p className="job-title">Product Manager</p>
                                <span className="social-icons">
                                    <span className="fa-stack">
                                        <a href="#your-link">
                                            <i className="fas fa-circle fa-stack-2x facebook"></i>
                                            <i className="fab fa-facebook-f fa-stack-1x"></i>
                                        </a>
                                    </span>
                                    <span className="fa-stack">
                                        <a href="#your-link">
                                            <i className="fas fa-circle fa-stack-2x twitter"></i>
                                            <i className="fab fa-twitter fa-stack-1x"></i>
                                        </a>
                                    </span>
                                </span>
                            </div>
                        </Bounce>
                        {/* <!-- end of team member --> */}

                    </div>
                </div>
            </div>
        </div>
        // <!-- end of about -->
    )
}

export default About
