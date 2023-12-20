import React from 'react';
import './HeroSectionStyle.css'

const HeroSection = () => {

  return (
    <div className='hero-section'>
       <div className='hero-section-image1'>
        <img src="../heroimage1.png" className='heroImage1' alt="" style={{ marginLeft: '-50px', maxWidth: '400px' }} />
        <img src="../Group 38159.png" alt="" className='rotate-img' style={{zIndex: '-200', display: 'inline-block', position: 'absolute', top: '50px', right: '40px', maxWidth: '350px'}}/>
       <div className='panel2'> <button className="btn">Join Learn Stack</button></div>
        <div className="panel1">
          <img src="../Frame 2106.png" alt="" />
          
          <span><b>10K + STUDENTS</b></span><br /><span className='rating'><small>5.00 &emsp;</small><img src="../Frame 35663.png" alt="" /></span>
          
        </div>
      </div>
      <div className='hero-section-text'>
        <img src="../Polygon 1.png" alt="" style={{width: '20px'}}/>
        <h2>
          Ignite Your Tech Journey with <br /><span>Learn Stack</span>
        </h2>
        <p>
          Our commitment to premier education empowers minds, shapes futures, and prepares individuals
          for success in the ever-evolving tech landscape. Join us and experience the excellence that
          defines our educational approach.
        </p><br /><br />
        <p>
          <button className='btn'>Explore Courses</button>
        </p>
      </div>
      <div className='hero-section-image'>
        <img src="../heroimage1.png" alt="" />
        <img src="../Group 38159.png" alt="" className='rotate-img' style={{zIndex: '-200', display: 'inline-block', position: 'absolute', top: '100px', right: '20px'}}/>
       <div className='panel2'> <button className="btn">Join Learn Stack</button></div>
        <div className="panel1">
          <img src="../Frame 2106.png" alt="" />
          
          <span><b>10K + STUDENTS</b></span><br /><span className='rating'><small>5.00 &emsp;</small><img src="../Frame 35663.png" alt="" /></span>
          
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
