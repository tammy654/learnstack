import React from 'react'
import './HomeWhyChooseUs.css'
import { FaCheck, FaPlus } from 'react-icons/fa'

const HomeWhyChooseUs = () => {
    return (
        <div className='home-why-choose-us'>
            <div>
                <img src="../Rectangle 4337.png" alt="" />
                <h2>Why Choose Us</h2>
                <h5>Empowering Your Financial Freedom</h5>
                <p>
                    Choosing Learn Stack for your tech education means embarking on a transformative learning  journey  tailored to modern industry demands. Our academy stands out for its commitment to providing  top-tier education, fostering innovation, and preparing students for dynamic tech careers.
                </p>
                <img src="../Group 1037.png" alt="" />
            </div>
            <div>
                <div className='abs-img'>
                    <img src="../Frame 2598.png" alt="" />
                </div>
                <div className='home-why-choose-us-items'>
                    <div className="home-why-choose-us-item">
                        <span className='first-part'><span className='item-check-box'> <FaCheck /> </span><span>Industry-Relevant Curriculum</span></span><span className='plus-btn'><FaPlus /> </span>
                    </div>
                    <div className="home-why-choose-us-item">
                        <span className='first-part'><span className='item-check-box'> <FaCheck /> </span><span>Expert Instructors </span></span><span className='plus-btn'><FaPlus /> </span>
                    </div>
                    <div className="home-why-choose-us-item">
                        <span className='first-part'><span className='item-check-box'> <FaCheck /> </span><span>Hands-On Learning</span></span><span className='plus-btn'><FaPlus /> </span>
                    </div>
                    <div className="home-why-choose-us-item">
                        <span className='first-part'><span className='item-check-box'> <FaCheck /> </span><span>Career Guidance</span></span><span className='plus-btn'><FaPlus /> </span>
                    </div>
                    <div className="home-why-choose-us-item">
                        <span className='first-part'><span className='item-check-box'> <FaCheck /> </span><span>Flexible Learning Options</span></span><span className='plus-btn'><FaPlus /> </span>
                    </div>
                    <div className="home-why-choose-us-item">
                        <span className='first-part'><span className='item-check-box'> <FaCheck /> </span><span>Cutting-Edge Facilities</span></span><span className='plus-btn'><FaPlus /> </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeWhyChooseUs