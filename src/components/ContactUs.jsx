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
          <form action="" method="post" id="contactForm" name="contactForm">
            <fieldset>
              {resumeData.contactUsForm &&
                resumeData.contactUsForm.map((item) => {
                  return (
                    <div key={item.inputId}>
                      <label>
                        {item.labelName}{" "}
                        <span className={item.className}>
                          {item.className && "*"}
                        </span>
                      </label>
                      <input
                        type={item.inputType}
                        value={item.inputValue}
                        size={item.inputSize}
                        id={item.inputId}
                        name={item.inputName}
                      />
                    </div>
                  );
                })}

              <div>
                <label>
                  Message <span className="required">*</span>
                </label>
                <textarea
                  cols="50"
                  rows="15"
                  id="contactMessage"
                  name="contactMessage"
                ></textarea>
              </div>

              <div>
                <button className="submit">Submit</button>
                <span id="image-loader">
                  <img alt="" src="images/loader.gif" />
                </span>
              </div>
            </fieldset>
          </form>

          <div id="message-warning"> Error boy</div>

          <div id="message-success">
            <i className="fa fa-check"></i>Your message was sent, thank you!
            <br />
          </div>
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
