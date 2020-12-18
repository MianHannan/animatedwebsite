import React from 'react'

const Customers = () => {
    return (
        // <!-- Customers -->
        <div className="slider-1">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h5>Trusted By</h5>

                        {/* <!-- Image Slider --> */}
                        <div className="slider-container">
                            <div className="swiper-container image-slider">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <div className="image-container">
                                            <img className="img-responsive" src="images/customer-logo-1.png" alt="alternative" />
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="image-container">
                                            <img className="img-responsive" src="images/customer-logo-2.png" alt="alternative" />
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="image-container">
                                            <img className="img-responsive" src="images/customer-logo-3.png" alt="alternative" />
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="image-container">
                                            <img className="img-responsive" src="images/customer-logo-4.png" alt="alternative" />
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="image-container">
                                            <img className="img-responsive" src="images/customer-logo-5.png" alt="alternative" />
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="image-container">
                                            <img className="img-responsive" src="images/customer-logo-6.png" alt="alternative" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- end of image slider --> */}

                    </div>
                </div>
            </div>
        </div>
        // <!-- end of customers -->
    )
}

export default Customers
