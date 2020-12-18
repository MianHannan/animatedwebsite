import React from 'react'

import Bounce from 'react-reveal/Bounce'
import Zoom from 'react-reveal/Zoom'

const Contact = () => {
    return (
        // <!-- Contact -->
        <div id="contact" className="form-2">
            <div className="container">
                <Bounce bottom>
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>Contact Information</h2>
                            <ul className="list-unstyled li-space-lg">
                                <li className="address">Don't hesitate to give us a call or send us a contact form message</li>
                                <li><i className="fas fa-map-marker-alt"></i>22 Innovative Area, San Francisco, CA 94043, US</li>
                                <li><i className="fas fa-phone"></i><a className="turquoise" href="tel:003024630820">+81 720
                            2212</a>
                                </li>
                                <li><i className="fas fa-envelope"></i><a className="turquoise"
                                    href="mailto:office@evolo.com">office@evolo.com</a></li>
                            </ul>
                        </div>
                    </div>
                </Bounce>
                <div className="row">

                    <Zoom>
                        <div className="col-lg-6">
                            <div className="map-responsive">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.98555098464!2d-122.507640204439!3d37.757814996609724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan+Francisco%2C+CA%2C+USA!5e0!3m2!1sen!2sro!4v1498231462606"
                                    allowfullscreen></iframe>
                            </div>
                        </div>
                    </Zoom>
                    <Bounce right>
                        <div className="col-lg-6">

                            {/* <!-- Contact Form --> */}
                            <form id="contactForm" data-toggle="validator" data-focus="false">
                                <div className="form-group">
                                    <input type="text" className="form-control-input" id="cname" required />
                                    <label className="label-control" for="cname">Name</label>
                                    <div className="help-block with-errors"></div>
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control-input" id="cemail" required />
                                    <label className="label-control" for="cemail">Email</label>
                                    <div className="help-block with-errors"></div>
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control-textarea" id="cmessage" required></textarea>
                                    <label className="label-control" for="cmessage">Your message</label>
                                    <div className="help-block with-errors"></div>
                                </div>
                                <div className="form-group checkbox">
                                    <input type="checkbox" id="cterms" value="Agreed-to-Terms" required />I have read and agree
                        with Evolo's stated <a href="privacy-policy.html">Privacy Policy</a> and <a
                                        href="terms-conditions.html">Terms Conditions</a>
                                    <div className="help-block with-errors"></div>
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="form-control-submit-button">SUBMIT MESSAGE</button>
                                </div>
                                <div className="form-message">
                                    <div id="cmsgSubmit" className="h3 text-center hidden"></div>
                                </div>
                            </form>
                            {/* <!-- end of contact form --> */}

                        </div>
                    </Bounce>
                </div>
            </div>
        </div>
        // <!-- end of form-2 -->
        // <!-- end of contact -->
    )
}

export default Contact
