import React from 'react'
import Banner from '../components/home/Banner'
import HeroSection from '../components/home/HeroSection'
import Feature from '../components/home/Feature'
import Testimonals from '../components/home/Testimonals'
import CTA from '../components/home/CTA'
import Footer from '../components/home/Footer'

const Home = () => {
  return (
    <>
    <Banner />
    <HeroSection />
    <Feature />
    <Testimonals />
    <CTA />
    <Footer />
    </>
  )
}

export default Home