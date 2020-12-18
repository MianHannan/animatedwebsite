import React from 'react'

import Bounce from 'react-reveal/Bounce'

const Footer = () => {
    return (
        // <!-- Footer -->
        <div className="footer">
            <div className="container">
                <div className="row">
                    <Bounce left>
                        <div className="col-md-4">
                            <div className="footer-col">
                                <h4>About Evolo</h4>
                                <p>We're passionate about offering some of the best business growth services for startups</p>
                            </div>
                        </div>
                    </Bounce>
                    <Bounce bottom>
                        <div className="col-md-4">
                            <div className="footer-col middle">
                                <h4>Important Links</h4>
                                <ul className="list-unstyled li-space-lg">
                                    <li className="media">
                                        <i className="fas fa-square"></i>
                                        <div className="media-body">Our business partners <a className="turquoise"
                                            href="#your-link">startupguide.com</a></div>
                                    </li>
                                    <li className="media">
                                        <i className="fas fa-square"></i>
                                        <div className="media-body">Read our <a className="turquoise"
                                            href="terms-conditions.html">Terms
                                    & Conditions</a>, <a className="turquoise" href="privacy-policy.html">Privacy
                                    Policy</a></div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Bounce>
                    <Bounce right>
                        <div className="col-md-4">
                            <div className="footer-col last">
                                <h4>Social Media</h4>
                                <span className="fa-stack">
                                    <a href="#your-link">
                                        <i className="fas fa-circle fa-stack-2x"></i>
                                        <i className="fab fa-facebook-f fa-stack-1x"></i>
                                    </a>
                                </span>
                                <span className="fa-stack">
                                    <a href="#your-link">
                                        <i className="fas fa-circle fa-stack-2x"></i>
                                        <i className="fab fa-twitter fa-stack-1x"></i>
                                    </a>
                                </span>
                                <span className="fa-stack">
                                    <a href="#your-link">
                                        <i className="fas fa-circle fa-stack-2x"></i>
                                        <i className="fab fa-google-plus-g fa-stack-1x"></i>
                                    </a>
                                </span>
                                <span className="fa-stack">
                                    <a href="#your-link">
                                        <i className="fas fa-circle fa-stack-2x"></i>
                                        <i className="fab fa-instagram fa-stack-1x"></i>
                                    </a>
                                </span>
                                <span className="fa-stack">
                                    <a href="#your-link">
                                        <i className="fas fa-circle fa-stack-2x"></i>
                                        <i className="fab fa-linkedin-in fa-stack-1x"></i>
                                    </a>
                                </span>
                            </div>
                        </div>
                    </Bounce>
                </div>
            </div>
        </div>
        // <!-- end of footer -->
        // <!-- end of footer -->
    )
}

export default Footer
