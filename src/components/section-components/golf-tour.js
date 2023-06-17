import React from "react";
import Navbar from "../global-components/navbar";
import GolfDetails from "./golf-details";
import Footer from "../global-components/footer-v2";
import useLanguage from "../../hooks/useLanguage";

const GolfTourPage = () => {
  const [language, changeLanguage] = useLanguage();
  return (
    <div>
      <Navbar language={language} changeLanguage={changeLanguage} />
      <div
        className="breadcrumb-area jarallax"
        style={{
          backgroundImage:
            "url(https://www.golfdigest.com/content/dam/images/golfdigest/fullset/2016/03/15/56e82f36c750880b76a249f2_tour-operators-Carr-Golf.jpg)",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-inner">
                <h1 className="page-title">Golf Tour</h1>
                <ul className="page-list"></ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <GolfDetails language={language} />
      <Footer language={language} />
    </div>
  );
};

export default GolfTourPage;
