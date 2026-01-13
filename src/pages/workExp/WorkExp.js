import React from "react";
import { MdWorkOutline } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./WorkExp.css";
const WorkExp = () => {
  return (
    <>
      <div className="work" id="work">
        <div className="container work-exp">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Work Experience
          </h2>
          <hr />
          <VerticalTimeline lineColor="#1e1e2c">
                <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="July 2025 - December 2025"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<MdWorkOutline/>}
            >
              <h3 className="vertical-timeline-element-title">
                INTERN – BUSINESS INTELLIGENCE 
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Nippon Data Systems Ltd. 
              </h4>
              <p>• Built and deployed interactive Power BI dashboards for sales and financial reporting.</p>
              <p>• Integrated dashboards with ERP database to enable real-time business insights.</p>
              <p>• Performed data cleaning, transformation, and modeling to support analytics.</p>
              <p>• Delivered user-friendly visualizations that improved decision-making efficiency.</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="July 2025 - August 2025"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<MdWorkOutline/>}
            >
              <h3 className="vertical-timeline-element-title">
                INTERN – Agentic AI and Cloud 
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                IBM Skillbuild Internship 
              </h4>
              <p>• Developed an AI Agent for Financial Literacy using IBM Watsonx.ai, IBM Granite, Langflow, RAG architecture, and IBM Cloud.</p>
              <p>• Applied prompt engineering and retrieval-augmented generation for intelligent financial Q&A.</p>
              <p>• Selected among top 6,000 participants to present my project at the IBM India CSR Annual Summit 2025.</p>
              <p>• Recieved Learners Recognition Award from IBM.</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="September 2024 - December 2024"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<MdWorkOutline/>}
            >
              <h3 className="vertical-timeline-element-title">
                Data Analyst Intern
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Orangus India, pvt ltd
              </h4>
              <p>• Automated data pipelines and built Python scripts for process optimization and reporting tasks.</p>
              <p>• Integrated machine learning predictions into Power BI dashboards using backend scripting and APIs.</p>
              <p>• Formulated and optimized SQL queries for data extraction, anomaly detection, and fraud pattern recognition.</p>
              <p>• Developed Excel-based analytics tools and dashboards with embedded logic for business reporting.</p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default WorkExp;
