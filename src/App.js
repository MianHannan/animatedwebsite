import React from 'react'

//Components
import Preloader from './component/Preloader'
import Navigation from './component/Navigation'
import Header from './component/Header'
import Customers from './component/Customers'
import Services from './component/Services'
import Details from './component/Details'
import Pricing from './component/Pricing'
import Request from './component/Request'
import Video from './component/Video'
import Testimonials from './component/Testimonials'
import About from './component/About'
import Contact from './component/Contact'
import Footer from './component/Footer'
import Copyright from './component/Copyright'

//Animation Library
import Zoom from 'react-reveal/Zoom'
import Bounce from 'react-reveal/Bounce'


function App() {
  return (
    <div>
      {/* <Preloader /> */}
      <Navigation />
      <Header />
      <Zoom bottom>
        <Customers />
      </Zoom>
      <Services />
      <Details />
      <Pricing />
      <Request />
      <Zoom>
        <Video />
      </Zoom>
      <Testimonials />
      <About />
      <Contact />
      <Footer />
      <Bounce bottom>
        <Copyright />
      </Bounce>
    </div>
  );
}

export default App;
