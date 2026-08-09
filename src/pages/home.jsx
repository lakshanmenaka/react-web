import React from 'react'
import "./home.css"
import  Navbar from '../Components//Navbar'
import  Hero from '../Components/hero'
import  OurServices from '../Components/OurServices'
import  Footer from '../Components/Footer'
import { Link } from "react-router-dom";



function home() {

  return (
   <div>
   <Navbar/>
    <Hero/>
    <OurServices/>
    <Footer/>

 
   </div>
  )
}

export default home