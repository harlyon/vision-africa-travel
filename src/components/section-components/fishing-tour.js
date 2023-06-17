import React from "react";
import Navbar from "../global-components/navbar";
import FishingDetails from "./fishing-details";
import Footer from "../global-components/footer-v2";
import useLanguage from "../../hooks/useLanguage";

const FishingTourPage = () => {
  const [language, changeLanguage] = useLanguage();
  let publicUrl = process.env.PUBLIC_URL + "/";
  return (
    <div>
      <Navbar language={language} changeLanguage={changeLanguage} />
      <div
        className="breadcrumb-area jarallax"
        style={{
          backgroundImage: "url(" + publicUrl + "assets/img/fishing.jpg)",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-inner">
                <h1 className="page-title">
                  {language === "ch" ? "海钓" : "Fishing Tour"}
                </h1>
                <ul className="page-list"></ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FishingDetails language={language} />
      <Footer language={language} />
    </div>
  );
};

export default FishingTourPage;
