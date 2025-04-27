import React from "react";
import "./About.css";
import profilePic from './me.jpg';
const About = () => {
  return (
    <>
      
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
            <img src={profilePic} alt="Profile Picture" />
            </div>
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
              Hi, I'm Archita Sinha, a BTech Computer Science Engineering student at Vivekananda Institute of Professional Studies in Delhi. I’m passionate about data analytics and web development, and I strive to combine creativity and technical expertise to solve real-world problems.

I specialize in the MERN stack (MongoDB, Express.js, React.js, Node.js), Python, SQL, and machine learning. My experience includes building full-stack applications and using data analytics tools like Power BI and Excel to provide actionable insights.

During my internship at Orangus India Pvt. Ltd, I automated data processes, integrated machine learning models into dashboards, and optimized SQL queries. I’m constantly learning and experimenting with new technologies to improve my skills and build impactful solutions.

I’m always excited to work on challenging projects, collaborate with others, and grow as a professional. Feel free to explore my projects and connect with me!
              </p>
            </div>
          </div>
        </div>
      
    </>
  );
};

export default About;