import React from 'react';
import { Helmet } from "react-helmet";
import { Outlet} from "react-router-dom";
import {motion} from "framer-motion";
import HeroSection from '../Components/HeroSection'
import HomeStartLearning from '../Components/HomeStartLearning'
import HomeWhyChooseUs from '../Components/HomeWhyChooseUs'


function Home() {
  return (
    <motion.div 
    initial={{width: 0, opacity: 0}}
    animate={{width: "100%", opacity: 1}}
    exit={{ x: window.innerWidth, transition: {
    duration: 0.1, delay: 0}, opacity: 0}} > 
        <Helmet>
            <meta charSet="utf-8" />
            <title>Home - Learnstack</title>
            <link rel="canonical" href="http://learnstack.com/home" />
        </Helmet>
    <div class="homepage-section-three">
     <div class="sub">
        <div class="top">
          <h1 class="sub-title">
            Navigate Through Our <span class="marker"> Ecosystem </span>
            Beyond Learn Stack, <span class="marker"> Our Connected Platforms</span> Await Your Exploration
          </h1>
        </div>
        <div class="bottom">
          <div className='client a w3-col l3 m3 s6'><img src={require("../img/client-logo-1.png")}/></div>
          <div className='client b w3-col l3 m3 s6'><img src={require("../img/client-logo-2.png")}/></div>
          <div className='client c w3-col l3 m3 s6'><img src={require("../img/client-logo-3.png")}/></div>
          <div className='client d w3-col l3 m3 s6'><img src={require("../img/client-logo-4.png")}/></div>
          <div className='client e w3-col l3 m3 s6'><img src={require("../img/client-logo-5.png")}/></div>
          <div className='client f w3-col l3 m3 s6'><img src={require("../img/client-logo-5.png")}/></div>
        </div>
     </div>

    </div>
    <div class="homepage-section-four">
     <div class="sub">
        <div class="top">
          <div class="line"></div>
          <h1 class="sub-heading">
                Categories of courses we offer
          </h1>
        </div>
        <div class="bottom">
          <div class="tag a">
            <div className='box a'>
                <div class="icon"  style={{ background: "#E2D2F5"}}><img src={require("../img/icon-1.png")} style={{ width:'60%' }} /></div>
                <h1 class="sub-title">Web Development</h1>
            </div>
            <div className='box b'>
                <div class="icon"  style={{ background: "#C7CDFD"}}><img src={require("../img/icon-2.png")} style={{ width:'60%' }} /></div>
                <h1 class="sub-title">UI/UX Design</h1>
            </div>
            <div className='box c'>
                <div class="icon" style={{ background: "#E4FCE9"}}><img src={require("../img/icon-3.png")} style={{ width:'60%' }} /></div>
                <h1 class="sub-title">Enterprenuer</h1>
              

            </div>
            <div className='box d'>
                <div class="icon" style={{ background: "#DDE7F5"}}><img src={require("../img/icon-4.png")} style={{ width:'60%' }} /></div>
                <h1 class="sub-title">Cyber Security</h1>
            </div>
          </div>
          <div class="tag b">
            <div className='box e'>
                <div class="icon" style={{ background: "#EBBBE6"}}><img src={require("../img/icon-5.png")} style={{ width:'60%' }} /></div>
                <h1 class="sub-title">Web Development</h1>
            </div>
            <div className='box f'>
                <div class="icon" style={{ background: "#F8E7D3"}}><img src={require("../img/icon-6.png")} style={{ width:'60%' }} /></div>
                <h1 class="sub-title">Web Development</h1>
            </div>
            <div className='box g'>
                <div class="icon" style={{ background: "#FABCDA"}}><img src={require("../img/icon-7.png")} style={{ width:'60%' }} /></div>
                <h1 class="sub-title">Web Development</h1>
            </div>
            <div className='box h'>
                <div class="icon" style={{ background: "#CAEEE1"}}><img src={require("../img/icon-8.png")} style={{ width:'60%' }} /></div>
                <h1 class="sub-title">Web Development</h1>
            </div>
          </div>
        </div>
     </div>

    </div>
    <div class="homepage-section-eight">
      <div class="sub">
        <div class="up">
          <div class="line"></div>
          <h1 class="sub-heading">
                Our Testimonials
          </h1>
          <h1 class="details marker2">See what our students have to say about their transformative learning experiences.</h1>
        </div>
        <div class="bottom">
          <div class="left w3-col l6 m6 s12">
            <div class="box ">
              <div class="overlay"/>
              <div class="img"></div>

            </div>
          </div>
          <div class="right w3-col l6 m6 s12">
            <div class="top">
              <h1 class="sub-title">Floyd Miles</h1>
              <h1 class="details">Student | Front-End Development</h1>
              <i class="fa-solid fa-quote-left float"></i>
            </div>
            <div class="write-up">
              <div class="details">
                Choosing Learn Stack for your tech education means embarking on a transformative learning  journey  tailored to modern industry demands. 
                Our academy stands out for its commitment to providing  top-tier education, fostering innovation, and preparing students for dynamic tech careers.
              </div>
              <div class="swipe-btns">
                <span class="prevbtn">
                  <i class="fa-solid fa-arrow-left"></i>
                </span>
                <span class="nextbtn">
                  <i class="fa-solid fa-arrow-right"></i>
                </span>
              </div>
              
            </div>
          </div>
        </div>
      </div>

    </div>
    <Outlet />
    </motion.div>
  )
}

export default Home