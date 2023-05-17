import React from "react";
import Navbar from "../global-components/navbar";
import SafariDetails from "./safari-details";
import Footer from "../global-components/footer-v2";
import useLanguage from "../../hooks/useLanguage";

const SafariTourPage = () => {
  const [language, changeLanguage] = useLanguage();
  return (
    <div>
      <Navbar language={language} changeLanguage={changeLanguage} />
      <div
        className="breadcrumb-area jarallax"
        style={{
          backgroundImage:
            "url(https://media.gadventures.com/media-server/cache/5d/d4/5dd46b0783702a11e8ed219b1a9ddae2.jpg)",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-inner">
                <h1 className="page-title">Safari Tour</h1>
                <ul className="page-list"></ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SafariDetails language={language} />
      <Footer />
    </div>
  );
};

export default SafariTourPage;
