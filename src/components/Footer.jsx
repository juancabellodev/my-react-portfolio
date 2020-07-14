import React from "react";

function Footer({ resumeData }) {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">
            {resumeData.socialLinks &&
              resumeData.socialLinks.map((item, i) => {
                return (
                  <li key={i}>
                    <a href={item.url}>
                      <i className={item.className}></i>
                    </a>
                  </li>
                );
              })}
          </ul>
          <ul className="copyright">
            <li>
              &copy; Copyright {currentYear} {resumeData.name}
            </li>
            <li>
              Design by{" "}
              <a title="Styleshout" href="http://www.styleshout.com/">
                Styleshout
              </a>
            </li>
          </ul>
        </div>

        <div id="go-top">
          <a className="smoothscroll" title="Back to Top" href="#home">
            <i className="icon-up-open"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
