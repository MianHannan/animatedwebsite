import React from 'react'

import Reveal from 'react-reveal'
import useWebAnimation, { backInLeft, backInRight, heartBeat } from '@wellyshen/use-web-animations'

const Navigation = () => {

    const logo = useWebAnimation(backInLeft);
    const icons = useWebAnimation(backInRight);
    const mobiletoggle = useWebAnimation(backInRight);
    const home = useWebAnimation(heartBeat);
    const service = useWebAnimation(heartBeat);
    const pricing = useWebAnimation(heartBeat);
    const request = useWebAnimation(heartBeat);
    const about = useWebAnimation(heartBeat);
    const contact = useWebAnimation(heartBeat);
    const facebook = useWebAnimation(heartBeat);
    const twitter = useWebAnimation(heartBeat);


    return (

        // <!-- Navigation -->
        // <Reveal >
        <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
            {/* <!-- Text Logo - Use this if you don't have a graphic logo --> */}
            {/* <!-- <a className="navbar-brand logo-text page-scroll" href="index.html">Evolo</a> --> */}

            {/* <!-- Image Logo --> */}
            <a className="navbar-brand logo-image" href="index.html"><img ref={logo.ref} src="images/logo.svg" alt="alternative" /></a>

            {/* <!-- Mobile Menu Toggle Button --> */}
            <button className="navbar-toggler" ref={mobiletoggle.ref} type="button" data-toggle="collapse" data-target="#navbarsExampleDefault"
                aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-awesome fas fa-bars"></span>
                <span className="navbar-toggler-awesome fas fa-times"></span>
            </button>
            {/* <!-- end of mobile menu toggle button --> */}

            <div className="collapse navbar-collapse" ref={icons.ref} id="navbarsExampleDefault">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item" ref={home.ref} onMouseOver={() => { home.getAnimation().play() }}>
                        <a className="nav-link page-scroll" href="#header">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item" ref={service.ref} onMouseOver={() => { service.getAnimation().play() }}>
                        <a className="nav-link page-scroll" href="#services">Services</a>
                    </li>
                    <li className="nav-item" ref={pricing.ref} onMouseOver={() => { pricing.getAnimation().play() }}>
                        <a className="nav-link page-scroll" href="#pricing">Pricing</a>
                    </li>
                    <li className="nav-item" ref={request.ref} onMouseOver={() => { request.getAnimation().play() }}>
                        <a className="nav-link page-scroll" href="#request">Request</a>
                    </li>

                    {/* <!-- Dropdown Menu --> */}
                    <li className="nav-item dropdown" ref={about.ref} onMouseOver={() => { about.getAnimation().play() }} >
                        <a className="nav-link dropdown-toggle page-scroll" href="#about" id="navbarDropdown" role="button"
                            aria-haspopup="true" aria-expanded="false">About</a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#"><span className="item-text">Terms
                            Conditions</span></a>
                            <div className="dropdown-items-divide-hr"></div>
                            <a className="dropdown-item" href="#"><span className="item-text">Privacy
                            Policy</span></a>
                        </div>
                    </li>
                    {/* <!-- end of dropdown menu --> */}

                    <li className="nav-item" ref={contact.ref} onMouseOver={() => { contact.getAnimation().play() }}>
                        <a className="nav-link page-scroll" href="#contact">Contact</a>
                    </li>
                </ul>
                <span className="nav-item social-icons">
                    <span className="fa-stack" ref={facebook.ref} onMouseOver={() => { facebook.getAnimation().play() }}>
                        <a href="#your-link">
                            <i className="fas fa-circle fa-stack-2x facebook"></i>
                            <i className="fab fa-facebook-f fa-stack-1x"></i>
                        </a>
                    </span>
                    <span className="fa-stack" ref={twitter.ref} onMouseOver={() => { twitter.getAnimation().play() }}>
                        <a href="#your-link">
                            <i className="fas fa-circle fa-stack-2x twitter"></i>
                            <i className="fab fa-twitter fa-stack-1x"></i>
                        </a>
                    </span>
                </span>
            </div>
        </nav>
        // </Reveal>
        // {/* <!-- end of navbar -->
        // <!-- end of navigation --> */}
    )
}

export default Navigation
