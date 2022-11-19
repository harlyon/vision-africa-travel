import React from "react";
import Navbar from "../global-components/navbar";
import CityDetails from "./city-details";
import Footer from "../global-components/footer-v2";

const CityTourPage = () => {
  return (
    <div>
      <Navbar />
      <div
        className="breadcrumb-area jarallax"
        style={{
          backgroundImage: "url(https://cableandcompany.net/wp-content/uploads/2022/08/madrid-at-night.jpeg)",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-inner">
                <h1 className="page-title">City Tour</h1>
                <ul className="page-list"></ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CityDetails />
      <Footer />
    </div>
  );
};

export default CityTourPage;
