//REACT
import React from 'react'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'

//COMPONENTS
import CTA from './components/CallToAction/CTA'
import Details from './components/Details/Details'
import Features from './components/Features/Features'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Hero  from './components/Hero/Hero'
import AboutUs from './components/AboutUs/AboutUs'
import Brochure from './components/Brochure/Brochure'
import InstagramPosts from './components/InstagramPosts/InstagramPosts'
import TnCRedirect from './components/DiscordRedirect/TncRedirect'
import DiscordReedirect from './components/DiscordRedirect/DiscordReedirect'

//ANIMATION ON SCROLL
import AOS from 'aos';
import 'aos/dist/aos.css';


AOS.init({
  duration: 1200,
  delay: 50,
})

const App = () => {
  return (
    <BrowserRouter>
      <div className="body-wrap">
        <Header/>
        <Switch>
          <Route path="/" exact>
            <main>
              <Hero/>
              <Features/>
              <InstagramPosts/>
              <Details/>
              <CTA/>
            </main>
          </Route>
          <Route path="/aboutus">
            <AboutUs/>
          </Route>
          <Route path='/discord'>
           <DiscordReedirect/>
          </Route>
          <Route path='/tnc'>
           <TnCRedirect/>
          </Route>
          <Route path='/brochure'>
           <Brochure/>
          </Route>
        </Switch>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App