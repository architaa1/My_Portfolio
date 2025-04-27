import React from "react";
import "./Projects.css";
import Fade from "react-reveal/Fade";
const Projects = () => {
  return (
    <>
      <div className="continer project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center">
        A curated collection of full-stack and data analytics projects demonstrating my ability to build real-world applications, analyze complex datasets, and deliver data-driven insights. Projects involve technologies like React.js, Node.js, Python, SQL, Power BI, and machine learning. Each project reflects hands-on experience, problem-solving, and impact-focused execution.
        </p>
        {/* card design */}
        <div className="row" id="ads">
          <Fade left>
            <div className="col-md-4">
              <div style={{ marginBottom: "20px" }} className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full stack</span>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGazUyzTSv1KTHLFtBqF2l5AE_6R6Z-sJoSA&s"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">react</span>
                  <span className="card-detail-badge">Mongodb</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">
                      Doctor Appointment Website
                    </h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://archita-doctors-appointment-website.onrender.com/"
                  >
                    Website
                  </a>
                  <a
                    className="ad-btn"
                    href="https://github.com/architaa1/architaa1-Doctors_Appointment_Website"
                  >
                    Github 
                  </a>
                  <a
                    className="ad-btn"
                    href="https://drive.google.com/file/d/1VLIU-fHRX6S3MIQnrayenmndHGMQwrbh/view?usp=drive_link"
                  >
                    Demo Video
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">React</span>
                  <img
                    src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/04/web-developer-portfolio.png"
                    alt="project2"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span style={{ marginLeft: "20px" }} className="card-detail-badge">React</span>
                  <span style={{ marginLeft: "25px" }} className="card-detail-badge">EmailJs</span>
                  <span style={{ marginLeft: "20px" }} className="card-detail-badge">Bootstrap</span>
                  <span style={{ marginLeft: "40px" }}className="card-detail-badge">SPA Design</span>
                  <span className="card-detail-badge">React MUI</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">Portfolio Website</h6>
                  </div>
     
                  <a
                    className="ad-btn"
                    href="https://github.com/architaa1/My_Portfolio"
                  >
                    Github 
                  </a>
                  <a
                    className="ad-btn"
                    href="https://drive.google.com/file/d/1wXSitGwUucwW_48vqk4hXsTM3n6HCOzi/view?usp=sharing"
                  >
                    Demo Video
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Machine Learning</span>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbTGk6t0VSe5hHtET8CwwBi2hgHanL9S0GdQ&s"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Python</span>
                  <span className="card-detail-badge">ML Models</span>

                  <span className="card-detail-badge">Excel</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">AI Model Predicting Electricity Demand in Delhi</h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/architaa1/AI-Model-Predicting-Electricity-Demand-in-Delhi"
                  >
                    Github 
                  </a>
                  <a
                    className="ad-btn"
                    href="https://drive.google.com/file/d/1Z-Z5mBmer5xdiOA9K0zUYH7n8bFDeFrv/view?usp=sharing"
                  >
                    Demo Video
                  </a>
                </div>
              </div>
            </div>
           <div>
            
           </div>
            <div  style={{ marginBottom: "30px" }} className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Visualisation</span>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeogmUyZM9P9EjJ1SPPvANetQp_8yn1xis--du8Wt6fHgeN_4oQFDL_nOaFjWUaFJyMyo&usqp=CAU"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">PowerBI</span>
                  <span className="card-detail-badge">SQL</span>

                  <span className="card-detail-badge">Machine Learning</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">Telecom Churn Analysis </h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/architaa1/Pbi_SQL_ML_INTEGRATED_PROJECT_TelecomChurnAnalysis"
                  >
                    Github 
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">SQL</span>
                  <img
                    src="https://cdn.prod.website-files.com/670526c69cb938e8bd8b4754/67471bada053732cb058acfb_Fraud-prevention-in-banking--1-.png"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">SQL</span>
                  <span className="card-detail-badge">Anomaly Detection</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">Bank Fraud Detection</h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/architaa1/Bank_Fraud_detection_SQL"
                  >
                    Github 
                  </a>

                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">PowerBI</span>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpbspiMahf3hAvS_5tSguZ4x8nCd5d6b5ysQ&s"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">PowerBI</span>
                  <span className="card-detail-badge">Reporting</span>
                  <span className="card-detail-badge">Visualisation</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">HR Analytics Dashboard</h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/architaa1/HR_ANALYTICS_DASHBOARD"
                  >
                    Github 
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Python</span>
                  <img
                    src="https://repository-images.githubusercontent.com/580716924/0fcbc0be-c877-4c94-a76a-781362b8004e"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Exploratory Data Analysis</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">Zomato Data Analysis</h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/architaa1/Zomato_Data_Analysis"
                  >
                    Github 
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Excel</span>
                  <img
                    src="https://d1ss4nmhr4m5he.cloudfront.net/wp-content/uploads/2025/03/04055727/10-Best-Hotel-Reservation-Software-Tools-in-2025-300x157.jpg"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Excel</span>
                  <span className="card-detail-badge">Dashboard</span>

                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">Hotel Booking Cancellations</h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/architaa1/HOTEL_BOOKING_CANCELLATIONS_EXCEL_DASHBOARD"
                  >
                    Github 
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Visualisation</span>
                  <img
                    src="https://salestack.in/admin/api/uploads/Product/1661228771MkVOHSXP.png"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Google lookerstudio</span>
                  <span className="card-detail-badge">Reporting</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">Orders Report Dashboard</h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://lookerstudio.google.com/u/0/reporting/673a5b2d-ebab-4bf4-84a6-ecf32fe9df2b/page/wMzEF?s=qt-gyPazPpc"
                  >
                    Link 
                  </a>
                </div>
              </div>
            </div>

            </Fade>
        </div>
      </div>
    </>
  );
};

export default Projects;