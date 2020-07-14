import React from "react";

function Portfolio({ resumeData }) {
  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>

          <div
            id="portfolio-wrapper"
            className="bgrid-quarters s-bgrid-thirds cf"
          >
            {resumeData.portfolio &&
              resumeData.portfolio.map((item) => {
                return (
                  <div key={item.id} className="columns portfolio-item">
                    <div className="item-wrap">
                      <a href={`#${item.id}`} title="">
                        <img
                          alt=""
                          src={`${item.imgurl}`}
                          className="item-img"
                        />
                        <div className="overlay">
                          <div className="portfolio-item-meta">
                            <h5>{item.name}</h5>
                            <p>{item.description}</p>
                          </div>
                        </div>
                        <div className="link-icon">
                          <i className="icon-plus"></i>
                        </div>
                      </a>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        {resumeData.portfolio &&
          resumeData.portfolio.map((item) => {
            return (
              <div key={item.id} id={item.id} className="popup-modal mfp-hide">
                <img
                  className="scale-with-grid"
                  src={item.modalImgUrl}
                  alt=""
                />

                <div className="description-box">
                  <h4>{item.modalImgUrl}</h4>
                  <p>{item.modalDescription}</p>
                  <span className="categories">
                    <i className="fa fa-tag"></i>
                    {item.modalCategory}
                  </span>
                </div>

                <div className="link-box">
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    Details
                  </a>
                  <a className="popup-modal-dismiss">Close</a>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
}

export default Portfolio;
