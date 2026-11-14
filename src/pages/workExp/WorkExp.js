
import React from "react";
import { MdWorkOutline } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import "./WorkExp.css";

const WorkExp = () => {
  const workExperiences = [
    {
      date: "March 2026 - Present",
      title: "Data Analyst",
      company: "Z1 Tech",
      points: [
        "Analyze programmatic data across DSPs, SSPs and publishers; track CTR, CPC, CPA, CVR, eCPM, spend and margin.",
        "Identify trends, anomalies and inefficiencies across campaigns, keywords, publishers and traffic sources to guide bid and budget optimization.",
        "Validate campaign data and resolve reporting inconsistencies to maintain accurate performance insights.",
        "Analyze lead generation and conversion performance to evaluate cost efficiency and revenue impact.",
      ],
    },
    {
      date: "July 2025 - December 2025",
      title: "Intern - Business Intelligence",
      company: "Nippon Data Systems Ltd.",
      points: [
        "Built interactive Power BI dashboards for sales and financial reporting.",
        "Integrated dashboards with ERP databases to enable business insights.",
        "Performed data cleaning, transformation and modeling to support analytics.",
        "Created user-friendly visualizations to support business decision-making.",
      ],
    },
    {
      date: "July 2025 - August 2025",
      title: "Intern - Agentic AI and Cloud",
      company: "IBM SkillsBuild Internship",
      points: [
        "Developed an AI Agent for Financial Literacy using IBM Watsonx.ai, IBM Granite, Langflow, RAG architecture and IBM Cloud.",
        "Applied prompt engineering and retrieval-augmented generation for intelligent financial question answering.",
        "Selected among the top 6,000 participants to present the project at the IBM India CSR Annual Summit 2025.",
        "Received the IBM Learner Recognition Award.",
      ],
    },
    {
      date: "September 2024 - December 2024",
      title: "Data Analyst Intern",
      company: "Orangus India Pvt. Ltd.",
      points: [
        "Automated data pipelines and developed Python scripts for process optimization and reporting.",
        "Integrated machine learning predictions into Power BI dashboards using backend scripting and APIs.",
        "Developed SQL queries for data extraction, anomaly detection and fraud pattern recognition.",
        "Created Excel-based analytics tools and dashboards for business reporting.",
      ],
    },
  ];

  return (
    <div className="work" id="work">
      <div className="container work-exp">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Work Experience
        </h2>

        <hr />

        <VerticalTimeline lineColor="#1e1e2c">
          {workExperiences.map((experience, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "white",
                color: "#1e1e2c",
              }}
              contentArrowStyle={{
                borderRight: "7px solid white",
              }}
              date={experience.date}
              iconStyle={{
                background: "#1e1e2c",
                color: "#fff",
              }}
              icon={<MdWorkOutline />}
            >
              <h3 className="vertical-timeline-element-title">
                {experience.title}
              </h3>

              <h4 className="vertical-timeline-element-subtitle">
                {experience.company}
              </h4>

              {experience.points.map((point, i) => (
                <p key={i}>• {point}</p>
              ))}
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default WorkExp;
