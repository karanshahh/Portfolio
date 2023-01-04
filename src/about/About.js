import React from 'react'
import Info from './Info'
import "./About.css"
const About = () => {
  return (
    <section className="about section" id="about">
        <p className="about-title">About Me</p>
        <p className="about-subtitle">Short Introduction</p>
        <div className="about-container container grid">
            <div className="about-data">
                <Info />
                <p className="about-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nisi orci, 
                fringilla maximus nibh vel, commodo lacinia felis. Phasellus in mauris et lorem 
                vehicula lacinia sit amet et lectus. Donec eleifend nulla a vulputate aliquam. 
                Aliquam interdum, lorem sed scelerisque venenatis, lacus dui eleifend diam, vel 
                feugiat tellus sem in purus. In at purus lectus. In hac habitasse platea dictumst. 
                Phasellus vel dui nec tortor euismod finibus at ac erat.
                </p>
                <a download="" className="btn btn-dark"><i class="fa-solid fa-download"></i> Resume</a>
            </div>
            <strong>Import your digital business card here</strong>
        </div>
    </section>
  )
}

export default About