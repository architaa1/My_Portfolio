import React from "react";
import { MdSchool } from "react-icons/md";
import { PiCertificate } from "react-icons/pi";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Education.css";
const Education = () => {
  return (
    <>
      <div className=" education" id="education">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Education Details
        </h2>
        <hr />
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2022 - 2026"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">BTech</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Vivekananda Institute of Professional Studies,(GGSIPU)    
              Delhi, India
            </h4>
            
          </VerticalTimelineElement>
          </VerticalTimeline>
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Certifications
        </h2>
        <hr />
  
      <VerticalTimeline>  
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="June 2024 - September2024"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<PiCertificate />}
          >
            <h3 className="vertical-timeline-element-title">Data Analytics</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Techstack Academy, </h4>
              <h4 >Delhi, India
            </h4>
            <a href="https://drive.google.com/file/d/19Zs89BSN62bNRc9kNuog6LPaHNlgzjUd/view">Certificate</a>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="February, 2025"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<PiCertificate />}
          >
            <h3 className="vertical-timeline-element-title">Accenture Data Analytics Job Simulation</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Forage </h4>
              <a href="https://drive.google.com/file/d/1nZqxWgIJ1gQmtn7cOsdEaeh6wUX2tdi7/view?usp=sharing">Certificate</a>       
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="April, 2025"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<PiCertificate />}
          >
            <h3 className="vertical-timeline-element-title">Become a Full Stack Web Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">
              LinkedIn Learning </h4>
              <a href="https://drive.google.com/file/d/1kpg9OZ20cKHKHPMT1wsomTJJ5BgdQxPV/view">Certificate</a>       
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="April, 2025"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<PiCertificate />}
          >
            <h3 className="vertical-timeline-element-title">SQL Essential Training</h3>
            <h4 className="vertical-timeline-element-subtitle">
              LinkedIn Learning </h4>
              <a href="https://drive.google.com/file/d/1pDyuVmPg_sRYKuj6O4o7RzaB5Fno5Xg_/view">Certificate</a>       
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Education;