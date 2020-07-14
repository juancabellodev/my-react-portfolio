import React from "react";

function About({ resumeData }) {
  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img className="profile-pic" src="images/juan.png" alt="" />
        </div>

        <div className="nine columns main-col">
          <h2>About Me</h2>

          <p>{resumeData.aboutme}</p>

          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>{resumeData.name}</span>
                <br />
                <span>
                  {resumeData.address1}
                  <br />
                  {resumeData.address2}
                </span>
                <br />
                <span>{resumeData.phone}</span>
              </p>
            </div>
            <div className="columns download">
              <form method="get" action="download/JuanCabelloCV.docx">
                <button className="button">
                  <i className="fa fa-download"></i>Download Resume
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
