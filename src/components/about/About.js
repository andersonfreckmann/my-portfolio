import React from "react";
import "./About.css";
const About = () => {
  return (
    <div className="about-container">
      <div className="about.desc">
       <h3>Let me tell you something about me</h3>
       <p>Hello everyone, <p/>

      my name is Anderson, I am fascinated for the learning and always looking for the next level.  
I have spent the last year  working on web-based aplications both on the 
front-end using technologies such as Javascript, Css, HTML, React. 
I believe I would be one of the top contributors to your team.  </p>
      </div>
      <div className="about-img">
        <img src="https://images.pexels.com/photos/8072913/pexels-photo-8072913.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="about"/>
      </div>
    </div>
  )
}

export default About
