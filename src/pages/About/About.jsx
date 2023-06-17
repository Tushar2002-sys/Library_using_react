import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About BookHub</h2>
            <p className='fs-17'>An online library, also known as a digital library or electronic library, is a digital collection of resources that provides access to books, journals, magazines, articles, and other types of information in electronic format. It is a virtual platform that allows users to access and retrieve information using computers or other digital devices connected to the internet.</p>
          
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
