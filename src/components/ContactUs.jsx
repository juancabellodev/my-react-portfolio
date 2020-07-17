import React from "react";

function ContactUs({ resumeData }) {
  return (
    <section id="contact">
      <div className="row section-head">
        <div className="two columns header-col">
          <h1>
            <span>Get In Touch.</span>
          </h1>
        </div>

        <div className="ten columns">
          <p className="lead">{resumeData.contactUsDescription}</p>
        </div>
      </div>

      <div className="row">
        <div className="eight columns">
          <form method="get" action="mailto:jdcabelloa@outlook.com">
            <label htmlFor=""></label>
            <button sytle={{ margin: 0 }} className="button">
              <i className="fa fa-envelope"></i> Contact Me
            </button>
          </form>
        </div>

        <aside className="four columns footer-widgets">
          <div className="widget widget_contact">
            <h4>Address and Phone</h4>
            <p className="address">
              {resumeData.name}
              <br />
              {resumeData.address1} <br />
              {resumeData.address2}
              <br />
              <span>{resumeData.phone}</span>
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default ContactUs;
