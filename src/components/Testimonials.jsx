import React from "react";

function Testimonials({ resumeData }) {
  return (
    <section id="testimonials">
      <div className="text-container">
        <div className="row">
          <div className="two columns header-col">
            <h1>
              <span>Client Testimonials</span>
            </h1>
          </div>

          <div className="ten columns flex-container">
            <div className="flexslider">
              <ul className="slides">
                {resumeData.testimonials &&
                  resumeData.testimonials.map((item, i) => {
                    return (
                      <li key={i}>
                        <blockquote>
                          <p>{item.description}</p>
                          <cite>{item.name}</cite>
                        </blockquote>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
