import React from "react";
import Navbar from "../global-components/navbar";
import CityDetails from "./city-details";
import Footer from "../global-components/footer-v2";
import useLanguage from "../../hooks/useLanguage";

const CityTourPage = () => {
  let publicUrl = process.env.PUBLIC_URL + "/";
  const [language, changeLanguage] = useLanguage();

  return (
    <div>
      <Navbar language={language} changeLanguage={changeLanguage} />
      <div
        className="breadcrumb-area jarallax"
        style={{
          backgroundImage: "url(" + publicUrl + "assets/img/banner/night.jpeg)",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-inner">
                <h1 className="page-title">
                  {language === "ch" ? "城市观光" : "City Tour"}
                </h1>
                <ul className="page-list"></ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CityDetails language={language} />
      <Footer language={language} />
    </div>
  );
};

export default CityTourPage;
