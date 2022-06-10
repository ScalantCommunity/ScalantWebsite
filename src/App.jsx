import React from 'react'
import CTA from './components/CallToAction/CTA'
import Details from './components/Details/Details'
import Features from './components/Features/Features'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  duration: 1200,
  delay: 50,
})

const App = () => {
  return (
    <div className="body-wrap">
      <Header/>
  <main>
    <Hero/>
    <Features/>
    <Details/>
    <CTA/>
  </main>
 <Footer/>
</div>

  )
}

export default App