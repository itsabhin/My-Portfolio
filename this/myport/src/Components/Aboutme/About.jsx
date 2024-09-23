import React from 'react'
import './About.css'

import profile_img from '../../assets/cartoonboi.jpg'
const About = () => {
  return (
    
    <div id='about' className='about'>
        
        <div className='about-title'>
            <h1>About ME</h1>

                    </div>
        <div className="about-section">
            <div className="about-left">
                <img src={profile_img} height={400} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>im an unexperienced developer need some experience in the working environment
                        i do have knowledge of of how to work in a team.
                    </p>
                    <p>im very passionate about my work and ife</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML&CSS</p><hr style={{width:"50%"}} /></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width:"70%"}} /></div>
                    <div className="about-skill"><p>javaScript</p><hr style={{width:"60%"}} /></div>
                    <div className="about-skill"><p>Python</p><hr style={{width:"50%"}} /></div>
                </div>
            </div>
        </div>
        <div className='about-achievements'>
            <div className="about-achievement">
                <h1>2+</h1>
                <p>INTERNSHIP EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>5+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>11+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
        </div>
    </div>
  )
}

export default About